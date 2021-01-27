const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,590,70,70);
    box2 = new Box(720,590,70,70);
    box3 = new Box(750,590,70,70);
    box4 = new Box(780,590,70,70);
    box5 = new Box(800,590,70,70)
    ball = new BALL(500,450,40);
    box6 = new Box(820,590,70,70);
    box7 = new Box(620,450,70,70);
    box8 = new Box(690,450,70,70);
    box9 = new Box(760,450,70,70);
    box10 = new Box(835,450,70,70);
    box11 = new Box(760,300,70,70);
    box12 = new Box(690,300,70,70);
    box13 = new Box(730,250,70,70);
    rope = new Hang(ball.body,{x:500,y:100})
}

function draw(){
    background("black");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box6.display();
    box7.display();
    box8.display();
    box4.display();
    box5.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();  
    ball.display();
    rope.display();

   }
   function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}