
const bcrypt = require('bcrypt');


// flight seed data
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

// Load our model files
const Flight = require('./Flight');
const User = require('./User');

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
  //
  // Seed from here
  // 1. await deleting flights:
  //    await Flight.deleteMany( {} );      // destroy_all
  //    await Flight.create( [ {}, {} ] )
  //
  //
  // Create the Burning Airlines API routes in a server.js express file!
  // Use the same Mongoose connection lines as in this file!
  //
  // Remember to wrap your 'await' code in try-catch blocks to catch errors!

  const flightsCreated = await createFlights();
  console.log('Flights done, created ', flightsCreated.length );

  // Now move on to creating users
  const usersCreated = await createUsers( flightsCreated ); // pass the created flights in
  console.log('Users done, created ', usersCreated.length );
  console.log(usersCreated[0]);
  console.log(usersCreated[0].reservations);

  process.exit(0); // quit program

}); // once connection is established


const createFlights = async () => {

  try {

    // 1. Empty the flights collection (table), just like Rails Flight.destroy_all
    await Flight.deleteMany();

    // 2. Insert the new flights
    await Flight.create( flights ); // array of flights

    const flightResults = await Flight.find();
    // console.log('flights', flightResults);

    return flightResults; // this will be the resolved promise value of this async function

  } catch(err){
    console.log('Error creating flights:', err);
  }

}; // createFlights


const createUsers = async (flights) => {

  // user seed data


  const users = [
    {
      name: 'Test User 1',
      email: 'one@one.com',
      passwordDigest: bcrypt.hashSync('chicken', 10),
      // reservations?? need to know flight IDs first!
      reservations: [
        {
          row: 1, col: 1,
          flight: flights[0]
        },
        {
          row: 2, col: 2,
          flight: flights[1]
        },
      ], // reservations
    },
    {
      name: 'Test User 2',
      email: 'two@two.com',
      passwordDigest: bcrypt.hashSync('chicken', 10),
      // reservations?? need to know flight IDs first!
      reservations: [
        {
          row: 3, col: 3,
          flight: flights[0]._id
        },
        {
          row: 4, col: 4,
          flight: flights[1]._id
        },
      ], // reservations
    },
  ];


  try {

    await User.deleteMany(); // clear the collection! .destroy_all

    await User.create( users ); // TODO: no reservations!

    const createdUsers = await User.find().populate('reservations.flight');

    return createdUsers;

  } catch(err) {
    console.log('Error creating users', err);
  }

}; // createUsers
