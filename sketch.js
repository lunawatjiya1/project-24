var bottomWall,rightWall,leftWall
var ball
var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	bottomWall= new bin(680,660,100,10)
	rightWall= new bin(648,600,10,100)
	leftWall=new bin(710,600,10,100)
	ground= Bodies.rectangle(400,680,800,10,{isStatic:true})
	World.add(world,ground)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,10)

 rightWall.display()
bottomWall.display()
leftWall.display()
  drawSprites();
 
}


