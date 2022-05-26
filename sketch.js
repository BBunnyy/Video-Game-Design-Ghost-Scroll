// A basic ghost object
class Ghost {
  // Positional and color data
  constructor(x, y, scale, color) {
    this.x = x;
    this.y = y;
    this.scale = 1 / scale;
    this.color = color;
  }
  
  // Ghost object drawing (resembles a pacman ghost)
  draw() {
    noStroke();
    fill(this.color[0], this.color[1], this.color[2]);

    ellipse(
      this.x,
      this.y - 11.5 / this.scale,
      100 / this.scale,
      100 / this.scale
    );
    rect(
      this.x - 50 / this.scale,
      this.y - 11.5 / this.scale,
      100 / this.scale,
      50 / this.scale
    );
    triangle(
      this.x - 50 / this.scale,
      this.y + 38.5 / this.scale,
      this.x - 33 / this.scale,
      this.y + 38.5 / this.scale,
      this.x - 50 / this.scale,
      this.y + 62.5 / this.scale
    );
    triangle(
      this.x - 33 / this.scale,
      this.y + 38.5 / this.scale,
      this.x,
      this.y + 38.5 / this.scale,
      this.x - 16.5 / this.scale,
      this.y + 62.5 / this.scale
    );
    triangle(
      this.x,
      this.y + 38.5 / this.scale,
      this.x + 33 / this.scale,
      this.y + 38.5 / this.scale,
      this.x + 16.5 / this.scale,
      this.y + 62.5 / this.scale
    );
    triangle(
      this.x + 50 / this.scale,
      this.y + 38.5 / this.scale,
      this.x + 33 / this.scale,
      this.y + 38.5 / this.scale,
      this.x + 50 / this.scale,
      this.y + 62.5 / this.scale
    );

    fill(255, 255, 255);
    ellipse(
      this.x - 15 / this.scale,
      this.y - 11.5 / this.scale,
      35 / this.scale,
      40 / this.scale
    );
    ellipse(
      this.x + 25 / this.scale,
      this.y - 11.5 / this.scale,
      35 / this.scale,
      40 / this.scale
    );

    fill(32, 32, 247);
    ellipse(
      this.x - 10 / this.scale,
      this.y - 11.5 / this.scale,
      20 / this.scale,
      20 / this.scale
    );
    ellipse(
      this.x + 30 / this.scale,
      this.y - 11.51 / this.scale,
      20 / this.scale,
      20 / this.scale
    );
  }

  // Update ghost positional data (move right)
  update() {
    this.x += 1.2;

    // If moves off right of screen, reposition on left
    if (this.x > 450) {
      this.x = -50;
    }
  }
}

// Inititalize 4 ghost objects
var Ghosts = [];
Ghosts[0] = new Ghost(0, 200, 0.2, [255, 0, 0]);
Ghosts[1] = new Ghost(125, 200, 0.2, [255, 184, 255]);
Ghosts[2] = new Ghost(250, 200, 0.2, [0, 255, 255]);
Ghosts[3] = new Ghost(375, 200, 0.2, [255, 184, 82]);

function setup() {
  createCanvas(400, 400);
}

// continuously draw ghosts and update ghost positions
function draw() {
  background(220);

  for (i = 0; i < Ghosts.length; i++) {
    Ghosts[i].draw();
    Ghosts[i].update();
  }
}
