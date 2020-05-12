// empty array of bubbles 
let bubbles = [];

//sound file
let popSound;
function preload() {
  popSound = loadSound("popSound.m4a");
}

function setup() {
  createCanvas(500, 500);

  //how many bubbles are drawn
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  background("pink");
  //draw all bubbles in array
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].burst(mouseX, mouseY);
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.alive = true;
  }

  //bubble disappears and sound plays 
  burst(bx, by) {
    let d = dist(bx, by, this.x, this.y);
    if (d < this.r) {
      this.alive = false;
      this.x = 1000000;
      this.y = 1000000;
      popSound.play();
    }
  }

  show() {
    stroke(color(random(255), 255, random(255), 200));
    strokeWeight(3);
    fill(color(random(255), 255, random(255), 225));
    ellipse(this.x, this.y, this.r * 2)
  }
}