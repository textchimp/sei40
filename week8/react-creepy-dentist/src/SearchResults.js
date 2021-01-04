import React from 'react';

class SearchResults extends React.Component {

  render(){
    return (
      <div>
        <h2>Search results for "{ this.props.match.params.query }":</h2>
      </div>
    );
  }

} // class SearchResults

export default SearchResults;
