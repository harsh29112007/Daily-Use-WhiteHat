var movingRect
var fixedRect
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
 
  fixedRect=createSprite(200,200,50,50);
  
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
   else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }

  drawSprites();
}