let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(1000, 1000);
  background(random(0, 255), random(0, 255), random(0, 255));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
 
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
  }
 
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
  }
 
  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }
 
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }
 
  if(mouseIsPressed) {
  cor = color(random(0, 255), random(0,       255), random(0, 255), random(0, 100));
  }
 
}
