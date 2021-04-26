const Engine= Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;


var engine,world;
var ground;

function setup() {
  createCanvas(800,400);
 


  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true,

  }
  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);


  //create a circular body
 var option ={
  
   restitution : 1.0
 }
ball =Bodies.circle(400,50,20,option);
World.add(world,ball);

//make a square

var option1 = {

  restitution : 1.2
}
ball1 = Bodies.rectangle(100,100,50,50,option1);

World.add(world,ball1);



}

function draw() {
  background('grey')
  Engine.update(engine);

rectMode(CENTER);
fill('coral');
rect(ball1.position.x,ball1.position.y,50,50);


ellipseMode(RADIUS);``
fill('green');
ellipse(ball.position.x,ball.position.y,20,20);

  rectMode(CENTER);
  fill('coral');
  rect(ground.position.x,ground.position.y,800,20);
  
}