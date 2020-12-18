class Ground 
{

   constructor(x,y,w,h)
   {
    var option ={
        isStatic : true
      }
    
      this.ground = Bodies.rectangle(x,y,w,h,option);
      World.add(world,this.ground);

      this.width = w ;
      this.height = h ;
   }

   display()
   {
    var pos = this.ground.position ;
    var angle = this.ground.angle ;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill("white")
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop()
   }

}