var canvas;

function setup() {
canvas = createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');

mic = new p5.AudioIn();
mic.start();


}

function draw() {
	background(0);

	var vol = mic.getLevel();
	ellipse(0,0,vol*windowWidth);

}
