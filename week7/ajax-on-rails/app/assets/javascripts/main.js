
$(document).ready(function(){

  $.getJSON('/uptime').done( function( data ){
    console.log( '/uptime response:', data );
    $('#uptime').html( data.output )
  })
  .fail( console.warn );

  $.getJSON('/cpuhog')
  .done( function( data ){
    console.log('cpu hog data', data );
    $('#hog').html( data.cpuHog )
  })
  .fail( console.warn );


  $.getJSON('/dogs')
  .done( function( data ){
    console.log('dog data', data);

    for( let i = 0; i < data.length; i++ ){

      const currentDog = data[i];
      const $dog = $(`
        <li>
          ${ currentDog.name }
          (${ currentDog.roundness })
        </li>
      `);
      $('#dogs').append( $dog );

    } // for

  })
  .fail( console.warn );


}); // document ready
