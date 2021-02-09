class Drops{
    constructor(x,y,radius){
        var options={
            restitution: 0.1,
            friction: 0.4,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
      push();
        translate(this.body.position.x, this.body.position.y)
        noStroke();
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
      pop();
    }
    update(){
        if(this.body.position.y > 600){
            Matter.Body.setPosition(this.body,{x:random(0,1350), y:random(0,50)})
        }
    }
}