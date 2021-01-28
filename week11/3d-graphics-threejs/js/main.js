var app = app || {};


app.controls = {
  rotationSpeed: 0.01,
  step: 0,
  stepIncrement: 0.01 // for controlling speed of sine wave
};

app.init  = () => {

  console.log('Hello 3D world!');

  app.gui = new dat.GUI();
  app.gui.add( app.controls, 'rotationSpeed', 0, 0.2 );
  app.gui.add( app.controls, 'stepIncrement', 0, 1 );


  // scene - space
  // camera - us, an observer, a perspective
  // renderer - time, change
  // lights - illumination

  app.scene = new THREE.Scene();

  app.camera = new THREE.PerspectiveCamera(
    60, // field of view
    window.innerWidth / window.innerHeight,  // screen aspect ratio
    0.1,  // near field: how close to the camera objects can be, before being ignored
    1000, // far field: how far away from the camera can we still see things
  );

  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  // app.camera.position.set( -30, 40, 30 )

  app.camera.lookAt( app.scene.position ); // Look at origin: x=0, y=0, z=0

  // The renderer calculates how to draw all the objects in the scene,
  // based on the lighting and camera perspective; it renders it all down
  // to a 2D image to show in a <canvas> tag in the DOM.
  app.renderer = new THREE.WebGLRenderer();  // use hardware acceleration
  app.renderer.setSize( window.innerWidth, window.innerHeight );
  app.renderer.setClearColor( 0x000000 ); // black background colour

  // Casting shadows is computationally expensive, so it's disabled by default
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // WTF?

  // Attach the renderer's <canvas> tag to the DOM
  document.getElementById('output').appendChild( app.renderer.domElement );

  // Let's add an "axes helper" to show us reference x,y,z arms
  app.axes = new THREE.AxesHelper( 50 );
  app.scene.add( app.axes ); // add it to the scene!

  // Add some cool shit

  // Let's add a 2D 'plane', i.e. a sheet, aka 'The Runway'
  app.plane = app.createPlane();
  app.scene.add( app.plane );

  // Let's add a cube! A perfect platonic solid
  app.cube = app.createCube();
  app.scene.add( app.cube );

  // Let's add a sphere. A ball... a planet,
  // every point on the surface the same
  // distance from the center... our new home
  app.sphere = app.createSphere();
  app.scene.add( app.sphere );


  // Let there be light!
  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  // Add mouse-based camera controls
  app.mouseControls = new THREE.OrbitControls(
    app.camera, app.renderer.domElement
  );


  // setInterval( app.animate, 15 );

  // Start off the animation process
  app.animate();

}; // app.init


app.animate = () => {

  // Increment the step counter variable
  app.controls.step += app.controls.stepIncrement;

  // Make the cube rotate every frame draw
  app.cube.rotation.x += app.controls.rotationSpeed;
  app.cube.rotation.y += app.controls.rotationSpeed;

  // Make the sphere bounce using sine waves!
  const sphereYOffset = Math.sin( app.controls.step ) * 30;
  app.sphere.position.y = 6 + Math.abs(sphereYOffset);

  const sphereXOffset = Math.cos( app.controls.step ) * 30;
  app.sphere.position.x = 20 + sphereXOffset;

  // Actually calculate a single canvas image based on our scene
  app.renderer.render( app.scene, app.camera );

  // Use the browser animation loop API to work out
  // how often to run our app.animate() method -
  // ideally 60 times/sec, and also, only bother
  // to animate when the page is visible
  requestAnimationFrame( app.animate );

}; // animate




// This is the oldskool equivalent of $(document).ready()
window.onload = app.init;
