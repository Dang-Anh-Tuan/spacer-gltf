import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import LineCustom from "./LineCustom.js";
import Star from "./star.js";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const fov = 65;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 10000;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0, 50);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const pointsLineX = [];
pointsLineX.push(new THREE.Vector3(0, 0, 0));
pointsLineX.push(new THREE.Vector3(100, 0, 0));

const pointsLineY = [];
pointsLineY.push(new THREE.Vector3(0, 0, 0));
pointsLineY.push(new THREE.Vector3(0, 100, 0));

const pointsLineZ = [];
pointsLineZ.push(new THREE.Vector3(0, 0, 0));
pointsLineZ.push(new THREE.Vector3(0, 0, 100));

// scene.add(new LineCustom(pointsLineX, 0xff0000).render());
// scene.add(new LineCustom(pointsLineY, 0x00ff00).render());
// scene.add(new LineCustom(pointsLineZ, 0x0000ff).render());

const ambientLight = new THREE.AmbientLight(0xffffff, 0, 5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 10000);
pointLight.position.set(0, 140, 140);

scene.add(pointLight);

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const listStars = [];

setInterval(() => {
  const star = new Star(
    randomRange(-200, 200),
    randomRange(-200, 200),
    randomRange(-200, -100)
  );

  const starObj = star.render();
  listStars.push(starObj);
  scene.add(starObj);
}, 10);

function move(star) {
  star.scale.x += 0.01;
  star.scale.y += 0.01;

  star.position.z += 0.5;
}

const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load("spaceyShip.gltf", (gltf) => {
  const ship = gltf.scene.children[0];
  ship.rotation.x = Math.PI;
  scene.add(ship);
});

function loop() {
  for (const star of listStars) {
    move(star);
  }
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

loop();
