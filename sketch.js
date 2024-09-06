let p;
let particles = [];
function setup() {
  createCanvas(640, 360);
  angleMode(DEGREES)
}

function draw() {
  background(30);
  // translate(width/2, height/2)
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle());
  }

  for (let i = 0; i < particles.length; i++) {
    if (particles[i].alpha > 0) {
      particles[i].draw();
      particles[i].update();
    } else {
      particles.splice(i, 1);
    }
    for (let i = particles.length - 1; i > 0; i--) {
      if(particles[i].edges()){
         particles.splice(i, 1);

      }
    }
  }
 
}

function windowResized() {
  resizeCanvas(640, 360);
}
