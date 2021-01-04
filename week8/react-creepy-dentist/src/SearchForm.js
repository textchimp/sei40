import React from 'react';

class SearchForm extends React.Component {

  state = {
    searchText: ''
  };

  handleChange = (ev) => {
    this.setState({ searchText: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault(); // stop the form submit from causing a page refresh
    console.log('search for:', this.state.searchText);

    // Because this SearchForm component is rendered as a child of a <Route>
    // (i.e. the routing system is in charge of it), it gets passed various
    // useful props, such as 'history' which contains the push() method
    // which we can use to programmatically navigate to a new route

    // we need to construct a URL like: `/search/${ this.state.searchText }`
    this.props.history.push(`/search/${ this.state.searchText }`);
  }

  render(){
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" placeholder="Enter procedure name" onChange={ this.handleChange }/>
          <button>Search</button>
        </form>
      </div>
    );
  } // render

} // class SearchForm

export default SearchForm;
