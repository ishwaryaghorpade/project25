
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,dustbin1
var paper1
function preload()
{
	paper1=loadImage("Images/Untitled.png")
	dustbin1=loadImage("Images/dustbingreen.png")
}

function setup() {
	createCanvas(1000, 400);

	
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,375,1200,10)
	dustbinBase = new Dustbin(850,300,150,150);
	paper = new Paper(400,200,70)	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbinBase.display();
 
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:1000, y: -600})	}
  }
  

