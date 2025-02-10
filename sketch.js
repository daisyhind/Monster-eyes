let r, g, b;

// size parameters of white eyes
let radius = 50;
let diameter = 2 * radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
  
  background(r, g, b);
  
  // background(57, 255, 20);
  
}

function draw() {
  
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
      
      // draws the pupil
      fill(0);
      ellipse(12.5, 0, 25, 25);

      pop();
    }
  }
  
  
//   // top left eyelid
//   fill(r, g, b);
//   // stroke to cover slight white eye outline
//   strokeWeight(2);
//   stroke(r, g, b);
//   // PI to 0 for a semi-circle at the top, needs same start and stop and same width and height
//   arc(150, 150, 80, 80, PI, 0);
  
//   // middle eyelids
//   fill(r, g, b);
//   strokeWeight(2);
//   stroke(r, g, b);
//   arc(250, 250, 80, 80, PI, 0);
  
//   fill(r, g, b);
//   strokeWeight(2);
//   stroke(r, g, b);
//   arc(350, 250, 80, 80, PI, 0);
  
//   fill(r, g, b);
//   strokeWeight(2);
//   stroke(r, g, b);
//   arc(450, 50, 80, 80, PI, 0);
  
//   fill(r, g, b);
//   strokeWeight(2);
//   stroke(r, g, b);
//   arc(50, 350, 80, 80, PI, 0);
}