
$(document).ready( function(){

  // 1. When the submit button is clicked....
  $('#doSearch').on( 'click', function(){

    $('#details').hide(); // in case they were visible

    $('#results').empty().show(); // in case they were hidden



    // 2. Get the search text that was typed into the form...
    const searchText = $('#searchText').val();
    console.log('button clicked, searchText: ', searchText);

    // 3. ... and plug that search text into the correct URL
    // for doing a moviedb.org movie search with AJAX
    $.getJSON( `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${ searchText }` )
    .done( function( response ){
      // 4. When we get the search results, let's show
      // them on the page
      console.log( 'response:', response );

      for( let i = 0; i < response.results.length; i++ ){
        const movie = response.results[i];
        // console.log( movie.title, movie.popularity );

        // Use jQuery to make a new <h1> tag, and set the
        // contents of the tag to be movie.title

        const movieDate = movie.release_date.split('-');

        // TODO: check for 'null' poster_path images
        const $movieResult = $(`
          <h3 movie_id="${ movie.id }">${ i+1 }. ${ movie.title } (${ movieDate[0] })</h3>
          <p>${ movie.overview }</p>
          <img src="http://image.tmdb.org/t/p/w154${ movie.poster_path }">
          <hr>
        `);

        // $movieResult.on('click', function(){
        //   showDetails(movie);
        // });

        // Append that tag to the DOM, ie. $('#results')
        $('#results').append( $movieResult );

      } // for each movie


    })
    .fail( function( err ){
      console.warn( err.status, err.statusText );
    });

  }); // search button click


  // When a user clicks on a movie result title....
  // console.log('Attaching click handler to all h3 tags on page');
  // console.log('Number of h3 tags', $('h3').length  );

  // Use the 'event delegation' pattern to handle clicks
  // on h3 tags NO MATTER WHEN they are added to the page
  // NOT THIS: $('h3').on('click', function(){

  $(document).on('click', 'h3', function(){
    // console.log('An H3 was clicked!');
    // How can we refer to the clicked element?
    // console.log('clicked item', $(this).attr('movie_id') );

    // Hide the search results, so we can see the details div
    $('#results').hide();

    const movieID = $(this).attr('movie_id');

    const url = `https://api.themoviedb.org/3/movie/${ movieID }?api_key=24d863d54c86392e6e1df55b9a328755`;

    $.getJSON(url)
    .done( function( response ){
      // When we get a response with the movie details...
      console.log('movie details:', response);

      const $details = $(`
        <button id="goBack">&lt;&lt; Back</button>
        <h1>${ response.title }</h1>
        <h4>${ response.tagline }</h4
        <p>${ response.overview }</p>
        <img src="http://image.tmdb.org/t/p/w500${ response.poster_path }">
      `);

      $('#details').html( $details ).show();

    }) // done
    .fail( console.warn );

  }); // h3 click handler


  $(document).on('click', '#goBack', function(){
    console.log('back clicked!');
    $('#details').hide();
    $('#results').show();
  });


}); // document ready
