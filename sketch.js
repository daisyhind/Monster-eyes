// let r, g, b;

// size parameters of white eyes
let radius = 50;
let diameter = 2 * radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(57, 255, 20);
}

function draw() {

  //   let r = random(255);
  //   let g = random(255);
  //   let b = random(255);

  // nested for loop to make grid of white eyes
  for (let column = 0; column < 14; column++) {
    for (let row = 0; row < 8; row++) {
      let eyeX = radius + diameter * column;
      let eyeY = radius + diameter * row;

      // whites of the eyes
      fill(255);
      noStroke();
      circle(eyeX, eyeY, 80);

      // atan2 calculates the angle of the eye to the mouse
      let angle = atan2(mouseY - eyeY, mouseX - eyeX);

      // push and pop limits the following styles to only apply to the pupils
      push();
      // moves the pupils to the centre of the eyes
      translate(eyeX, eyeY);

      // rotates the eye towards the mouse
      rotate(angle);

      // randomising the colours of the iris doesn't work as it needs a loop
      // fill(r, g, b);
      // ellipse(12.5, 0, 35, 35);

      // draws the pupil
      fill(0);
      ellipse(12.5, 0, 25, 25);

      pop();
    }
  }

  //   // top left eyelid
  //   fill(57, 255, 20);
  //   // stroke to cover slight white eye outline
  //   strokeWeight(2);
  //   stroke(57, 255, 20);
  //   // PI to 0 for a semi-circle at the top, needs same start and stop and same width and height
  //   arc(50, 50, 80, 80, PI, 0);

  //   // middle eyelid
  //   fill(57, 255, 20);
  //   strokeWeight(2);
  //   stroke(57, 255, 20);
  //   arc(250, 250, 80, 80, PI, 0);
}