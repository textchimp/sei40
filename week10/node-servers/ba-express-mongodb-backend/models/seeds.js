const flights =  [
  {
    flight_number: 'BA123',
    origin: 'SYD',
    destination: 'MEL',
    departure_date: new Date('2021-10-01T04:20:00Z'),
    airplane: { name: '737', rows: 10, cols: 4  },
    reservations: [
      { row: 1, col: 1, user_id: 10 },
      { row: 2, col: 2, user_id: 10 },
      { row: 3, col: 3, user_id: 11 },
    ] // reservations
  }, // first flight
  {
    flight_number: 'BA456',
    origin: 'SYD',
    destination: 'MEL',
    departure_date: new Date('2021-11-01T04:20:00Z'),
    airplane: { name: '767', rows: 12, cols: 6  },
    reservations: [
      { row: 1, col: 1, user_id: 10 },
      { row: 2, col: 2, user_id: 10 },
      { row: 3, col: 3, user_id: 11 },
    ] // reservations
  }, // second flight
  {
    flight_number: 'BA789',
    origin: 'SYD',
    destination: 'SIN',
    departure_date: new Date('2021-11-01T04:20:00Z'),
    airplane: { name: '767', rows: 12, cols: 6  },
    reservations: [
      { row: 1, col: 1, user_id: 10 },
      { row: 2, col: 2, user_id: 10 },
      { row: 3, col: 3, user_id: 11 },
    ] // reservations
  }, // third flight
];


const mongoose = require('mongoose');

// Load our model file
const Flight = require('./Flight');

// Connect to the DB
mongoose.connect('mongodb://localhost/ba', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
});

// Once the connection is established, we can start querying/seeding
db.once('open', async () => {

  // Flight.find()
  // .then( data => {
  //   console.log('Flights:', data);
  // })
  // .catch( console.warn );

  // Seed from here
  // 1. await deleting flights:
  //    await Flight.deleteMany( {} );      // destroy_all
  //    await Flight.create( [ {}, {} ] )
  //

  // Create the Burning Airlines API routes in a server.js express file!
  // Use the same Mongoose connection lines as in this file!

  // Remember to wrap your 'await' code in try-catch blocks to catch errors!

  try {

    // 1. Empty the flights collection (table), just like Rails Flight.destroy_all
    await Flight.deleteMany();

    // 2. Insert the new flights
    await Flight.create( flights ); // array of flights

    const flightResults = await Flight.find();
    console.log('flights', flightResults);
  } catch(err){
    console.log('Error finding flights:', err);
  }

  process.exit(0); // quit program

}); // once connection is established
