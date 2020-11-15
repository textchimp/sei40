
console.log('Paintr!');

/*
Paintr!

1. When the user moves the mouse around,
2. draw a coloured circle at the mouse position
    2a: get the mouse position
    2b: create a <div> and add it to the DOM at the given mouse position
*/

let hue = 0;  // runs once at the start
let lastX = 0;  // remember the mouse xPos from the *last* time drawBlob() was called

let mouseYPos = window.innerHeight/2;


// This function is called by the mousemove event handler code at the bottom of the file
const drawBlob = function(xPos, yPos, blobSize=null){

  const xVelocity = xPos - lastX;  // velocity is difference in position over time

  lastX = xPos; // update lastX so it contains the correct previous value of xPos for next time


  const mouseScale = mouseYPos / window.innerHeight;

  if( !blobSize ){
    // if the size argument not given
    blobSize = Math.abs( xVelocity ) * 20 * mouseScale; // chop off any minus signs and scale using mouse Y pos
  }

  const blobColor = `hsla( ${hue}, 100%, 50%, 40% )`;  // HSL colour space!

  hue = hue + 1;  // keep growing hue (CSS will interally wrap it at 360)

  // 2b: Create a new div.blob and place it on the DOM at the mouse position
  const $blob = $('<div class="blob">'); // detached!

  // Set the position and colour etc using .css()
  $blob.css({
    top:  yPos - (blobSize/2) + 'px', // how far from the top?
    left: xPos - (blobSize/2) + 'px', // how far from the left?

    width:  blobSize + 'px',
    height: blobSize + 'px',

    backgroundColor: blobColor,
  });

  // Add the new div to the page
  $('body').append( $blob );

  // Animate it!
  $blob.animate(
    // which properties to animate:
    {
      top:   yPos + Math.random() * 200 - 100,
      left:  xPos + Math.random() * 200 - 100,
      // width: '100%',
      // height: '100%',

      // top:  (Math.random() > 0.5 ? -blobSize : window.innerHeight) + 'px',
      // left: (Math.random() > 0.5 ? -blobSize : window.innerWidth ) + 'px'

      // top: window.innerHeight,
      // left: -blobSize,
    },
    {
      duration: 1000,
      easing: 'linear',
      complete: function(){
        // What to do when animation finishes:
        $(this).remove(); // get rid of the now-invisible blob div
      }
    }
  ); // end of .animate()

}; // end drawBlob()


// Wait for the DOM
$(document).ready(function(){

  console.log('DOM ready!');

  // Respond to mouse movement by running a callback function:
  $(document).on('mousemove', function( ev ){
    mouseYPos = ev.clientY;
    // Only draw blobs when the shift key is held during this mouse move event
    if( ev.shiftKey ){
      // Actually draw the blob at the mouse position
      drawBlob( ev.clientX, ev.clientY );
    }

  }); // on mousemove

  // remember these increment variables
  let sinCounter = 0;
  let cosCounter = 0;

  // Automatic drawing!
  // Use a repeating timer to draw blobs regularly
  setInterval(function(){

    sinCounter += 0.02; // slightly different increments for each counter:
    cosCounter += 0.03; // this gives us more variation in the movement

    // Use Math.sin() and Math.cos() to give us smooth repeating
    // movement. See here (DO NOT FEAR MATHS):
    // https://www.smashingmagazine.com/2011/10/quick-look-math-animations-javascript/
    const xOffset = Math.sin(sinCounter) * window.innerWidth/3;
    const yOffset = Math.cos(cosCounter) * window.innerHeight/3;

    // Taking the centre point of the screen as a starting point,
    // add the above (moving) offsets to get a new position
    const x = window.innerWidth/2 + xOffset;
    const y = window.innerHeight/2 + yOffset;

    drawBlob( x, y ); // actually draw a circle at this position

  }, 10);  // every 10ms


}); // $(document).ready()
