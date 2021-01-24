
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbinObj,dustbinObj,ground;

function preload()
{
	dustbinObj = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();

	world = engine.world;

	paper=new paper(50, height - 90, 40);
	ground=new Ground(600,380,1200,20);
	//side1=new Dustbin(900,310,20,100);
	//side2=new Dustbin(1100,310,20,100);
    //side3=new Dustbin(1000,350,200,20);
	dustbinObj = new dustbin(900,650);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  //side1.display();
  //side2.display();
  //side3.display();
  ground.display();
  dustbinObj.display();

 // drawSprites();
}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); 
		} 
	}




