import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom' ;

import Home from './Home';
import Search from './Search';
import Profile from './Profile';

const App = () => {

  return (
    <Router>
      <div>
        <Route exact path="/" component={ Home } />
        <Route component={ Search } /> { /* no path! i.e. appears on every route */ }
        <Route exact path="/profile/:user" component={ Profile } />
      </div>
    </Router>
  );

}; // App

export default App;
