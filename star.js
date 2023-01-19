class Star {
  constructor(posX, posY, posZ) {
    this.radius = 0.1;
    this.posX = posX;
    this.posY = posY;
    this.posZ = posZ;
  }

  render() {
    const geometry = new THREE.SphereGeometry(this.radius, 32, 16);
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, mat);
    cube.position.set(this.posX, this.posY, this.posZ);
    return cube;
  }
}

export default Star;
