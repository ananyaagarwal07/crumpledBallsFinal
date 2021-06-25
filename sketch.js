var engine, world, ground, groundSprite;
var po,po1;

function setup() {
	createCanvas(800, 500);
	engine = Matter.Engine.create();
	world = engine.world;
	var options = {isStatic: true};
	ground = Matter.Bodies.rectangle(width/2,height-5,width,10,options);
	Matter.World.add(world,ground);
	groundSprite = createSprite(width/2,height-5,width,10);
	groundSprite.shapeColor = color(0,0,255);
	po=new Ball(100,400);
	po1=new Dustbin(world,ground.position.y);
	Matter.Engine.run(engine);
	cbs = new crumbledBallSlingshot(po.body, {x: 100, y:375});
}

function draw() {
  background("pink");
  keyPressed();
  po.display();
  po1.display();
  cbs.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(po.body,po.body.position,{x:2,y:-15});
	}
	if(keyCode == DOWN_ARROW){
		Matter.Body.applyForce(po.body,po.body.position,{x:-2,y:5});
	}
}
function mouseDragged(){
    Matter.Body.setPosition(po.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    cbs.fly();

}