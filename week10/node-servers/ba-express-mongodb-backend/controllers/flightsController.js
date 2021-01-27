
const Flight = require('../models/Flight');

module.exports = {

  // index: async function(req, res){
  async index(req, res){

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

  }, // index

  async search( req, res ){

    // console.log(req.params);

    const results = await Flight.find({
      origin: req.params.origin,
      destination: req.params.destination
    });

    res.json( results );

  }, // search

  async show( req, res ){

    const flight = await Flight.findOne({ flight_number: req.params.flight_number });
    res.json( flight );

  }, // show (i.e. getFlight)


  async createReservation( req, res ){

    console.log('POST reservation', req.params);
    console.log('formdata', req.body);

    const FAKE_USER_ID = 19;

    // const f = await Flight.find({ criteria });
    // f.update( { fields } )
    const newReservation = {
      row: req.body.row,
      col: req.body.col,
      user_id: FAKE_USER_ID
    }

    try {

      // NOTE: use Flight.findOneAndUpdate() if you want to get back the changed document!
      const flight = await Flight.updateOne(
        // how to find the document to change:
        { _id: req.params.id },
        // what to change about it:
        {
          $push: { reservations: newReservation } //  $push means push to the array, don't overwrite it!
        }
      );

      // send the new reservation object back to the frontend,
      // so the seating diagram updates automatically
      res.json( newReservation );

    } catch( err ){
      console.log('ERROR saving reservation', err);
      res.sendStatus(422);  // 'Unprocessable entity'
    } // catch

  }, // createReservation

};
