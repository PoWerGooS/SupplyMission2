var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side,side2,side3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	side=createSprite(400,650,200,20)
	side2=createSprite(500,620,20,100)
	side3=createSprite(300,620,20,100)
	side.shapeColor=("red")
	side2.shapeColor=("red")
	side3.shapeColor=("red")
	packageSprite=createSprite(width/2, 80 , 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	side = Bodies.rectangle(400,650,200,20, {isStatic:true} );
	side2 = Bodies.rectangle(500,620,20,100, {isStatic:true} );
	side3 = Bodies.rectangle(300,620,20,100, {isStatic:true} );
 	World.add(world, ground);
	 World.add(world,side);
	 World.add(world,side2);
	 World.add(world,side3);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false)
  }
}



