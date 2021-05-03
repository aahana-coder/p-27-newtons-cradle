
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

b1=new bob(550,500,35)
b2=new bob(620,500,35)
b3=new bob(690,500,35)
b4=new bob(760,500,35)
roof=new roof(650,250,400,30)
rope1=new rope(roof.body,b1.body,-105,0)
rope2=new rope(roof.body,b2.body,-36 ,0)
rope3=new rope(roof.body,b3.body,36,0)
rope4=new rope(roof.body,b4.body,105,0)

	Engine.run(engine);
  
} 


function draw() {
  rectMode(CENTER);
  background("teal");
  
  drawSprites();
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  b1.display()
 b2.display()
 b3.display()
 b4.display()
}

function keyPressed(){
  if (keyCode=="32"){
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-50})
  }
}



