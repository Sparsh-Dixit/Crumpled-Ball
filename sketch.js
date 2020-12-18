
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,box1,box2,box3,paper1 ;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(500,650,1000,10)

	box1 = new Box(850,635,200,20)
	box2 = new Box(950,595,20,100)
	box3 = new Box(750,595,20,100)

	paper1 = new Paper(100, 600, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  box1.display();

  box2.display();

  box3.display();

  paper1.display();
  drawSprites();
  
 
}

function keyPressed(){
	if(keyDown(UP_ARROW))  {
	   Matter.Body.applyForce(paper1.paper, paper1.paper.position, 
		   {x:75, y: -75})
	}

  }

