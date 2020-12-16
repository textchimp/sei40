
const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

$(document).ready( function(){

  $('#searchText').focus();  // focus the cursor in the search text field

  $('#searchForm').on('submit', function( ev ){
    ev.preventDefault(); // stop the form submit from reloading the page

    // Get the search text from the form
    const searchText = $('#searchText').val();

    // Do the AJAX request to search for this text
    getSearchResults( searchText );
  }); // form submit handler

}); // document ready

// This function actually performs the AJAX request to Flickr
const getSearchResults = (queryText) => {

  console.log('getSearchResults():', queryText);

  $.getJSON(FLICKR_BASE_URL, {
    api_key: FLICKR_API_KEY,
    method: 'flickr.photos.search',
    text: queryText,
    format: 'json',
    nojsoncallback: 1
  })
  .done( displaySearchResults )
  .fail( console.warn );

}; // getSearchResults()


const displaySearchResults = (results) => {
  console.log('displaySearchResults():', results);

  // Loop through the image results:
  results.photos.photo.forEach( photo => {
    const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
    const $img = $(`<img src="${ url }">`)
    $('#results').append( $img );
  }); // photo forEach


}; // displaySearchResults()
