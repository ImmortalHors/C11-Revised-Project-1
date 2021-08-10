var runner,runnerImage;
var path,pathImage;

function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  runner_1 = loadImage("Runner-1.png")
  runner_2 = loadImage("Runner-2.png")
  runnerImage = loadAnimation (runner_1,runner_2)
}

function setup(){
  createCanvas(1500,3000);
  //create sprites here
  path = createSprite(800,400)
  path.addImage(pathImage)
  path.velocityY=4
  path.scale=1.5

  runner = createSprite(820,400)
  runner.addAnimation("RUNNER",runnerImage)
  runner.scale=.1

}

function draw() {
  background("green");
  console.log(path.y)
  drawSprites();
  if(path.y<400){
    path.y=height/2
  }
}