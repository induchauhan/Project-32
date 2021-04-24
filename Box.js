class Box 
{
  constructor(x,y,width,height,angle)
  {
    var options = {
      'restitution':0.8,
      'friction':0.2,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
    this.image=loadImage("box.png");
    this.Visibility=255;
  }

  
  display()
  {
    if(this.body.speed<5)
        {
          var angle = this.body.angle;
          var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,35,35);
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility - 2;
          tint(255,this.Visibility);
          pop();
        }
  }
  score()
  {
    if(this.Visibility<0 && this.Visibility>-105)
    {
      score++;
    }
  }
};