var bgImage, bg


function preload(){
    bgImage = loadImage("images/bg.png")
}




function setup(){
   createCanvas(500,700);
   
   bg = createSprite(250,350);
   bg.addImage(bgImage);
   bg.scale = 2.2;
   bg.velocityX = 3;

}



function draw(){
   background(0);
  if(bg.x>300){
     bg.x = 250;
  }
   drawSprites()
}