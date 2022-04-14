var bg1, pl1, pl2;
var back;

var player;
var game

var wall, wall2,wall3, wall4,wall5, wall6, wall7, wall8, wall9;
var door;
 var kez = 0;
 var key;
 var kimg, vc;
 var vc2;

var gameState = 0

function preload(){
bg1 = loadImage("assets/pixil-frame-0 (1).png")

pl1 = loadImage("assets/pixil-frame-0 (2).png");

pl2 = loadImage("assets/pixil-frame-0.png");

kimg =  loadImage("assets/pixil-frame-0 (6).png");

vc = loadImage("assets/pixil-frame-0 (5).png");
}


function setup() {
  createCanvas(600,600);

  game = new Jogo();

  back = createSprite(300,300,0,0);
  back.addImage("navio", bg1);
  back.scale =1.5
  back.visible = false

  wall = createSprite(80,300,70,1000);
  wall2 = createSprite(400,470,300,10);
  wall3 = createSprite(430,460,150,90);
  wall4 = createSprite(540,300,70,1000);
  wall5 = createSprite(400,600,1000,10);
  wall6 = createSprite(120,560,40,60);
  wall7 = createSprite(400,-120,1000,10);
  wall8 = createSprite(300,550,150,100);
  wall9 = createSprite(315,-40,258,20);

  door = createSprite(300,-10,60,20);

  wall.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  door.visible = false;

  chave = createSprite(323,-100,1,1)
  chave.addImage("chave",  kimg);
  chave.scale = 0.5

 

  player = createSprite(200,300,20,20);
  player.addImage("lnk", pl1);
  player.scale =0.11
  player.debug = true
  player.setCollider("rectangle",-40,0,500,600);
  player.visible = false

  vc2 = createSprite(340,0);
  vc2.addImage("i", vc);
  vc2.scale = 2
  
  
}

function draw() {
  background("lightblue");  
  vc2.visible = false

if(gameState === 0 ) {
 game.intro();
}


if (keyWentDown("space")) {
  gameState = 1
 
}
  if(gameState === 1) {
    player.visible = true
    back.visible = true
  game.game1();

  }

  if(player.isTouching(chave)){
  chave.visible = false
  kez= 1
  }


  if(player.isTouching(door) && kez ===1){
    gameState = 2;
   }else if(player.isTouching(door)) {
    vc2.visible = true
    
    }
 
  if(gameState === 2){
    fill("black")
    textSize(30)
    text("to be continue...",250,0)
    player.visible = false
    back.visible = false
  }


  
  

  drawSprites();
  
}

function walker(){

  if (keyIsDown(UP_ARROW)) {
    player.position.y -= 10;
    
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.position.y += 10;
    
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += 10;
    player.addImage("lnk", pl1);
    player.scale =0.11
    
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 10;
    player.addImage("lnk", pl2);
    player.scale =0.11
    player.setCollider("rectangle",-20,100,400,500);
    
  }

}




