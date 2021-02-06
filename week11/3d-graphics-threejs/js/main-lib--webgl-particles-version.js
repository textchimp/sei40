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
  // plane.receiveShadow = true; // shadows are cast onto this!

  return plane;

}; // createPlane


app.createSpotlight = () => {

  const light = new THREE.SpotLight( 0xFFFFFF );
  light.position.set( -10, 60, 10 );
  // light.castShadow = true;
  // light.shadow.mapSize.width = 2048;
  // light.shadow.mapSize.height = 2048;

  return light;

}; // createSpotlight


app.createCube = () => {

  const cubeGeometry = new THREE.BoxGeometry(
     // THREE.Math.randInt(4, 400), // random x size
     // THREE.Math.randInt(4, 400), // random x size
     4,
     4,
     4
   );
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    // wireframe: true
  });

  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

  // cube.position.set( -4, 15, 0 );
  const range = 50;
  cube.position.set(
    THREE.Math.randInt(-range, range),
    THREE.Math.randInt(-range, range),
    THREE.Math.randInt(-range, range),
  );

  // cube.userData.rotationSpeed = Math.random() * 0.05;

  // cube.rotation.x = Math.random();
  // cube.rotation.y = Math.random();

  cube.material.color.setHSL(
    Math.random(),
    1.0, // Math.random(),
    0.5
  );

  // cube.castShadow = true;

  return cube;

}; // createCube


app.createSphere = () => {

  const sphereGeometry = new THREE.SphereGeometry(
    30, // radius
    40, // number of triangle segments on the X axis
    40, // number of triangle segments on the Y axis
  );

  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    map: THREE.ImageUtils.loadTexture('img/earth.jpg'),
    // map: THREE.ImageUtils.loadTexture('img/el.png'),
    side: THREE.DoubleSide
  });

  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 0, 0, 0 );
  // sphere.castShadow = true;

  return sphere;


}; // createSphere


app.createParticleSystem = () => {

  const particles = new THREE.BufferGeometry();
  const distrib = app.controls.particleDistributionRange;

  const positions = [];
  const velocities = [];

  const sizes = [];
  const colours = [];

  const color = new THREE.Color();

  for( let i = 0; i < app.controls.numParticles; i++ ){

    // Create a particle and give it a random position
    positions.push(
      THREE.Math.randInt(-distrib, distrib), // x
      // THREE.Math.randInt(-distrib, distrib), // y
      100, // fixed y
      THREE.Math.randInt(-distrib, distrib)  // z
    );

    velocities.push(
      0,
      0,
      0
      // Math.random() - 0.5,
      // Math.random() - 0.5,
      // Math.random() - 0.5
    );

    sizes.push( 10 );

    // color.setHSL( i / app.controls.numParticles, 1.0, 0.5 );
    const bright = 0.5;
    color.setRGB(bright, bright, bright);
		colours.push( color.r, color.g, color.b );

  } // for

  particles.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
  particles.setAttribute( 'velocity', new THREE.Float32BufferAttribute( velocities, 3 ) );
  particles.setAttribute( 'size',     new THREE.Float32BufferAttribute( sizes, 1 ).setUsage( THREE.DynamicDrawUsage ) );
  particles.setAttribute( 'color',    new THREE.Float32BufferAttribute( colours, 3 ) );

  //
  // const particleMaterial = new THREE.PointsMaterial({
  //   color: 0xFFFFFF,
  //   size: 6,
  //   map: THREE.ImageUtils.loadTexture('img/snowflake.png'),
  //   blending: THREE.AdditiveBlending,
  //   transparent: true,
  //   alphaTest: 0.5
  // });

  let uniforms = { pointTexture: { value: new THREE.TextureLoader().load( "img/spark.png" ) } };

	const shaderMaterial = new THREE.ShaderMaterial( {
		uniforms: uniforms,
		vertexShader: document.getElementById( 'vertexshader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentshader' ).textContent,

		blending: THREE.AdditiveBlending,
		depthTest: false,
		transparent: true,
		vertexColors: true
	} );


  const particleSystem = new THREE.Points(
    particles, // geometry
    shaderMaterial
    // particleMaterial // the image we show for each particle
  );

  return particleSystem;

}; // createParticleSystem
