const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Declarin variables
var stand1, stand2;
var polygon, ball_image, slingShot;

var block01, block02, block03, block04, block05, block06, block07;
var block001, block002, block003, block004, block005, block006, block007;
var block0001, block0002, block0003, block0004, block0005, block0006;
var block00001, block00002, block00003;
var block000001;

var block10, block20, block30, block40, block50;
var block100, block200, block300;
var block1000;

function preload(){

  //loading images
  ball_image = loadImage("polygon.png");

}

function setup() {

  // Setting canvas values
  var canvas = createCanvas(1350,650);

  // creating our own engline uing the Matter.Engine
  engine = Engine.create();

  // adding our own world into our own engine
  world = engine.world;

  // Creating polygon body and adding it to the World
  polygon = Bodies.circle(250,300,10);
  polygon.setVelocity = 6;
  World.add(world,polygon);
  
  // creating Constraint between polygon and point
  slingShot = new Slingshot(polygon, {x:250,y:300});

  stroke(255);
  
  // Stand1 
  stand1 = new Ground(700,600,300,15);

 
  // creating blocks for stand1
  block01 = new Block(700,570);
  block02 = new Block(732,570);
  block03 = new Block(764,570);
  block04 = new Block(798,570);
  block05 = new Block(830,570);
  block06 = new Block(668,570);
  block07 = new Block(636,570);
  block08 = new Block(604,570);
  block09 = new Block(572,570);

  block001 = new Block(700,520);
  block002 = new Block(732,520);
  block003 = new Block(764,520);
  block004 = new Block(798,520);
  block006 = new Block(668,520);
  block007 = new Block(636,520);
  block008 = new Block(604,520);

  block0001 = new Block(700,470);
  block0002 = new Block(732,470);
  block0003 = new Block(764,470);
  block0004 = new Block(668,470);
  block0005 = new Block(636,470);
  block0006 = new Block(604,470);

  block00001 = new Block(700,420);
  block00002 = new Block(732,420);
  block00003 = new Block(668,420);

  block000001 = new Block(700,370);

  // creating stand2
  stand2 = new Ground(1150,300,200,15);

  //creating blocks for stand2
  block10 = new Block(1150,298);
  block20 = new Block(1182,298);
  block30 = new Block(1214,298);
  block40 = new Block(1118,298);
  block50 = new Block(1086,298);

  block100 = new Block(1150,200);
  block200 = new Block(1182,200);
  block300 = new Block(1118,200);

  block1000 = new Block(1150,102);


}

function draw() {
  background("darkGray");
  Engine.update(engine);

  imageMode(CENTER);
  image(ball_image, polygon.position.x, polygon.position.y,40,40);
  
  slingShot.display();

  stand1.display();

  fill("Red");
  block01.display();
  fill("Green");
  block02.display();
  fill("Blue");
  block03.display();
  fill("purple");
  block04.display();
  fill("Orange");
  block05.display();
  fill("green");
  block06.display();
  fill("blue");
  block07.display();
  fill("purple");
  block08.display();
  fill("Orange");
  block09.display();

  fill("Blue");
  block001.display();
  fill("purple");
  block002.display();
  fill("red");
  block003.display();
  fill("green");
  block004.display();
  fill("purple");
  block006.display();
  fill("red");
  block007.display();
  fill("green");
  block008.display();

  fill("orange");
  block0001.display();
  fill("blue");
  block0002.display();
  fill("purple");
  block0003.display();
  fill("blue");
  block0004.display();
  fill("purple");
  block0005.display();
  fill("green");
  block00001.display();
  fill("red");
  block00002.display();
  block00003.display();
  fill("purple");
  block000001.display();

  // Displaying stand2 andd blocks on stand2
  stand2.display();

  fill("orange");
  block10.display();
  fill("green");
  block20.display();
  block40.display();
  block1000.display();
  fill("blue");
  block30.display();
  block50.display();
  fill("red");
  block200.display();
  block300.display();
  fill("purple");
  block100.display();


  //drawSprites();
  console.log(polygon.position.x, polygon.position.y);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
 
}

function mouseReleased(){
  slingShot.fly();
 
}
 

function keyPressed(){
  if(keyCode === 32){
      
    polygon.position.x = 250;
    polygon.position.y = 300; 
    slingShot.attach(polygon);
      
  }
}
