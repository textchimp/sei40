

// setup() - runs once
// You must use the "function declaration" style
// in p5

// function expression style doesn't work:
// const setup = function(){};

// Keep track of the drawn circles in this array
// because we need to update their position
// and re-draw them every screen update
const circles = [];

const controls = {
  clearScreen: true,
  velocityScale: 1.0,
  circleSizeScale: 1.0,
  lineDistanceThreshold: 150,
  drawCircles: true,
};




function setup(){

  const gui = new dat.GUI();
  gui.add( controls, 'drawCircles' );
  gui.add( controls, 'clearScreen' );
  gui.add( controls, 'velocityScale', -2.0, 2.0 );
  gui.add( controls, 'circleSizeScale', 0, 5.0 );
  gui.add( controls, 'lineDistanceThreshold', 0, 600 );


  // make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  background( 0 ); // black background

  colorMode( HSB, 255 );

  // fill( 255, 0, 0 );
  //
  // // noFill();
  //
  // // strokeWeight( 10 );
  // // stroke( 0, 255, 0 );
  // // noStroke();
  //
  // //      x,   y pos   w,  h
  // ellipse(200, 300,      200, 200);
  //
  //
  // fill( 0, 0, 255 );
  // rect( 100, 500,   200, 200 );
  //
  // fill( 20, 100, 70 );
  // triangle(
  //   400, 200,
  //   300, 400,
  //   500, 400
  // );
  //
  // stroke(255, 0, 0);
  // line( 0, 0,   200, 200 );
  //
  // point(  50, 70 );

} // setup

// draw() - runs constantly, i.e. animates
function draw(){

  if( controls.clearScreen ){
    background( 0 ); // clear the canvas every draw
  }

  // fill( 255, 0, 0 );
  // fill(
  //   random(255), // R
  //   random(255), // G
  //   random(255), // B
  //   127
  // );


  // Get the mouse X position, and turn it into
  // a hue value 0...255
  // 0..720  ===> 0..255
  //
  // halfway: 360, i.e  0.5   ==> 0.5 * 255  = 127
  //
  // 360       720           = 0.5
  // (mouseX / windowWidth)

  const hue = map(
    mouseX, // input value
    0, windowWidth,  // input range
    0, 255  // output range
  );

  //    h  s    b    op
  fill(
    // frameCount % 255,
    hue,
    255, 255, 200
  );

  noStroke();

  const mouseXVelocity = mouseX - pwinMouseX;
  const mouseYVelocity = mouseY - pwinMouseY;

  // console.log(mouseXVelocity, mouseYVelocity );

  if( keyIsDown(SHIFT) ){
    // ellipse(
    //   // random(windowWidth), random(windowHeight),   // position of center
    //   mouseX, mouseY,
    //   // 50, 50  // size w & h
    //   // random(100, 300)
    //   // random(300)
    //   50
    // );

    circles.push({
      x: mouseX,
      y: mouseY,

      vx: mouseXVelocity,
      vy: mouseYVelocity,

      size: 50,
      hue: frameCount % 255
    });

  } // conditional drawing

  updateCircles();

} // draw


function updateCircles(){

  for( let i = 0; i < circles.length; i++ ){
    const c = circles[i];

    // c.x = c.x + 1;
    // c.x += random(-10, 10);
    // c.y += random(-10, 10);

    drawLinesFrom( c );

    // add the x velocity to the x position
    c.x += c.vx * 0.5 * controls.velocityScale;
    // add the y velocity to the y position
    c.y += c.vy * 0.5 * controls.velocityScale;

    // bounce circles off edges
    if( c.x <= 0  ||  c.x >= windowWidth ){
      c.vx *= -1;  // reverse the direction
    }
    if( c.y <= 0  ||  c.y >= windowHeight ){
      c.vy *= -1;  // reverse the direction
    }
    // TODO: wrap/warp instead of bouncing

    if( controls.drawCircles ){
      fill( c.hue, 255, 255, 200 );
      ellipse(
        c.x, c.y,
        c.size * controls.circleSizeScale
      );
    } // if drawCircles

  } // for

} // updateCircles


function drawLinesFrom( circle ){

  for( let i = 0; i < circles.length; i++ ){
    const other = circles[i];

    if( circle === other ){
      continue; // skip to next iteration
    }

    // What is the distance between these two circles?
    const xDist = circle.x - other.x;
    const yDist = circle.y - other.y;
    const dist = Math.sqrt( xDist*xDist + yDist*yDist );

    if( dist <= controls.lineDistanceThreshold ){

      const opacity = map(
        dist,
        0, controls.lineDistanceThreshold,
        255, 0
        // the larger the distance, the more transparent
      );
      strokeWeight(10);
      stroke( circle.hue, 255, 255, opacity );
      line( circle.x, circle.y, other.x, other.y );
    } // if dist small

  } //for

} // drawLinesFrom



function keyPressed( ev ){

  if( ev.key === " " ){
    circles.length = 0;
    background(0); // clear the screen too
  } // if space

} // keyPressed
