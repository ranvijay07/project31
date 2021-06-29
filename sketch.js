const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var d1
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(800, 800);
  // createSprite(400, 200, 50, 50);
  d1 = new Division(width / 2, height, width, 20);

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var l = 75; l <= width; l = l + 50) {
    plinkos.push(new Plinko(l, 75))
  }

  for (var l = 75; l <= width; l = l + 50) {
    plinkos.push(new Plinko(l, 275))
  }
  for (var l = 50; l <= width; l = l + 50) {
    plinkos.push(new Plinko(l, 375))
  }

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }

}

function draw() {
  Engine.update(engine)
  background(255, 255, 255);

  d1.display();

  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
  }
  
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
    // console.log(particles[j])
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display()
  }
  drawSprites();
}