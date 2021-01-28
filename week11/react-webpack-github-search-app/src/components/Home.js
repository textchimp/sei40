import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <div>
      <h1>GitHub Search</h1>
      <hr />

      <Link to="/search">Search for a User</Link>

    </div>
  );

}; // Home

export default Home;
