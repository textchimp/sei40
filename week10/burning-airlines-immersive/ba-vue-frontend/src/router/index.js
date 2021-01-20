import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch';
import FlightSearchResults from '@/components/FlightSearchResults';
import FlightDetails from '@/components/FlightDetails';

// console.log( 'env', process.env.NODE_ENV );


if( !process || process.env.NODE_ENV !== 'testing' ){
  // Only use the router if we're running this code
  // as part of our test suite (because we want to
  // fake the router in our tests)
  Vue.use(Router);
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'Search',
      component: FlightSearch
    },
    {
      path: '/search/:origin/:destination',
      name: 'SearchResults',
      component: FlightSearchResults,
      props: true
    },

    {
      path: '/flights/:id',
      name: 'FlightDetails',
      component: FlightDetails,
      props: true
    },

  ]
})
