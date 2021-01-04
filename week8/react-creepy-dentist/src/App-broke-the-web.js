import React from 'react';
import './App.css';

import TeethSales from './TeethSales';
import Procedures from './Procedures';

class App extends React.Component {

  state = {
    currentPage: ''
  };


  navigateTo = (destination) => {
    console.log('navigateTo()', destination);
    // 1. save into state 'currentPage'
    this.setState({ currentPage: destination }); // John: why setState( fn ) version?
  } // navigateTo()


  render(){

    // 2. check what's in this.state.currentPage and render the correct child component that matches it
    let pageContent;

    if( this.state.currentPage === 'procedures'){
      pageContent = <Procedures />;
    } else if( this.state.currentPage === 'teethsales' ){
      pageContent = <TeethSales />;
    } else {
      // 'home' is the default content to show if no other currentPage value above is matched
      pageContent = <p> I am a good dentist. Let me look in your mouth. </p>;
    }

    return (
      <div className="App">
        <h1>Let me be your dentist. I insist.</h1>
        <nav>
          <span className="link" onClick={ () => this.navigateTo('home') }> Home </span> |
          <span className="link" onClick={ () => this.navigateTo('procedures') }> Procedures </span> |
          <span className="link" onClick={ () => this.navigateTo('teethsales') }> Teeth Sales </span>
        </nav>
        <hr />

        { pageContent }

        <footer>
          <hr />
          &copy; 2021 Unsettling Professionals
        </footer>

      </div>
    );

  } // render()

} // class App

export default App;
