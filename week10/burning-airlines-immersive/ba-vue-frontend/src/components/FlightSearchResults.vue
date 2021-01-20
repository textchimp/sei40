<template>
  <div>

    <div class="container header">
      <div>Departure Date</div>
      <div>Flight Number</div>
      <div>Plane</div>
      <div>Origin</div>
      <div>Destination</div>
    </div>


    <p v-if="flights.length === 0">Loading results...</p>

    <div v-for="flight in flights" class="container result" @click="gotoFlight(flight.id)">
      <div>{{ flight.departure_date_formatted }}</div>
      <div>{{ flight.flight_number }}</div>
      <div>{{ flight.airplane.name }}</div>
      <div>{{ flight.origin }}</div>
      <div>{{ flight.destination }}</div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
const API_FLIGHT_SEARCH_BASE_URL = 'http://localhost:3000/flights/search';


export default {
  name: 'FlightSearchResults',

  // In Vue you actually have to declare the names of props your component expects.
  //
  props: [ 'origin', 'destination' ],  // this.origin, this.destination (NOT this.props.origin)

  data(){
    return {
      // state goes here
      // x: ''    // this.x (NOT React style, which is this.state.x)

      flights: [], // axios AJAX response data will go here

    };
  }, // data


  // This function runs once when the component is added to the page,
  // just like React's componentDidMount
  mounted(){
    // console.log('mounted!');
    axios.get(`${API_FLIGHT_SEARCH_BASE_URL}/${this.origin}/${this.destination}`)
    .then( (res) => {
      // console.log( 'response', res.data );
      this.flights = res.data;  // save into state ( no this.setState()! )
    })
    .catch( (err) => {
      console.dir( err );
    });

  },

  methods: {

    gotoFlight( flightID ){    //   gotoFlight: function(){

      this.$router.push({
        name: 'FlightDetails',
        params: { id: flightID }
      });

    }, // gotoFlight

  },


};
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .header {
    background-color: rgb(30, 28, 101);
    color: white;
    font-weight: bold;
  }

  .result {
    cursor: pointer;
    transition: 0.5s;
  }

  .result:hover{
    background-color: #EEEEEE;
    font-weight: bold;
  }

</style>
