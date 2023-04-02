let particles = [];
const num= 65;
let canva_width = 1300;
let canva_height = 600;
const noiseScale = 0.01;
function setup() {
  createCanvas(canva_width, canva_height);
  noiseSeed(1);

  for(let i =0; i < num;  ++i)
  {
    for(let j = 0; j < num; ++j){
    particles.push(createVector(random(width),random(height)));
    }
  }
}

function draw() {
  background(0,10);
  let dim = 100;
  stroke(255);
  for(let i = 0; i < num*num; ++i){
    let p = particles[i];
    point(p.x, p.y);
  
    let n = noise(p.x*noiseScale, p.y*noiseScale)
    let a = TAU * n;
    p.x+=tan(a);
    p.y+=log(a)+cos(a);
    if(!onscreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onscreen(p){
    if(p.x>canva_width || p.y > canva_height)return 0;
    else return 1;
  }
  
  
