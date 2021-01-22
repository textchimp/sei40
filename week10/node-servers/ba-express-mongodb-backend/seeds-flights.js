
const MongoClient = require('mongodb');

let db; // store the DB connection object here

MongoClient.connect(
  'mongodb://127.0.0.1:27017/',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {

    // Check for errors
    if( err ){
      console.log( 'Error connecting to MongoDB!', err );
      process.exit( 1 ); // quit the program with a non-zero error code
    } // error handling

    db = client.db('ba');
    console.log('Connected! Using db: "ba" ');

    insertFlights();

  }
); // connect


const insertFlights = () => {

  db.collection('flights').insertMany( [
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
    }, // first flight
  ],
  (err, result) => {

    if( err ) return console.log('Error adding flights', err);

    console.log(`Success! Added ${ result.insertedCount } flights`);

    printFlights();


  }); // insertMany


}; // insertFlights


const printFlights = () => {

  // Flight.find();

  db.collection('flights').find().toArray( (err, flights) => {

    if( err ) return console.log('Error finding flights', err);

    console.log('Flights:', flights);
    debugger;
    // pause in debugger: only works if you run this file
    // through ndb: ./node_modules/.bin/ndb seeds-flights

    process.exit(0); // Finished! Quit the program with a success code


  }); // find flights

}; // printFlights
