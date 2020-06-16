var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,50,50);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="pink";

}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(isTouching (movingRect,fixedRect))
{
  movingRect.shapeColor="orange";
  fixedRect.shapeColor="green";

}
else{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="pink"; 
}
  drawSprites();
}
