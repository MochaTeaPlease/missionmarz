var player
var splashScreen


function preload(){
splashScreen=loadImage("assets/splash.gif")


}

function setup(){
   // createCanvas(400, 400)

   createCanvas(windowWidth,windowHeight)

   player=createSprite(50,height-50)


// playButton=createImg("")
// playButton.position(x,y)
// playButton.size(width,height)



}


function draw(){
   background(splashScreen)


   drawSprites()
}