
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var score=0;
var pentagon;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;

function preload()
{

}
function setup() {
  
  createCanvas(1000,400);
 
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(390,310,270,12);

  block1=new Box(300,275,30,40);
  block2=new Box(330,275,30,40);
  block3=new Box(360,275,30,40);
  block4=new Box(390,275,30,40);
  block5=new Box(420,275,30,40);
  block6=new Box(450,275,30,40);
  block7=new Box(480,275,30,40);

  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
 
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);
 
  block16=new Box(390,155,30,40);

  ground2=new Ground(800,225,210,12);

  block17=new Box(800,205,30,40);
  block18=new Box(800,205,30,40);
  block19=new Box(800,205,30,40);
  block20=new Box(800,205,30,40);
  block21=new Box(800,205,30,40);

  block22=new Box(800,205-40,30,40);
  block23=new Box(800,205-60,30,40);
  block24=new Box(800,205-40,30,40);

  block25=new Box(800,205-80,30,40);

  ground3=new Ground(500,390,1000,20);

  pentagon=new Polygon(200,200,20);

  sling=new SlingShot(pentagon.body,{x:180,y:190})
}

function draw() {

  background("lightpink"); 
  fill("Black");
  text("Score: "+score,20,40);
  Engine.update(engine);
  
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();
  
  ground2.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
 
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();

  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  pentagon.display();
  
  ground3.display();

  sling.display();


  strokeWeight(0);
  fill("black");
  textSize(22);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);
  
}

function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
   sling.fly();
}


function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:200,y:200});
    sling.attacher(pentagon.body);
  }
}
