import React from 'react';
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import ThumbnailGallery from './ThumbnailGallery';

const BASE_URL = 'https://api.flickr.com/services/rest';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';


class FlickrSearch extends React.Component {


  state = {
    photos: []
  };

  // We are going to give this method to the child component SearchForm
  // as a prop called onSearch
  performSearch = (searchText) => {
    console.log('<FlickrSearch> performSearch()', {searchText});

    const flickrParams = {
      api_key: API_KEY,
      method: 'flickr.photos.search',
      text: searchText,
      format: 'json',
      nojsoncallback: 1,
      page: 1 // or some other page
    };
    // creates a querystring: ?api_key=<API_KEY>&method=flickr.photos.search&text=dogs&format=json

    axios.get( BASE_URL, {params: flickrParams} )
    .then( (res) => {
      console.log('Got results:', res.data);
      this.setState({ photos: res.data.photos.photo });
    })
    .catch( console.warn );

  } // performSearch()


  render(){

    return (
      <div className="App">
        <h1>Flickr Search</h1>
        <hr />

        <SearchForm onSearch={ this.performSearch }/>


        { // conditional rendering using the && shortcut,
          // because we can't use statements like 'if' inside
          // interpolation tags - only expressions are allowed
          this.state.photos.length > 0
          &&
          <ThumbnailGallery photos={ this.state.photos } />
        }

      </div>
    );

  } // render()

} // class FlickrSearch

export default FlickrSearch;
