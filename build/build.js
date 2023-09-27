//TOKEN DATA ALREADY DEFINED

// SKETCH
function setup() {
	//CANVAS SETUP
	createCanvas(windowWidth, windowHeight);
	
	//SKETCH
	let r = random(255);
	let g = random(255);
	let b = random(255);
	background(r, g, b);

	fill(255);
	circle(width / 2, height / 2, 250);
}

function draw() {}