// Main Express server file

const express = require('express');
const app = express();
const PORT = 3000;

const flightsController = require('./controllers/flightsController');

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


// Now this server.js looks a lot like a Rails routes.rb file!

// get '/flights' => 'flights#index'

app.get('/flights', flightsController.index  );

app.get('/flights/search/:origin/:destination', flightsController.search );

app.get('/flights/:flight_number', flightsController.show );

app.post('/flights/:id/reservation', flightsController.createReservation );


// so we can require() & start-stop the server from test suite:
module.exports = server;
