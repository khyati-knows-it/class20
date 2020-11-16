var fixedObject, movingObject;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  fixedObject = createSprite(200,200,100,60);
  fixedObject.shapeColor="pink";
  fixedObject.debug=true;

  movingObject= createSprite(300,200,80,120);
  movingObject.shapeColor="yellow";
  movingObject.debug=true;
}

function draw() {
  background(255,255,255); 
  movingObject.x=mouseX;
  movingObject.y=mouseY; 

  //console.log("moving x:"+movingObject.x);
  //console.log("fixed x:"+fixedObject.x);
  //console.log(movingObject.x-fixedObject.x);
  drawSprites();
}