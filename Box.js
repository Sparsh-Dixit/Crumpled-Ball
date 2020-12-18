class Box 
{

   constructor(x,y,w,h)
   {
    var option ={
        isStatic : true
      }
    
      this.box = Bodies.rectangle(x,y,w,h,option);
      World.add(world,this.box);

      this.width = w ;
      this.height = h ;
   }

   display()
   {
    var pos = this.box.position ;
    var angle = this.box.angle ;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill("white")
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop()
   }

}