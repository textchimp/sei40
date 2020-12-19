import React from 'react';

class Clickr extends React.Component {

  // This saves us from even writing a constructor
  // function; it's called a "public class field declaration"
  state = {
    clickCounter: 0
  };

  handleClick = () => {
    const newClickCounter = this.state.clickCounter + 1;
    this.setState({ clickCounter: newClickCounter });

    // Call the method that the parent component HistoryEraser
    // passed to us as a prop, and call it with an argument -
    // i.e. we can pass a bit of our own state back up
    // to the parent when the click event happens
    this.props.phoneHome( newClickCounter );
  }


  render(){
    return (
      <div>
        <button onClick={ this.handleClick }>MAYBE ERASE HISTORY</button>

        <p>
          Clicks: { this.state.clickCounter }
        </p>

      </div>
    );
  } // render

} // class Clickr

export default Clickr;
