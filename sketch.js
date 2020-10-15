
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5
var chain1,chain2,chain3,chain4,chain5
var roof1
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1=new roof(width/2,height/4,width/7,20)
bobDiameter=40
startBobPositionx=width/2
startBobPositiony=height/4+500
bob1=new bob(startBobPositionx-bobDiameter*2,startBobPositiony,bobDiameter)
bob2=new bob(startBobPositionx-bobDiameter,startBobPositiony,bobDiameter)
bob3=new bob(startBobPositionx,startBobPositiony,bobDiameter)
bob4=new bob(startBobPositionx+bobDiameter,startBobPositiony,bobDiameter)
bob5=new bob(startBobPositionx+bobDiameter*2,startBobPositiony,bobDiameter)
var render=Render.create({
element:document.body,
engine:engine,
options:{
	width:1200,
	height:700,
	wireframes:false
}


})
rope1=new rope(bob1.body,roof1.body,-bobDiameter*2,0)
rope2=new rope(bob2.body,roof1.body,-bobDiameter,0)
rope3=new rope(bob3.body,roof1.body,0,0)
rope4=new rope(bob4.body,roof1.body,bobDiameter,0)
rope5=new rope(bob5.body,roof1.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();
 
}
function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
}

}
function drawLine(constraint) {
   bobBodyPosition=constraint.bodyA.position
    roofPosition=constraint.bodyB.position
     roofOffset=constraint.pointB;
      roofBodyX=roofBodyPosition.x+roofBodyOffset.x
       roofY=roofBodyPosition.y+roofBodyOffset.y 
       line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
       }


