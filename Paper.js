class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.paper = Bodies.circle(x, y, radius, options);
      this.radius = radius
        
      World.add(world, this.paper);
      }
    display(){
      ellipseMode(RADIUS);
  
      fill("yellow");
  
      circle(this.paper.position.x, this.paper.position.y, this.radius);
    }
    };