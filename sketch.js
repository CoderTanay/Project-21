var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "White";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "Gray";

  speed=random(233,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(0);  

  bullet.velocityX = speed;

  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed * speed /(thickness * thickness * thickness);
    if (damage > 10 ){
      bullet.shapeColor=rgb(255,0,0);
    }
   if (damage > 10 ){
     bullet.shapeColor=rgb(0,255,0);
   }
 }
  

  drawSprites();
}

function hasCollided(lbullet, lwall){
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
}