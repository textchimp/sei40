import React from 'react';

class Calculator extends React.Component {

  // Like 'initialize' in a Ruby class;
  // we need a constructor function so that we can initialse the 'state'
  // for this component
  constructor(){

    super(); // Run the constructor() function of the superclass (parent class: Component)

    // state is just an instance variable, always an object:
    // In Vue this was called 'data:'
    this.state = {
      firstNum: 0,
      secondNum: 0
    };

    // We need the correct value of 'this' inside the updateFirstNum() event handler,
    // so that we can call 'this.setState()' to update the state to keep track of what
    // was typed into the text field. BUT when you use a function or method as an
    // event handler, it LOSES its original value for 'this' - it becomes 'undefined'
    // and that is core JS behaviour, not React-specific.
    // To force this event handler to remember the correct value of 'this', we have
    // to create a new version of the function using .bind() - the argument you give
    // to bind() becomes the value of 'this' in the new function - here, the current
    // value of 'this' in the constructor function is what we want, so we use 'this'
    // as it is right now - that is the new version of updateFirstNum will see too.
    this.updateFirstNum = this.updateFirstNum.bind( this );
    this.updateSecondNum = this.updateSecondNum.bind( this );

  } // constructor()

  updateFirstNum( ev ){
    console.log('First num updated!', ev.target.value);

    // You can't set state directly in React - if you do,
    // the page won't be updated automatically
    // this.state.firstNum = ev.target.value; //  BUT THIS IS NOT ALLOWED!

    // You MUST use this.setState() to update any key within the state
    // object; if you don't, the DOM will not update
    this.setState({ firstNum: parseInt(ev.target.value)  });

  } // updateFirstNum

  updateSecondNum( ev ){
    this.setState({ secondNum: parseInt(ev.target.value) });
  } // updateSecondNum()


  render(){

    // const first = this.state.firstNum;
    // const second = this.state.secondtNum;

    // console.log('render!');

    return (
      <div>
        <h1>CalculatoReact</h1>

        <input type="text" placeholder="First number" onChange={ this.updateFirstNum } />

        <input type="text" placeholder="Second number" onChange={ this.updateSecondNum } />

        <br />

        {this.state.firstNum} + {this.state.secondNum} =
        { this.state.firstNum + this.state.secondNum  }
        <br/>
        {this.state.firstNum} - {this.state.secondNum} =
        { this.state.firstNum - this.state.secondNum  }
        <br/>
        {this.state.firstNum} * {this.state.secondNum} =
        { this.state.firstNum * this.state.secondNum  }
        <br/>
        {this.state.firstNum} / {this.state.secondNum} =
        { this.state.firstNum / this.state.secondNum  }



        <p>
          firstNum: { this.state.firstNum }
        </p>
        <p>
          secondNum: { this.state.secondNum }
        </p>

      </div>
    );

  } // render()

} // class Calculator

export default Calculator;
