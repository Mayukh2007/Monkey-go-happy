var monkey,monkey_running,banana,bananaImage,ground, obstacle,obstacleImage,foodGroup,obstacleGroup,score,survivaltime;

function preload(){
  
  
monkey_running =     loadAnimation("sprite_0.png","sprite_1.png", "sprite_2.png","sprite_3.png","sprite_4.png", "sprite_5.png","sprite_6.png","sprite_7.png", "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
monkey = createSprite(100,300,20,20); 
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.10;
  
ground = createSprite(200,330,400,10);
ground.velocityX = -4;  
ground.x = ground.width/2;

obstacleGroup = new Group();
foodGroup = new Group();
  
monkey.setCollider("circle",0,0);
monkey.debug = true;
  
score = 0;
survivaltime = 0;
}
function draw() {                 
background(180);
    if (keyDown("space") && monkey.y>290 && monkey.y<400) {
    monkey.velocityY = -17;    
    }
  
    if (ground.x>0){
    ground.x = 200;
    ground.y = 330;
    }
  
    if (ground.x < 0){
    ground.x = ground.width/2;
    }
monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground); 
drawSprites();
  
textSize(20);
fill("white")
text("Score:" + score, 300,30);
textSize(20);
fill("black")
survivaltime = Math.ceil(frameCount/frameRate());
text("Survival Time:" + survivaltime,100,50);

fruits();
obstacles();
}
function fruits(){
if (frameCount % 80===0){
banana = createSprite(500,200,20,20);  
banana.addImage("banana",bananaImage);
banana.scale = 0.10;
banana.velocityX = -4;
banana.y = Math.round(random(120,200));
banana.depth = monkey.depth;
monkey.depth = monkey.depth + 1;
foodGroup.add(banana);
}
}
function obstacles(){
if (frameCount % 300===0){
obstacle = createSprite(500,310,30,30);
obstacle.addImage("rock",obstacleImage);
obstacle.scale = 0.10;
obstacle.velocityX = -4;
obstacle.lifetime =120;
obstacleGroup.add(obstacle);
}
}




