import React from 'react';

import axios from 'axios';

class DogsList extends React.Component {

  state = {
    dogs: []  // initialise to an empty array
  };


  // This is called a 'component lifecycle method' - if you define it
  // (and it must have EXACTLY this name), React will run this method
  // for us automatically as soon as the component is added to the DOM
  //
  // Kind of the React equivalent of jQuery's $(document).ready()
  componentDidMount(){
    console.log('DogsList MOUNTED on page');

    // Make an AJAX request to load the initial data required by this component

    // jQuery:
    // $.getJSON(URL)
    // .done( fn )  // what to do when we successfully get a response
    // .fail( fn )  // what to do when we get an error of some kind


    // Promises: the new JS way of dealing with async data:
    // we represent data that hasn't arrived yet as a Promise object,
    // and promises either RESOLVE when successful - which means your then()
    // callback will run, and be passed the data you're waiting for
    // OR
    // if there's a problem, the Promise REJECTS, in which case your
    // catch() callback will run, and be passed an error object
    // so you can work out what went wrong
    // Promises are then()-able
    axios.get( 'http://localhost:3000/dogs' )
    // what to do when we get the data successfully
    .then( (res) => {
      console.log('then() callback running!', res);
      this.setState({ dogs: res.data });
    })
    // what to do if there was an error
    .catch( console.warn );

  } // componentDidMount

  render(){
    console.log('render()');

    return (
      <>
        <h1>Hound Roll of Honour</h1>
        <ul>
        {
          // input: (this.state.dogs)
          // [ {name: 'Ruby'}, {name: 'Rudy'}, {name: 'Bonnie'} ]
          //
          // desired output:
          // [ <li>Ruby</li>, <li>Rudy</li>, <li>Bonnie</li>  ]

          this.state.dogs.map( dog => <li key={ dog.id }>{ dog.name } ({ dog.roundness })</li> )

        }
        </ul>
      </>
    );
  } // render

} // class DogsList

export default DogsList;
