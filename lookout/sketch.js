let imageColor = 0;
let curtainPosX = 0;
let curtainPosX2 = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(imageColor - 55, imageColor - 29, imageColor - 13);
  noStroke();
  //color based on curtain position
  imageColor = constrain((curtainPosX / width) * 255, 0, 255);

  drawBuilding();
  drawWindows();
  drawTreeBranch();
  drawSunlight();
  drawTreeTrunk();
  drawLeaves();
  drawWindowFrame();
  curtainsMove();
}

function drawBuilding() {
  fill(imageColor - 79, imageColor - 120, imageColor - 130);
  rect(0, 220, 400, 400);
}

function drawWindows() {
  let winHeight = 60;
  fill("black");
  
  // window positions and sizes as [x, y, width]
  const windows = [
    // row 1
    [30, 240, 50],
    [90, 240, 140],
    [240, 240, 150],

    // row 2
    [30, 320, 80],
    [170, 320, 120],
    [300, 320, 100],
  ];
  
  for (let window of windows) {
    rect(window[0], window[1], window[2], winHeight);
  }
}

function drawTreeBranch() {
  fill(imageColor - 94, imageColor - 114, imageColor - 123);

  beginShape();
  vertex(300, 0);
  vertex(180, 150);
  vertex(200, 200);
  vertex(300, 0);
  endShape(CLOSE);
}

function drawSunlight() {
  sunPosX = constrain(mouseY, 200, 300);
  sunPosY = constrain(mouseX, 200, 250);
  fill(imageColor - 3, imageColor - 16, imageColor - 164, imageColor - 195);

  beginShape();
  vertex(240, 0);
  vertex(270, 0);
  vertex(sunPosX, 400);
  vertex(0, 400);
  vertex(0, sunPosY);
  endShape(CLOSE);
}

function drawTreeTrunk() {
  fill(imageColor - 94, imageColor - 114, imageColor - 123);

  beginShape();
  vertex(80, 0);
  vertex(120, 200);
  vertex(100, 400);
  vertex(200, 400);
  vertex(200, 200);
  vertex(100, 0);
  vertex(80, 0);
  endShape(CLOSE);
}

function drawLeaves() {
  fill(imageColor - 123, imageColor - 111, imageColor - 184);

  // [x, y, width, height] for each ellipse
  const leaves = [
    [300, 100, 200, 150],
    [0, 100, 400, 120],
    [100, 0, 400, 150]
  ];
  
  for (let leaf of leaves) {
    ellipse(leaf[0], leaf[1], leaf[2], leaf[3]);
  }
}

function drawWindowFrame() {
  fill(50);
  rect(195, 0, 5, 400); // vertical divider
  rect(0, 195, 400, 5); // horizontal divider
}

function curtainsMove() {
  if (mouseIsPressed) {
    curtainPosX = constrain(mouseX, 0, width);
    curtainPosX2 = constrain(mouseX, width/2, width);
  }
  drawCurtain(curtainPosX);
  drawCurtain(curtainPosX2);
}

function drawCurtain(posX) {
  stroke(5);
  stroke(200, 200, 200);
  fill(238, 238, 238, 240);
  for (let i = 0; i < 4; i++) {
    rect(posX + i * 50, 0, 50, 400);
  }
  for (let z = 0; z <= 400; z+= 400) {
    arc(z, 0, 400, 80, 0, PI + HALF_PI);
  }
}