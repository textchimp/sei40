
console.log('main.js loaded');

$(document).ready( function(){

  // $.ajax({  // uses XMLHttpRequest M$
  //   url: 'http://numbersapi.com/random/trivia?json',
  //   dataType: 'json'  // it will usually work this out
  // })

  $.getJSON( 'http://numbersapi.com/random/trivia?json' )
  .done( function( response ){
    // When the response is fully received,
    // jQuery runs this .done callback function for us,
    // and it provides the response data as the first
    // argument to this callback function
    // - JSON.parse(response) has ALREADY been run for us!
    console.log( 'response:', response );
  })
  .fail( function( err ){
    console.warn( err.status, err.statusText );
  });

  // .always( function( data, status ){
  //   console.log('always!', data, status );
  // });


  // $.ajax( OBJ ).done( FN ).fail( FN2 );

}); // document ready
