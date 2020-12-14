
// AJAX
//
// Asynchronous
// Javascript
// And
// XML  - superset of HTML
//      - way of exchanging structured data in a generic format

// JSON - JS Object Notation


$(document).ready(function(){


  $('#getTrivia').on('click', function(){

    const searchNum = $('#searchNumber').val();

    console.log('Button clicked!', searchNum);

    const xhr = new XMLHttpRequest(); // make a new instance

    // THis is the ancient way of writing event handlers/callbacks
    // in JS: an object has a bunch of 'onXXXXXX' properties, which
    // you can store functions in, and those functions are run by
    // the browser at the appropriate time (i.e., in response
    // to a click or an AJAX request receiving its response)
    // xhr.onreadystatechange = function(){
    //
    //   console.log( 'ready state changed:', xhr.readyState );
    //
    //   if( xhr.readyState === 4 ){
    //     console.log( 'response:', xhr.response );
    //   }
    //
    // }; // onreadystatechange

    xhr.onload = function() {
      // console.log( 'response loaded:', xhr.response );

      // Take the JSON string in our response and parse it into an
      // actual JS data structure whose keys we can access, etc
      const data = JSON.parse( xhr.response );

      console.log('data:', data);

      const $trivia = $(`<h1>${ data.number }</h1><p>${ data.text }</p><hr>`);

      // $('#results').empty();
      $('#results')
        .empty()
        .append( $trivia );  // add to DOM!


    }; // onload


    xhr.open('GET', `http://numbersapi.com/${ searchNum }?json`);

    xhr.send();

    console.log('response too soon', xhr.response);

  }); // on click

}); // document ready
