let d = 60;
let deg = 58;
let outline = true;

let gui;
let diameterSlider, degSlider, diameterSlider2, outlineCheckbox;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  gui = createGui();
  diameterSlider = createSlider("triangle", 200,10,100,20,10,100);
  diameterSlider.onChange = diameterSliderChange;
  diameterSlider.setStyle({
    fillBg: color("white"),
    strokeWeight: 4
  })
  degSlider = createSlider("square",200,40,100,20,0,180);
  degSlider.val = 23;
  degSlider.setStyle({
    fillBg: color("white"),
    strokeWeight: 4
  })
  diameterSlider2 = createSlider("circle", 200,70,100,20,10,180);
  diameterSlider2.onChange = diameterSliderChange;
  diameterSlider2.setStyle({
    fillBg: color("white"),
    strokeWeight: 4
  })
  outlineCheckbox = createCheckbox("outline",340,10,20,20,true);
  outlineCheckbox.setStyle({
    fillBg: color("white"),
    strokeWeight: 4
  })
 // outlineCheckbox = createButton("reset");
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
  translate(100,100);
  fill(255);
  quad(50, 62, 86, 50, 50, 38, 14, diameterSlider2.val);
  pop();

  push();
  translate(200,200);
  rotate(radians(degSlider.val));
  rect(0, 0, 55, 50, 20, 15, 10, 5);
  pop();

  noStroke();
  text(diameterSlider.label,140,23);

  noStroke();
  text(degSlider.label,140,53);

  noStroke();
  text(diameterSlider2.label,140,83);
}
/*i want to make eit so when you press the x checkbox it goes back to how it was previously when the page is first loaded but idk how :/

this is the code i found for a print ut it doesn't work with what i changed the values to so idk :((

if(outlineCheckbox.isPressed) {
    print(outlineCheckbox.label + " is pressed.");
  }
}
*/

function diameterSliderChange() {
  d = diameterSlider.val;
}