import React from 'react';  // import the base React class
import './App.css';

// Load the component we want to use as a 'child'
import HelloUser from './HelloUser';

// like Ruby '<',   class User < ApplicationRecord
class App extends React.Component {

  // Every component class must have at minimum a render() method,
  // which must return some JSX tags


  render(){
    return (
      <div className="App">
        <h1>Hello World from React!</h1>

        <HelloUser name="Sam" imgWidth="300" imgHeight="200" />
        <HelloUser name="Manda" imgWidth="200" imgHeight="100" />
        <HelloUser name="John" imgWidth="100" imgHeight="100" />


      </div>
    );

  } // render()


} // App



export default App;
