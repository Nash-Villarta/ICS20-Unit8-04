let value = 0;
let x = 150
let y = 150

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  fill(value);
  rect(x, y, 100, 50);
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    x = x - 15;
  }
  if(keyCode === UP_ARROW) {
    y = y - 15;
  }
  if(keyCode === DOWN_ARROW) {
    y = y + 15;
  }
  if(keyCode === RIGHT_ARROW) {
    x = x + 15;
  }
  
  if (x < 0) {
    x = 150;
  }
  if (x > 300) {
    x = 150;
  }
  if (y < 0) {
    y = 150;
  }
  if (y > 350) {
    y = 150;
  }
}
