const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
     
   var box1= new Box(900,100,70,70);
   var box2= new Box(900,100,70,70);
   var box3= new Box(800,100,70,70);
   var box4= new Box(800,100,70,70);
   var box5= new Box(800,100,70,70);
   var box6= new Box(800,100,70,70);
   var box7= new Box(800,100,70,70); 
   var box8= new Box(800,100,70,70);
   var box9= new Box(800,100,70,70);
   var box10= new Box(800,100,70,70);
   var box11= new Box(800,100,70,70);
   var box12= new Box(800,100,70,70);
   var box13= new Box(800,100,70,70);
   var box14= new Box(800,100,70,70);
   var box15= new Box(800,100,70,70);
   var box16= new Box(800,100,70,70);
   var box17= new Box(800,100,70,70);
   var box18= new Box(800,100,70,70);
   var box19= new Box(800,100,70,70);
   var box20= new Box(800,100,70,70);


   var ball=new Ball(200,200,60,80);
   var rope=new Rope(ball.body,{x:500,y:50});



}

function draw(){
   
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    rope.display();
    

}
function mouseDragged() {
     Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });

}