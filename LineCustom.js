class LineCustom {
  constructor(points, color) {
    this.points = points;
    this.color = color;
  }

  render() {
    const geometry = new THREE.BufferGeometry().setFromPoints(this.points);
    const color = this.color;
    const material = new THREE.LineBasicMaterial({ color: color });
    return new THREE.Line(geometry, material);
  }
}

export default LineCustom;
