class Jogo {
  constructor() {




  }

  intro() {
    fill("black");
    textSize(30)
    text("<aperte spaço>",50,450)
    text("voce e um simples pirata que decidiu", 10,150);
    text("pescar,mas durante sua pescaria", 10,200);
    text("voce encontra um navio quebrado", 10,250);
    text("então decide embarcar nele", 10,300);
    textSize(35)
    text("mas mal voce sabe oque te espera", 5,350);

   };

   game1(){
  


  
  player.collide(wall);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  
  camera.position.y = player.position.y;
  camera.position.x = player.position.x;
    
   walker();
   }

 





}



 

