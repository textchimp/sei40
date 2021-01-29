// Main Express server file

const express = require('express');
const app = express();
const PORT = 3000;

const flightsController = require('./controllers/flightsController');

const Flight = require('./models/Flight');

const cors = require('cors');
app.use( cors() ); // Use cors handling as Express middleware, i.e. set header

// To support POSTed formdata, we need to add this Express middleware:
app.use( express.json() ); // Add support for JSON-encoded request bodies
app.use( express.urlencoded( {extended: true} ) );

const mongoose = require('mongoose');

// Connect to the DB
mongoose.connect('mongodb://localhost/ba', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
});


// Once the connection is established, we can start querying/seeding
// db.once('open', () => {
// Once the DB is connected, we can start accepting HTTP requests
//
// }); // db.once open

const server = app.listen(PORT, () => {
  console.log(`BA server listening on http://localhost:${PORT} ...`);
});


// GraphQL endpoint setup
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    flights(origin: String, destination: String): [ Flight ]
    flight(id: String!): Flight
  }

  type Flight {
    flight_number: String
    origin: String
    destination: String
    _id: String
    reservations: [Reservation]
  }

  type Reservation {
    row: Int
    col: Int
    _id: String
  }

`);

// This is how we decide what to do in our server/mongoose code
// when someone asks for e.g. 'flights' in their query
const rootResolver = {

  // flights: () => Flight.find(),
  flights: (query) => {
    console.log('flights resolver', query);

    // Do an actual Mongoose query to get the data
    // Mongoose queries return promises, and GraphQL will notice
    // if this resolver function 'flights' returns a promise,
    // and automatically wait for the promise to resolve, sending
    // the resolved promise value as the response to this query!
    return Flight.find( query );

  }, // flights

  flight: (query) => {
    console.log('flight (by ID) resolver', query);
    return Flight.findOne( { flight_number: query.id } );
  }, // flight

}; // rootResolver

// Tell Express to create a GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootResolver,
  graphiql: true
}));


// RESTful API routes
// Now this server.js looks a lot like a Rails routes.rb file!
// get '/flights' => 'flights#index'
app.get('/flights', flightsController.index  );
app.get('/flights/search/:origin/:destination', flightsController.search );
app.get('/flights/:flight_number', flightsController.show );
app.post('/flights/:id/reservation', flightsController.createReservation );


// so we can require() & start-stop the server from test suite:
module.exports = server;
