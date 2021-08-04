var garden,rabbit;
var gardenImg,rabbitImg;
var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0) {
  if (select_sprites ==1) {
    apples = createApples(40,100,40,10)
  }
  else{
   leaves = createSprite(300,100,40,10)
  }
}
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  apples= createSprites(random(50,350),40,10,10)
  apples.addImage()
  apples.scale= 0.4
  apples.velocityX = -3
  apples.y=Math.round(random(10,60)) 
}

function createLeaves(){
  leaves = createSprite(random(60,360),40,10,10)
  leaves.addImage()
  leaves.scale= 0.3
  leaves.velocityX = -3
  leaves.y=Math.round(random(10,60)) 
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}