<template>
  <div>
    <!--
    This v-if directive causes the <p> tag it appears in to
    show only when the condition is true; here, flight.id will
    be undefined until the axios request saves its result
    into the flight state (which includes the id)
    -->
    <p v-if="flight._id === undefined">Loading flight details...</p>


    <!--
    This v-else causes this div to appear only when the above
    v-if condition evaluates to false. You are only allowed to
    use a v-else tag when the tag is an immediate sibling
    of a v-if.
    Here it means, "don't try to show the flight details
    until they are actually available (after the axios request)"
  -->
    <div class="details" v-else>
      <h2 class="flight_number">{{ flight.flight_number }}</h2>

      <div class="departure_date">
        <strong>Departure Date:</strong>
        {{ flight.departure_date_formatted }}
      </div>

      <div class="origin">
        <strong>Origin:</strong>
        {{ flight.origin }}
      </div>

      <div class="destination">
        <strong>Destination:</strong>
        {{ flight.destination }}
      </div>

      <div class="airplane">
        <strong>Aircraft:</strong>
        {{ flight.airplane.name }}
      </div>


      <ReservationConfirm
        v-if="selectedSeat.row !== null"
        :seat="selectedSeat"
        :flightID="flight._id"
        v-on:seatBooked="updateReservations"
      />


      <div class="seating">

        <div class="planeRow" v-for="row in flight.airplane.rows">
          {{ row }}

          <div
            v-for="col in flight.airplane.cols"
            class="planeSeat"
            :class="seatStatus(row, col)"
            @click="selectSeat(row, col)"
          >
            {{ col | toSeatLetter }}
          </div>

          {{ row }}

        </div>


      </div><!-- .seating -->


    </div><!-- .details -->

  </div>
</template>


<script>
// Pretend we are logged in
const FAKE_USER_ID = 19; // USE YOUR OWN USER_ID

import ReservationConfirm from './ReservationConfirm';

import api from '@/lib/api';    // api.getFlights()
// import { getFlights } from '@/src/lib/api'; // getFlights()

export default {
  props: [ 'id' ],

  // You need to 'register' any child components which
  // this component renders
  components: { ReservationConfirm },

  data(){
    return {
      flight: {},
      selectedSeat: {
        // For keeping track of the user's selected seat,
        // before the confirmation
        row: null,
        col: null
      }
    };
  },

  mounted(){

    // Get the flight info for this flight ID from the Rails API backend

    console.log('flight lookup', this.id);
    api.getFlight(this.id)
    .then( (res) => {
      console.log('DATA', res.data);
      this.flight = res.data;
      // console.log( res.data );
    })
    .catch( console.warn );

  }, // mounted

  filters: {
    // filters are functions that you can only use in templates,
    // and they have a special pipe syntax for using & chaining

    toSeatLetter( num ){
      // We want to map seat numbers like 1 - 6
      // to letters like A - F
      return String.fromCharCode(64 + num);
    }

  }, // filters

  methods: {

    seatStatus(seatRow, seatCol){

      // Loop through the flight reservations,
      // and check if any of them match the
      // row & col arguments this function has
      // received
      // If we find a match, return 'occupied'
      // If we haven't found a match by the end of the
      // loop, return ''

      // this.flight.reservations.forEach((res) => {
      // 👆NO GOOD! our 'return' returns from the callback,
      // doesn't return the class name to the div attribute

      // Total iterations: rows * cols * reservations.length
      // EVERY RE-RENDER! i.e. 40 * 6 * 100 = 24,000 per render
      //
      // TODO: When flight data loads, loop through reservations
      // and turn them into an object indexed by "row-col",
      // i.e. "10-2": 19  (user id as value of key)
      // which removes this extra level of looping over the
      // reservations array every time we draw a seat
      // ... because object lookup is "constant time", not
      // proportional to the number of items

      // Is this seat our selected (but not confirmed seat?)
      if(
        seatRow === this.selectedSeat.row &&
        seatCol === this.selectedSeat.col
      ){
        return 'selected';
      }

      for(let i = 0; i < this.flight.reservations.length; i++){

        const res = this.flight.reservations[i];

        if( seatRow === res.row && seatCol === res.col ){

          // There's a match, but is this OUR seat or not?
          if( FAKE_USER_ID === res.user_id ){
            return 'booked'; // it's ours!
          } else {
            return 'occupied';  // this becomes the class name of div
          }

        } // if seat match

      } // for

      return '';  // if we didn't return in the loop, it must be free

    }, // seatStatus

    selectSeat(row, col){
      console.log('clicked!', row, col);

      this.selectedSeat = { row, col };
    }, // selectSeat

    updateReservations( newReservation ){

      console.log('FlightDetails::updateReservations()');
      console.log('newReservation', newReservation);

      // Update the list of reservations, which will cause
      // a re-render that will show this reserved seat as
      // booked by us
      this.flight.reservations.push( newReservation );

      // Clear the selected seat!
      this.selectedSeat = { row: null, col: null };


    }, // updateReservations

  }, // methods

};
</script>

<style>
  .planeSeat {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: 4px;
    border: 1px solid #CCCCCC;
    border-radius: 20% 20% 0 0;
    cursor: pointer;
  }

  .seating {
    margin-top: 30px;
  }

  .occupied, .booked {
    pointer-events: none; /* stop mouse events from registering! */
  }

  .occupied {
    background-color: grey;
  }

  .booked {
    background-color: orange;
  }

  .selected {
    background-color: green;
  }

</style>
