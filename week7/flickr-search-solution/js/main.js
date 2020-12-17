
const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

let currentSearchText = '';
let currentResultsPage = 1;

const resultsCache = {
  'ocean coral': {
    1: [],
    2: []
  },
  'dogs beach': {

  }
};


$(document).ready( function(){

  $('#searchText').focus();  // focus the cursor in the search text field

  $('#searchForm').on('submit', function( ev ){
    ev.preventDefault(); // stop the form submit from reloading the page

    // Get the search text from the form;
    // save into global variable so we can re-use the
    // same search text when loading prev/next pages
    currentSearchText = $('#searchText').val();

    currentResultsPage = 1; // reset for this new search!

    // Do the AJAX request to search for this text
    getSearchResults( currentSearchText );
  }); // form submit handler


  $('#nextPage').on('click', (ev) => {
    ev.preventDefault(); // stop link from causing page reload
    currentResultsPage++; // next page
    getSearchResults( currentSearchText, currentResultsPage );
  }); // end of next page click handler

  // TODO: use a single click handler which access an attribute
  // of the <a> tag to decide whether to increment or decrement?
  $('#prevPage').on('click', (ev) => {
    ev.preventDefault(); // stop link from causing page reload
    currentResultsPage--; // prev page
    getSearchResults( currentSearchText, currentResultsPage );
  }); // end of next page click handler

  // Event delegation: test the selector for this click
  // handler AT CLICK TIME, *NOT* on page load (there are no
  // images yet, on page load - they are added later when
  // AJAX loads the search results)

  console.log('value of this in parent scope', this);

  $(document).on('click',  '#results img', function(){
    const photoID = $(this).attr('photo-id');
    getPhotoDetails( photoID );
  });

  $('#details').on('click', function(){
    $(this).fadeOut();
  });

}); // document ready

// This function actually performs the AJAX request to Flickr
const getSearchResults = (queryText, pageToLoad=1) => {

  console.log('getSearchResults():', queryText);

  $('#results')
    .empty() // get rid of the old results
    .append('<p>Loading results...</p>');


  $.getJSON(FLICKR_BASE_URL, {
    api_key: FLICKR_API_KEY,
    method: 'flickr.photos.search',
    text: queryText,
    format: 'json',
    nojsoncallback: 1,
    page: pageToLoad
  })
  .done( displaySearchResults )
  .fail( console.warn );

}; // getSearchResults()


const displaySearchResults = (results) => {
  console.log('displaySearchResults():', results);

  // TODO: move this pagination-related stuff to its own function
  if( results.photos.page === 1 ){
    $('#prevPage').hide(); // don't show this link for first page
  } else {
    $('#prevPage').show(); // DO show it for other pages!
  }

  $('#pagination').show();  // show page controls
  $('#results').empty();    // hide the loading message

  // Fill in the "current page" reporting
  $('#currentPage').html( results.photos.page );
  $('#totalPages').html( results.photos.pages );
  /////////////////////////////////////////////////////////////

  // Loop through the image results:
  results.photos.photo.forEach( photo => {
    const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;

    const $img = $(`<img photo-id="${photo.id}" src="${ url }">`)
    $('#results').append( $img );

  }); // photo forEach


}; // displaySearchResults()


const getPhotoDetails = (id) => {
  console.log('getPhotoDetails():', id);

  $.getJSON( FLICKR_BASE_URL, {
    api_key: FLICKR_API_KEY,
    method: 'flickr.photos.getInfo',
    photo_id: id,
    format: 'json',
    nojsoncallback: 1
  })
  .done( (data) => {
    console.log('response', data);

    const url = `https://live.staticflickr.com/${data.photo.server}/${data.photo.id}_${data.photo.secret}_b.jpg`;

    $('#title').html(`
      ${data.photo.title._content}
      <br>
      ${data.photo.description._content}  
    `);

    $('#details')
      .css({
        background: `url(${ url })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      })
      .fadeIn();

  })
  .fail( console.warn );

}; // getPhotoDetails()
