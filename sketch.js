const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ball, ground;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var option_ball ={
    restitution: 1
  }

  ball=Bodies.circle(400,100,20,option_ball);
  World.add(world,ball);
  console.log(ball);

  var options_ground={
    isStatic: true,
    friction: 0.01
  }

  ground=Bodies.rectangle(400,380,800,20,options_ground);
  World.add(world,ground);
  console.log(ground);

}

function draw() {
  background("black");  
  Engine.update(engine);
  ellipseMode(RADIUS);
  fill("white");
  circle(ball.position.x, ball.position.y, 20);

  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x, ground.position.y,800,20);
}