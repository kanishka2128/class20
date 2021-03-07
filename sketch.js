var fixed, moving;


function setup() {
  createCanvas(1200,600);

  fixed = createSprite(800, 400, 100, 50);
  fixed.shapeColor = "green"
  fixed.debug = true
  
  moving = createSprite(600,200,50,100)
  moving.shapeColor = "green"
  moving.debug = true

}

function draw() {
  background(0);
  
  moving.y = World.mouseY
  moving.x = World.mouseX
  
  if (moving.x- fixed.x <= moving.width/2 + fixed.width/2 &&
    fixed.x - moving.x <= moving.width/2 + fixed.width/2 &&
    moving.y - fixed.y <= moving.height/2 + fixed.height/2 &&
    fixed.y - moving.y <= moving.height/2 + fixed.height/2 
    ) {
    fixed.shapeColor = "red"
    moving.shapeColor = "red"
  }
  else {
    fixed.shapeColor = "green"
    moving.shapeColor = "green"
  } 
  drawSprites();
}
