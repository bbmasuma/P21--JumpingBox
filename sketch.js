var canvas;
var music;
var redBrick, blueBrick, yellowBrick, greenBrick;
var block;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
redBrick = createSprite(100,570,190,20);
redBrick.shapeColor = "red";

blueBrick = createSprite(300,570,190,20);
blueBrick.shapeColor = "blue";
   
yellowBrick = createSprite(500,570,190,20);
yellowBrick.shapeColor = "yellow";

greenBrick = createSprite(700,570,190,20);
greenBrick.shapeColor = "green";

//create box sprite and give velocity
block = createSprite(random(50,750),50,50);
block.velocityY = 7;
block.velocityX = 7;
block.shapeColor = "white";



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  var e1 = createSprite(400,0,1000,10);
  e1.shapeColor = "grey";

var e2 = createSprite(0,200,10,1000);
e2.shapeColor = "grey";

var e3 = createSprite(800,200,10,1000);
e3.shapeColor = "grey";

var e4 = createSprite(400,600,1000,10);
e4.shapeColor = "grey";

 //add condition to check if box touching surface and make it bounce

if(redBrick.isTouching(block))
{
block.bounceOff(redBrick);
block.shapeColor = "red";
}

if(blueBrick.isTouching(block))
{
block.bounceOff(blueBrick);
block.shapeColor = "blue";
}

if(greenBrick.isTouching(block))
{
block.bounceOff(greenBrick);
block.shapeColor = "green";
}

if(yellowBrick.isTouching(block))
{
block.bounceOff(yellowBrick);
block.shapeColor = "yellow";
}

if(block.isTouching(e1) || block.isTouching(e2) || block.isTouching(e3))
{
block.bounceOff(e1);
block.bounceOff(e2);
block.bounceOff(e3);
}

// i'm not doing the additional task , because the music is very annoying ;)







 drawSprites();
}
