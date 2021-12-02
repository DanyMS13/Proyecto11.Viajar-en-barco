var ship1, shipImg
var sea, seaImg



function preload(){
shipImg = loadAnimation ("ship-1.png","ship-2.png");
seaImg = loadImage ("sea.png");

}

function setup(){
  createCanvas(400,400);


   sea=createSprite(200,200);
   sea.addImage("Mar", seaImg);
   sea.velocityX = 3;


   ship1 = createSprite(200,270);
   ship1.addAnimation("barco", shipImg);
   ship1.scale = 0.3 ;

console.log(sea.x);
}

function draw() {

  background("blue");
  if(sea.x > 1500 ){
    sea.x=sea.width/10;}

 drawSprites();
}