<template>
  <div>
    <!--
    This v-if directive causes the <p> tag it appears in to
    show only when the condition is true; here, flight.id will
    be undefined until the axios request saves its result
    into the flight state (which includes the id)
    -->
    <p v-if="flight.id === undefined">Loading flight details...</p>


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

      <div class="seating">

        <div class="planeRow" v-for="row in flight.airplane.rows">
          {{ row }}

          <div
            v-for="col in flight.airplane.cols"
            class="planeSeat"
            :class=""
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
const API_FLIGHT_SHOW_BASE_URL = 'http://localhost:3000/flights';

import axios from 'axios';
export default {
  props: [ 'id' ],

  data(){
    return {
      flight: {}
    };
  },

  mounted(){

    // Get the flight info for this flight ID from the Rails API backend
    axios.get(`${API_FLIGHT_SHOW_BASE_URL}/${ this.id }`)
    .then( (res) => {
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

  },

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
  }

  .seating {
    margin-top: 30px;
  }

</style>
