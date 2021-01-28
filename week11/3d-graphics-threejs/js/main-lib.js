var app = app || {};

app.createPlane = () => {

  // Create our first 3D object
  // Objects are made of two parts:
  // 1. a geometry, i.e. a shape
  // 2. a material, i,e. a texture, what is covered
  // in, how does light reflect off it?
  //
  // These two parts are combined into a final 'mesh'

  const planeGeometry = new THREE.PlaneGeometry( 120, 20 );
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCCCCCC
  });

  // Combine the geometry and material into a mesh:
  const plane = new THREE.Mesh( planeGeometry, planeMaterial );

  plane.position.set( 15, 0, 0 );
  plane.rotation.x = -0.5 * Math.PI;  // because of maths
  plane.receiveShadow = true; // shadows are cast onto this!

  return plane;

}; // createPlane


app.createSpotlight = () => {

  const light = new THREE.SpotLight( 0xFFFFFF );
  light.position.set( -10, 60, 10 );
  light.castShadow = true;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;

  return light;

}; // createSpotlight


app.createCube = () => {

  const cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    // wireframe: true
  });

  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.set( -4, 15, 0 );
  cube.castShadow = true;

  return cube;

}; // createCube


app.createSphere = () => {

  const sphereGeometry = new THREE.SphereGeometry(
    6, // radius
    40, // number of triangle segments on the X axis
    40, // number of triangle segments on the Y axis
  );

  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x039BE5
  });

  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 20, 6, 2 );
  sphere.castShadow = true;

  return sphere;


}; // createSphere
