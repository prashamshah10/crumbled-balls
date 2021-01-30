
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxLeftSprite,boxBase,boxRightSprite;
var boxLeftBody,boxBaseBody,boxRghtBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	 boxLeftSprite=createSprite(width/2-100,600,20,100);
	 boxLeftSprite.shapeColor="red";

	 boxLeftBody=Bodies.rectangle(width/2-100,600,20,100,{isStatic:true});
	 World.add(world,boxLeftBody);
	 

	 boxBase=createSprite(width/2,650,200,20);
	 boxBase.shapeColor="red";
	 boxBaseBody=Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	 World.add(world,boxBaseBody);

	 boxRightSprite=createSprite(width/2+100,600,20,100);
	 boxRightSprite.shapeColor="red";
	 boxRightBody=Bodies.rectangle(width/2+100,600,20,100,{isStatic:true})
	 World.add(world,boxRightBody);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



