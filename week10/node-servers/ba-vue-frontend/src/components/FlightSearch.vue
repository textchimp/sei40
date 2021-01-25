<template>
  <div>
    <h2 class="header">Search Flights</h2>

    <label>Origin:</label>
    <select v-model="origin" id="origin">
      <option value="">Please select:</option>
      <option>SYD</option>
      <option>MEL</option>
      <option>SFO</option>
      <option>SIN</option>
    </select>
    &nbsp; &nbsp;
    <label>Destination:</label>
    <select v-model="destination">
      <option value="">Please select:</option>
      <option>SYD</option>
      <option>MEL</option>
      <option>SFO</option>
      <option>SIN</option>
    </select>
    &nbsp; &nbsp;
    <button v-on:click="submitSearch">Search</button>


  </div>
</template>


<script>
  // import axios from 'axios';
  export default {
    name: 'FlightSearch',

    // data: function(){
    // },
    // ES6 method declaration:

    data(){
      // Initialise the state of this app, just like in React
      return {
        origin: '',
        destination: ''
      };
    }, // data()

    methods: {

      submitSearch(){
        console.log('button clicked!');
        // this.$router.push(`/search/${this.origin}/${this.destination}`);

        this.$router.push({
          name: 'SearchResults',
          params: {
            origin: this.origin,
            destination: this.destination
          }
        });


      }

    }, // methods

  };
</script>


<style>
</style>
