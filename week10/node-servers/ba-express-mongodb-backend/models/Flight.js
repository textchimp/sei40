const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({

  // NOTE: just using snake case so the field names
  // eventually returned by the API match the Rails fields.
  // In pure MongoDB you would use camelCase, i.e. flightNumber
  flight_number: String,
  origin: String,
  destination: String,
  departure_date: Date,
  airplane: {
    name: String,
    rows: Number,
    cols: Number
  },
  // a flight can have many nested reservations
  reservations: [
    {
      row: Number,
      col: Number,
      // reservations belong to a user

      user_id: Number

      // TODO: MAKE THIS WORK:
      //
      // user: {
      //   type: mongoose.Schema.Types.ObjectID,
      //   ref: 'User' // this creates a kind of association to the User model
      // }


    }
  ]

}); // Schema

// In order to require() this model in other JS code, we have to
// export it here
module.exports = mongoose.model('Flight', FlightSchema);
