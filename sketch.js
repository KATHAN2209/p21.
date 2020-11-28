var bullet,wall;
var speed,weight,thickness;






function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
speed=random(223,321)
weight=random(30,52)
 bullet=createSprite(50,200,80,5)
wall=createSprite(600,200,thickness,height/2)
thickness=random(22,83)









}

function draw() {
  background("skyblue");  
  bullet.velocityX=speed;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5 * weight * speed * speed/(thicness *thicness *thicness);
  
  if(damage>10)
  {
    wall.shapeColor="lightGreen"
  
  
  
  
  
  
  }
  if(damage<10)
  {
    wall.shapeColor="red"





  }
  
  
  
  
  
  
  
  hasCollided()
  
  }
  
  
  
  
  

  drawSprites();

}


function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true








  }else{

    return false
  }











}









