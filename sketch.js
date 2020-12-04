var a,b;
var car,wall;

function setup() {
  createCanvas(1200,600);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="green";

  b=createSprite(800, 400, 50, 50);
  b.shapeColor="yellow";

  car=createSprite(200, 400, 50, 50);
  car.shapeColor="blue";
  car.velocityX=5;

  wall=createSprite(800, 400, 20, 90);
  wall.shapeColor="white";
}

function draw() {
  background("pink");
  b.x=World.mouseX;
  b.y=World.mouseY;
  

/*if(isTouching(b,wall)){
  //car.shapeColor="white";
  //car.velocityX=0;
  textSize(40);
  text("touched",300,30)
}*/
//bounceOff(car,wall)
Collide(car,wall);

  drawSprites();
}
/*function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2 
    && object1.y-object2.y<object2.width/2+object1.width/2
    && object2.y-object1.y<object2.width/2+object1.width/2){
    return true;
  }
  else{
    return false;
  }

}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 
  && object2.x-object1.x<object2.width/2+object1.width/2 ){
   object1.velocityX=(-1)*object1.velocityX;
  }
  else if( object1.y-object2.y<object2.width/2+object1.width/2
    && object2.y-object1.y<object2.width/2+object1.width/2){
      object1.velocityY=(-1)*object1.velocityY;
    }
}
function Collide(object1,object2){
  if(object1.x -object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x <  object2.width/2 + object1.width/2
    && object1.y - object2.y <  object2.width/2 + object1.width/2
    && object2.y - object1.y <  object2.width/2 + object1.width/2)  {
      object1.setvelocity(0,0);    }
    }*/
  