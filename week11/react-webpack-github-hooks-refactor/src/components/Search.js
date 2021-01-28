import React, { useState } from 'react';

// class Search extends React.Component {
//
//   state = {
//     username: ''
//   };
//
//   handleChange = (ev) => {
//     // console.log( ev.target.value );
//     this.setState({ username: ev.target.value });
//   } // handleChange
//
//
//   handleClick = () => {
//     console.log('CLICKED!');
//     this.props.history.push(`/profile/${ this.state.username }`);
//   } // handleClick
//
//
//   render(){
//
//     return (
//       <div>
//         <label>Search by Username:
//           &nbsp;
//           <input type="text" onChange={ this.handleChange } />
//         </label>
//         &nbsp;
//         <button onClick={ this.handleClick }>Search</button>
//
//         <br />
//         { this.state.username }
//
//       </div>
//     );
//
//   } // render
//
// } // class Search

const Search = (props) => {


  // We pass an initial value for username to 'useState', and
  // it returns to us an array with two elements in it:
  // [0] - a variable containing the current value of username,
  // [1] - a setter function for changing the value of username
  // ...we use ES6 array destructuring to pull those two elements
  // out of the array immediately into two new local variables
  const [ username, setUsername ] = useState( '' );

  // console.log('Search() is running!', username);

  // const handleChange = (ev) => {
  //   setUsername(  ev.target.value );
  //   // When your setter function runs, it causes your entire component's function
  //   // to run again - and when it runs again, the call to useState() will now
  //   // return the NEW value of username (in this example)
  // }; // handleChange
  //
  // const handleClick = () => {
  //   props.history.push(`/profile/${ username }`);
  // }; // handleClick


  // const handleClick = (message) => {
  //   console.log('I WAS CLICKED!', message);
  //   return () => console.log('HAHA THIS STILL WORKS');
  // };

  return (
    <div>
      <label>Search by Username:
        &nbsp;
        <input type="text" onChange={ (ev) => setUsername(ev.target.value) } />
      </label>
      &nbsp;
      <button onClick={ () => props.history.push(`/profile/${ username }`) }>
        Search
      </button>

      <br />
      { username }

    </div>
  );


}; // Search

export default Search;
