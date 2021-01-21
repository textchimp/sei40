<template>
  <div>

    <h3>Your Seat Selection:</h3>
    <div class="seat"><!-- class name here is not related to prop -->
      {{ seat.row }} {{ String.fromCharCode(64 + seat.col) }}
    </div>

    <br />

    <button @click="confirmSeat">Confirm</button>

  </div>
</template>


<script>
import axios from 'axios';
const API_FLIGHT_RESERVATION_CONFIRM_URL = 'http://localhost:3000/flights';

export default {
  props: [ 'seat', 'flightID' ],
  methods: {
    confirmSeat(){
      console.log('confirm!');

      // Do the axios.post right here, and send the response
      // to the parent
      const url = `${API_FLIGHT_RESERVATION_CONFIRM_URL}/${this.flightID}/reservation`;

      axios.post(url, {
        row: this.seat.row,
        col: this.seat.col,
      })
      .then( (res) => {

        console.log('booking response', res.data);
        // In Vue, you don't have to pass down a callback function
        // from the parent as a prop (as in React).
        // All components have a built-in '$emit' method that lets
        // you send custom events & data up to the parent component
        this.$emit( 'seatBooked', res.data );

      })
      .catch();


    } // confirmSeat
  }, // methods
};
</script>


<style scoped>
.seat {
  font-weight: bold;
  color: green;
  font-size: 24px;
}
</style>
