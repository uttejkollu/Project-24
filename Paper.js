class Paper {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.1
      }
      this.body = Bodies.circle(x, y, 25, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255,0,255);
      ellipse(0, 0, 15, 15);
      pop();
    }
  };
  