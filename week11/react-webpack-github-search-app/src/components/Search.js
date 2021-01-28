import React from 'react';

class Search extends React.Component {

  state = {
    username: ''
  };

  handleChange = (ev) => {
    // console.log( ev.target.value );
    this.setState({ username: ev.target.value });
  } // handleChange


  handleClick = () => {
    console.log('CLICKED!');
    this.props.history.push(`/profile/${ this.state.username }`);
  } // handleClick


  render(){

    return (
      <div>
        <label>Search by Username:
          &nbsp;
          <input type="text" onChange={ this.handleChange } />
        </label>
        &nbsp;
        <button onClick={ this.handleClick }>Search</button>

        <br />
        { this.state.username }

      </div>
    );

  } // render

} // class Search

export default Search;
