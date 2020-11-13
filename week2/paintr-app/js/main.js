
console.log('Paintr!');

/*

1. When the user moves the mouse around,
2. draw a coloured circle at the mouse position

  2a: get the mouse position for the latest move event
  2b: create a <div> and add it to the DOM at that position

*/

let hue = 0; // we will increment this inside our mouse handler

// For keeping track of the last mouse position (to calc speed):
let prevMouseX = 0;



const drawBlob = function( x, y ){

  hue += 1;
  // console.log('hue', hue);
  //console.log('mouse moved!', ev.clientX, ev.clientY);

  // Create a new DIV with a specific class
  const $blob = $('<div class="blob">');

  const mouseXSpeed = Math.abs(x - prevMouseX);
  prevMouseX = x; // save the current position, for the next time

  const blobSize = mouseXSpeed * 2;

  const blobColour = `hsla( ${hue}, 100%, 50%, 20% )`;
  // console.log(blobColour);

  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  // Set some CSS properties of the blob
  $blob.css({
    width: blobSize + 'px',
    height: blobSize + 'px',
    // backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
    backgroundColor: blobColour,
    top:  y - (blobSize/2) + 'px',
    left: x - (blobSize/2) + 'px'
  });

  // Add the new blob DIV to the page
  $('body').append( $blob );

  $blob.animate({
    top: window.innerHeight,
    left: window.innerWidth
  }, 2000, function(){
    $(this).remove(); // clean up after ourselves - free the mem!
  });

}; // drawBlob()


$(document).ready( function(){

  // Respond to mouse movement anywhere on the document
  // by running a callback function;
  // that function receives an event object as its
  // argument, when the browser runs it for us
  $(document).on('mousemove', function( ev ){

    if( ev.shiftKey ){
      drawBlob( ev.clientX, ev.clientY );
    }

  }); // end of mousemove handler


}); // end of $(document).ready() handler
