var kid, kidImg;

var obstacle, obstaclesGroup, obstacleImg, spawnObstacles;

var pepperGroup,lemonGroup,beetrootGroup;

var lemon,lemonImg,beetroot,beetrootImg,pepper,pepperImg;

var back, backImg;

var spawnPepper, spawnLemon;

var basket, basketImg;

var score;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  kidImg = loadImage("Character.png");
  backImg = loadImage("BackgroundIMG.png");
  lemonImg = loadImage("lemon.png");
  beetrootImg = loadImage("beet.png");
  pepperImg = loadImage("pepper.png");
  basketImg = loadImage("Basket.png");
  obstacleImg = loadImage("Obstacle 1.png");
  
}

function setup(){
  createCanvas(600,600);
  
  back = createSprite(300,300,100,50);
  back.addImage(backImg);
  back.scale = 13; 
  back.velocityX = -3;
  
  kid = createSprite(100,450,25,25);
  kid.addImage(kidImg);
  kid.scale = 1;
  
  basket = createSprite(100,475,25,25);
  basket.addImage(basketImg);
  basket.scale = 0.1;
  
  pepperGroup = createGroup();
  beetrootGroup = createGroup();
  lemonGroup = createGroup();
  obstacleGroup = createGroup();
  
   score = 0;
  
}

function draw(){
  
  if(back.x < 0) {
    back.x = back.width/2;
  }
  
   
  if(gameState===PLAY) {
    
     kid.x = World.mouseX;
    
  basket.x = kid.x;
  
spawnObstacles();
    var select_vegetableGroup = Math.round(random(1,4));
    
    
    
    
    if(World.frameCount%100===0) {
      
      if(select_vegetableGroup == 1) {
        spawnPepper();
      }
      
      if(select_vegetableGroup == 2) {
        spawnLemon();
      }
      
      if(select_vegetableGroup == 3) {
        spawnBeetroot();
      }
      }
    
    if(basket.isTouching(pepperGroup)) {
    pepperGroup.destroyEach();
      score=score+2;
  }
  
  if(basket.isTouching(lemonGroup)) {
    lemonGroup.destroyEach();
    score=score+2;
  }
  
  if(basket.isTouching(beetrootGroup)) {
    beetrootGroup.destroyEach();
    score=score+2;
  }
    
    if(basket.isTouching(obstacleGroup))  {
      obstacleGroup.destroyEach();
      //score=score-2;
     gameState = END;
  }
  //score = 0;
   
  }
  
   drawSprites();
   textSize(20);
    text("Score: "+ score, 200,50);
  
  if(gameState===END) {
    //kid.visible = false;
    pepperGroup.setVelocityYEach(0);
    lemonGroup.setVelocityYEach(0);
    beetrootGroup.setVelocityYEach(0);
    obstacleGroup.setVelocityYEach(0);
    stroke("black");
    fill("black");
    textSize(30);
    text("GAME OVER", 150,250);
    //console.log("game is ended");
  }
}

function spawnPepper() {
  if(frameCount%200===0) {
  pepper = createSprite(200,100,50,50);
  pepper.addImage(pepperImg);
  pepper.scale = 0.1;
  pepper.velocityY = 1.5;
  pepper.x = Math.round(random(300,500));
  pepperGroup.add(pepper);
 }
}

function spawnLemon() {
  if(frameCount%300===0) {
    lemon = createSprite(200,50,25,25);
    lemon.addImage(lemonImg);
    lemon.scale = 0.1;
    lemon.velocityY = 1.5;
    lemon.x = Math.round(random(100,300));
    lemonGroup.add(lemon);
  }
}

function spawnBeetroot() {
  if(frameCount%400===0) {
    beetroot = createSprite(200,50,25,25);
    beetroot.addImage(beetrootImg);
    beetroot.scale = 0.1;
    beetroot.velocityY = 1.5;
    beetroot.x = Math.round(random(50,250));
    beetrootGroup.add(beetroot);
  }
}

function spawnObstacles() {
  if(frameCount%350===0) {
    obstacle = createSprite(200,50,25,25);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.5;
    obstacle.velocityY = 1;
    obstacle.x = Math.round(random(50,550));
    obstacleGroup.add(obstacle);
  }
}