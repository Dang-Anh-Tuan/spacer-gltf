// setInterval(() => {
//   const star = new Star(
//     randomRange(-200, 200),
//     randomRange(-200, 200),
//     randomRange(-100, -200)
//   );
//   const starObj = star.render();
//   listStars.push(starObj);
//   scene.add(starObj);
// }, 10);

// const loaderGLTF = new THREE.GLTFLoader();
// loaderGLTF.load("spaceyShip.gltf", function (gltf) {
//   const spaceShip = gltf.scene.children[0];
//   console.log(spaceShip);
//   spaceShip.rotation.x = Math.PI
//   scene.add(spaceShip);
// });

const listStars = [];

function move(star) {
  star.scale.x += 0.01;
  star.scale.y += 0.01;

  star.position.z += 0.8;
}

setInterval(() => {
  const star = new Star(
    randomRange(-200, 200),
    randomRange(-200, 200),
    randomRange(-100, -200)
  );
  const starObj = star.render();
  listStars.push(starObj);
  scene.add(starObj);
}, 10);

const loaderGLTF = new THREE.GLTFLoader();
loaderGLTF.load("spaceyShip.gltf", function (gltf) {
  const spaceShip = gltf.scene.children[0];
  console.log(spaceShip);
  spaceShip.rotation.x = Math.PI
  scene.add(spaceShip);
});