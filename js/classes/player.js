class Player {
  constructor() {
    this.positon = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 100;
    this.height = 100;
    this.sides = {
      bottom: this.positon.y + this.height,
    };
    this.gravity = 1;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.positon.x, this.positon.y, this.width, this.height);
  }

  update() {
    this.positon.y += this.velocity.y;

    // above bottom of canvas
    if (this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravity;
      this.sides.bottom = this.positon.y + this.height;
    } else this.velocity.y = 0;
  }
}
