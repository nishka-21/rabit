var garden,rabbit;
var gardenImg,rabbitImg,appleImg;
var apple,appleImg;
var leaves,leavesImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leavesImg=loadImage("leaf.png");
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


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  var apple,leaves=Math.round(random(1,2))
 
  if (frameCount%80==0)
  {
    if(apple==1,leaves==2){
      createapples();
    }
    else{
      createleaves();
    }
  }
  function createapples(){
    apple=createSprite(random(50,350),40,10,10)
    apple.addImage(appleImg);
    apple.velocityY=apple.velocityY=+5;
    apple.scale=0.15
  }
  function createleaves(){
    leaves=createSprite(random(50,350),40,10,10)
    leaves.addImage(leavesImg);
    leaves.velocityY=leaves.velocityY=+5;
    leaves.scale=0.15
 }
 
 


  drawSprites();
}