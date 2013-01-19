define([ 'three', 'cpkAtoms' ], function( ignore, cpkAtoms ){
  return function( x, y, z, element ){
    // Sphere params
    var sphereGeom = new THREE.SphereGeometry( 2, 32, 16 );

    // Material
    var elementColor = '0x' + cpkAtoms[element];
    // console.log( x, y, z, elementColor);
    var material = new THREE.MeshLambertMaterial({ color: elementColor });

    // Sphere
    var sphere = new THREE.Mesh( sphereGeom, material );
    sphere.position.set( x*10, y*10, z*10 );

    return sphere;
  };
});