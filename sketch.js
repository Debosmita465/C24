const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground1;
var bird1;
var pig1,pig2;
var log1,log2,log3,log4;

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new box(800,365,50,50);
    box2 = new box(950,365,50,50);
    box3 = new box(800,330,50,50);
    box4 = new box(950,330,50,50);
    box5 = new box(875,310,50,50);
    ground1 = new ground(600,height,1200,20);
    bird1 = new bird(100,100);
    pig1 = new pig(875,365);
    log1 = new log(875,340,240,PI/2);
    pig2 = new pig(875,330);
    log2 = new log(875,320,240,PI/2);
    log3 = new log(820,290,140,PI/7);
    log4 = new log(925,290,140,-PI/7);

}

function draw() {
  background(0);
  Engine.update(engine);
  console.log(box2.body.angle);
box1.display();
box2.display();  
box3.display();
box4.display();
box5.display();
ground1.display();
bird1.display();
pig1.display();
log1.display();
pig2.display();
log2.display();
log3.display();
log4.display();
}