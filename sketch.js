let d = 60
let deg = 58
let outline = true;

let gui;
let diameterSlider, dogSlider, outlineCheckbox

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  gui = createGui();
  diameterSlider = createSlider("diameter", 200,10,100,20,10,100);
  diameterSlider.onChange = diameterSliderChange
  diameterSlider.setStyle({
    fillBg: color("white"),
    strokeWeight: 4
  })
  degSlider = createSlider("rotation",200,40,100,20,0,180);
  degSlider.val = 23;
  degSlider.setStyle({
    fillBg: color("white"),
    strokeWeight: 4
  })
  outlineCheckbox = createCheckbox("outline",340,10,20,20,true);
  outlineCheckbox.setStyle({
    fillBg: color("white"),
    strokeWeight: 4
  })
}

function draw() {
  background(125);
  drawGui();

  if (outline) {
    stroke("black");
  } else {
  noStroke();
  }

  push();
  translate(200,200);
  triangle(30, 75, 58, 20, 100, diameterSlider.val);
  pop();

  push();
  translate(200,200);
  rotate(radians(degSlider.val));
  rect(0, 0, 55, 50, 20, 15, 10, 5);
  pop();

  noStroke();
  text(diameterSlider.label,140,23);
}

function diameterSliderChange() {
  d = diameterSlider.val;
}