var canvas;
var strokeColor= 0;

function setup() {
canvas = createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');

  background(255);
  strokeWeight(1);
  smooth();
  noLoop();
  colorMode(HSB);
}

function draw() {
  var step = 3;
  var lastX = -999;
  var lastY = -999;
  var y = 100;
  var borderX = 20;
  var borderY = 10;

  for (var x = borderX; x <= width - borderX; x += step) {
    y = borderY + random(height - 2 * borderY);
   	 if (lastX > -999) {
      stroke(334, random(20, 100), 50);
      //stroke(strokeColor, 100, 50);
      line(x, y, lastX, lastY);
    	}
		lastX = x;
    lastY = y;
							strokeColor=strokeColor+1;
			if (strokeColor <= 90 ) {
				strokeColor=0;
			}
  }
}
