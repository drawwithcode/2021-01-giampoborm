function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(12);
  background(40);

}

function draw() {
  noFill();
  stroke(lerpColor(color("#45CCFE"), color("#e445fe"), frameCount / 120));
  strokeWeight(40)

  translate(frameCount * 3, frameCount * 3, 0)
  if (frameCount == 10) { translate(-50, -200); }
  if (frameCount == 20) { translate(-400, 200); }
  if (frameCount == 30) { translate(200, -100); }
  if (frameCount == 40) { translate(300, -200); }
  if (frameCount == 50) { translate(50, 100); }
  if (frameCount == 60) { translate(-300, -100); }
  if (frameCount == 70) { translate(250, 200); }
  if (frameCount == 80) { translate(30, -200); }
  if (frameCount == 90) { translate(120, 200); }
  if (frameCount == 100) { translate(-400, 200); }
  if (frameCount == 110) { translate(6, -50); }
  if (frameCount == 120) { translate(-200, -600); }
  if (frameCount == 130) { translate(300, -240); }
  if (frameCount == 140) { translate(-250, -120); }
  if (frameCount == 150) { translate(-30, -400); }
  if (frameCount == 160) { translate(-400, -200); }
  if (frameCount == 170) { translate(-46, 80); }
  if (frameCount == 180) { translate(500, -600); }

  bezier(0, height / 2, 180, 10, 200, height / 2, 200, height / 2)
  bezier(200, height / 2, 380, 10, 400, height / 2, 400, height / 2)
  bezier(400, height / 2, 400, 1000, 600, 250, 700, 280)
  bezier(700, 280, 600, 400, 700, 600, 850, 500)
  bezier(850, 500, 950, 440, 850, 230, 720, 270)
  bezier(720, 270, 800, 350, 950, 400, 1100, 250)
}