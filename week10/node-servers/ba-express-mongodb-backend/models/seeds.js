
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
    const flights = await Flight.find();
    console.log('flights', flights);
  } catch(err){
    console.log('Error finding flights:', err);
  }

  process.exit(0); // quit program

}); // once connection is established
