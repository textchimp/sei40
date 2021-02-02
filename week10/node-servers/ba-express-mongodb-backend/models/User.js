
// import { mongoose } from 'mongoose';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordDigest: String,

  createdAt: {
    type: Date,
    default: Date.now // automatically fill out createdAt field with current date
  },

  reservations: [{
    row: Number,
    col: Number,
    createdAt: { type: Date, default: Date.now },

    // Reservations belong to a Flight
    // This Mongoose syntax lets us set a Flight doc's _id field here,
    // and Mongoose will fill the association for us when we .populate()
    // i.e. User.find().populate('reservations.flight')

    flight: {
      ref: 'Flight', // this 'flight' key is a reference to a Flight model instance
      type: mongoose.Schema.Types.ObjectId  // flight is an _id for a Flight collection object
    }

  }], // reservations array

}); // UserSchema

// We can create custom methods to call on this model, just as
// we can with ActiveRecord models in Rails

// NOT an arrow function because Mongoose will set 'this' to be the user object
// i.e. currentUser.saveReservation({...})  ---> 'this' will refer to currentUser
UserSchema.methods.saveReservation = async function (res) {

  // Save reservation into both places that we are storing it:
  // 1. Into the Flight's reservations list
  // 2. Into this User's reservations list

  // 1. await res.flight.updateOne( { ... })
  // 2. await this.update( { ... } )

  // return this;

}; // saveReservation

module.exports = mongoose.model('User', UserSchema);
