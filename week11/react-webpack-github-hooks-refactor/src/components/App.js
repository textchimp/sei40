import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom' ;

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import FlightSearchResults from './FlightSearchResults';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // Express server GraphQL endpoint
  cache: new InMemoryCache()
});

const App = () => {

  return (
    <ApolloProvider client={ client }>  { /* Uses React Context */ }
      <Router>
        <div>
          <Route exact path="/" component={ Home } />
          <Route component={ Search } /> { /* no path! i.e. appears on every route */ }
          <Route exact path="/profile/:user" component={ Profile } />
          <Route exact path="/flights/search/:origin/:destination" component={ FlightSearchResults } />
        </div>
      </Router>
    </ApolloProvider>
  );

}; // App

export default App;
