class Player {
  constructor() {
    this.positon = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
    this.sides = {
      bottom: this.positon.y + this.height,
    };
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.positon.x, this.positon.y, this.width, this.height);
  }

  update() {
    if (this.sides.bottom < canvas.height) {
      this.positon.y++;
      this.sides.bottom = this.positon.y + this.height;
    }
  }
}
