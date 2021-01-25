// Main Express server file

const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use( cors() ); // Use cors handling as Express middleware, i.e. set header


const mongoose = require('mongoose');

// Load our model file
const Flight = require('./models/Flight');

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



app.get('/flights', async (req, res) => {

  // Get all flights using Mongoose 'Flight' model
  // Flight.find()
  // .then( (flights) => {
  //   res.json( flights ); // Send the result of the query to the browser
  // })
  // .catch( console.warn );

  try {
    const flights = await Flight.find();
    res.json( flights );
  } catch( err ){
    console.log('ERROR querying DB for flights', err);
    res.sendStatus( 500 );  // signal to the frontend 'Internal server error'
  }

}); // GET /flights


app.get('/flights/search/:origin/:destination', async (req, res) => {

  // console.log(req.params);

  const results = await Flight.find({
    origin: req.params.origin,
    destination: req.params.destination
  });

  res.json( results );

}); // GET /flights/search/:origin/:destination


app.get('/flights/:flight_number', async (req, res) => {

  const flight = await Flight.findOne({ flight_number: req.params.flight_number });
  res.json( flight );

}); // GET /flights/:flight_number

// so we can require() & start-stop the server from test suite:
module.exports = server;
