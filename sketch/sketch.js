function setup() {
  createCanvas(600, 600);
  
  // noLoop(); // We only need to draw this once for now
}

function draw() {
  // 1. PAPER TEXTURE BACKGROUND
  background(240, 235, 220); // A slightly warm, vintage paper white
  // drawPaperTexture();

  // 2. THE DIAGONAL BEAMS
  drawBeams();

  
  // 2. THE CIRCLES (Independent & Editable)
  push(); // Start transparency group
  blendMode(MULTIPLY);
  //noStroke();



    // left small blue Circle 
  fill(55, 86, 140, 255);
  stroke(0)
  strokeWeight(3);
  ellipse(98, 339, 16);
  
    // left small red Circle with stroke 
  fill(290, 8, 29, 255);
  stroke(0)
  strokeWeight(6);
  ellipse(128, 272, 32);
  
  // left side teal Circle with stroke 
  fill(102, 167, 161, 255);
  stroke(0)
  strokeWeight(4);
  ellipse(168, 346, 40);
  
   // bottom coral Circle left
  fill(247, 147, 120, 200);
  stroke(0)
  strokeWeight(0.3);
  ellipse(135, 425, 35);
  
  // bottom coral Circle
  fill(244, 174, 166, 255);
  stroke(0)
  strokeWeight(2);
  ellipse(328, 477, 35);
  
    // bottom coral Circle RIGHT
  fill(201, 95, 111, 220);
  stroke(0)
  strokeWeight(3);
  ellipse(464, 422, 25);
  
  // bottom red Circle
  fill(290, 8, 29, 255);
  stroke(0)
  strokeWeight(1);
  ellipse(220, 385, 55);
  
  //  small centre teal Circle 
  fill(102, 167, 161, 255);
  stroke(0)
  strokeWeight(0.5);
  ellipse(236, 240, 68);
  
  // Large Pink Circle (Top Left)
  fill(200, 100, 150, 100);
  ellipse(232, 182, 123);
  
   // Large PURPLE Circle RIGHT
  fill(133, 23, 115, 200);
  noStroke()
  ellipse(408, 163, 72);
  
  
   // Bright Yellow Circle left centre
  fill(232, 203, 98, 255);
  stroke(0)
  strokeWeight(0.2);
  ellipse(237, 332, 137);

  //  Red Circle (Center-ish)
  fill(290, 8, 29, 255);
  stroke(0)
  strokeWeight(0.5);
  ellipse(309, 206, 97);
  
  // centre Green Circle 
  fill(93, 113, 59, 180);
  stroke(0)
  strokeWeight(0.1);
  ellipse(284, 314, 171);
  
   //  Red Circle Center
  fill(261, 110, 57, 255);
  stroke(0)
  strokeWeight(4);
  ellipse(277, 272, 64);
  
  // teal blue Green Circle (Right side)
  fill(11, 117, 87, 180);
  stroke(0)
  strokeWeight(0.1);
  ellipse(403, 272, 140);
  
   // navy blue small Circle (Right side)
  fill(11, 89, 177, 180);
  stroke(0)
  strokeWeight(1);
  ellipse(459, 282, 53);

  // Bright Yellow Circle (Bottom Right)
  fill(232, 203, 98, 255);
  stroke(0)
  strokeWeight(1);
  ellipse(380, 367, 97);
  
  // Yellow ochure Circle (Bottom Right)
  fill(224, 181, 87, 255);
  stroke(0)
  strokeWeight(0.1);
  ellipse(356, 433, 16);
  
  // small red Circle top
  fill(290, 8, 29, 255);
  stroke(0)
  strokeWeight(3);
  ellipse(277, 78, 13);
  
  // small red Circle centre
  fill(209, 76, 71, 255);
  stroke(0)
  strokeWeight(0.3);
  ellipse(304, 351, 16);
  
  // small red Circle bottom 
  fill(209, 76, 71, 255);
  stroke(0)
  strokeWeight(1.5);
  ellipse(288, 410, 13);

  // Small Black Dots
  fill(33, 33, 33, 255);
  stroke(0)
  ellipse(248, 423, 10); // Bottom left dot
  ellipse(277, 272, 16); // centre dot in red circle
  ellipse(406, 396, 27); //  bottom right
  ellipse(363, 189, 40); // centre dot top
  ellipse(407, 238, 25); // centre dot middle
  
  pop(); // End transparency group (Resets blendMode to normal)
  
  
  
  
  // ... (Draw the Main Ring last so it stays on top) ...
  // 3. THE MAIN BLACK RING
  noFill();
  stroke(20, 20, 20); // Not perfectly black, more like ink
  strokeWeight(24);
  ellipse(300, 300, 520, 520);
  //ellipse(width / 2, height / 2, 500, 500);
}

function drawPaperTexture() {
  // This creates the "painting" look by adding 90,000 tiny dots
  for (let i = 0; i < 90000; i++) {
    let x = random(width);
    let y = random(height);
    let n = noise(x * 0.01, y * 0.01) * 255;
    stroke(n, n, n, 15); // Very faint, semi-transparent dots
    strokeWeight(1);
    point(x, y);
  }
}

function drawBeams() {
  noStroke();
  
  // Teal Beam
  push();
  fill(0, 128, 128, 100); // The 4th number is Alpha (transparency)
  translate(width / 2, height / 2);
  rotate(radians(-42));
 // quad(x1, y1, x2, y2, x3, y3, x4, y4)
  quad(
    30, -450,  // Top Left (Narrow)
     60, -450,  // Top Right (Narrow)
      map(mouseX,0, 500, 250, -400), 400,  // Bottom Right (Wide)
     map(mouseX,0, 400, 40,  -450), 450   // Bottom Left (Wide)
  );
  
  //  quad(
  //   30, -450,  // Top Left (Narrow)
  //    60, -450,  // Top Right (Narrow)
  //    250,  400,  // Bottom Right (Wide)
  //   40,  450   // Bottom Left (Wide)
  // );
  
  pop();

  
 
  // Yellowish Beam
  push();
  fill(220, 180, 80, 80);
  translate(width / 2, height / 2);
  rotate(radians(43));
  
  //                     var    s,e   new range
  // ellipse(200,200,map(mouseX,0,400,100,200));
     quad(
    -15, -450,  // Top Left
     15, -450,  // Top Right
     map(mouseX,-50, 250, 50, 400,),450,  // Bottom Right (Much wider)
    map(mouseX,0, 300, -150, 250),450   // Bottom Left (Much wider)
       );
  
//  quad(
//     -15, -450,  // Top Left
//      15, -450,  // Top Right
//      50,  450,  // Bottom Right (Much wider)
//     -150,  450   // Bottom Left (Much wider)
// );
  pop();
  
  
  
  
}