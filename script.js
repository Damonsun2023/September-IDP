let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let x = 0
let y = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
    background("blue");
}

function draw() {
for( let y = 0; y < 8; y++ ) {
		for( let x = 0; x < 12.5; x++ ) {
			fill(random(256),random(256),random(256));
			rect(x*50,y*50,50, 50);
    }
  }
	noLoop();
	
}
function keyPressed() {
	if( key === " " ) {
		loop();
		}
}