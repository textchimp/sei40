import React from 'react';
import './App.css';

import Home from './Home';
import TeethSales from './TeethSales';
import Procedures from './Procedures';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

import { Route, Link, HashRouter as Router  } from 'react-router-dom';


class App extends React.Component {

  render(){

    return (
      <div className="App">
        <h1>Let me be your dentist. I insist.</h1>

        <Router>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/procedures">Procedures</Link> |
            <Link to="/teethshop">Teeth Sales</Link>
            <br />
            <Route path="/" component={ SearchForm } /> { /* appears on every route */ }
          </nav>
          <hr />

          {
            // Like Rails routes.rb:
            // get '/' => 'pages#home'
          }
          <Route exact path="/" component={ Home } />
          <Route exact path="/procedures" component={ Procedures } />
          <Route exact path="/teethshop" component={ TeethSales } />
          <Route exact path="/search/:query" component={ SearchResults } />

        </Router>

        <footer>
          <hr />
          &copy; 2021 Unsettling Professionals
        </footer>

      </div>
    );

  } // render()

} // class App

export default App;
