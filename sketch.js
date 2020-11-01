
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  
  ground=createSprite(400,350,900,10);
  ground.VelocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
   monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  monkey.VelocityY=0.8;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();

  

}


function draw() {
  background("lightblue");
  if(keyDown("space") && monkey.y >=200) {
    monkey.velocityY = -10;
  }
      monkey.velocityY = monkey.velocityY + 0.8

    monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime= Math.ceil(frameCount/20);
  text("survival time : " + survivaltime,100,50);
  

  createbanana();
  createObstacles();
  drawSprites();
}

function createbanana(){
  if(frameCount%80===0){
  banana=createSprite(400,200);
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.y=Math.round(random(120,200));
  banana.depth=monkey.depth - 1;
  banana.lifetime= 200;
  FoodGroup.add(banana);
  }
}


function createObstacles(){
  if(frameCount%300===0){
  obstacle=createSprite(400,336);
  obstacle.addImage("obstacles",obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-4;
  obstacle.depth=monkey.depth - 1;
  obstacle.lifetime= 200;
  obstacleGroup.add(obstacle);
  }
}


