class drop{
    constructor(x,y){
        var options = {
            friction: 0.1,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 4;
        World.add(world, this.rain);
    }

    update(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){  
        noStroke();
        fill(0,0,255)
        ellipseMode(RADIUS);
        ellipse(this.body.postion.x ,this.body.position.y, this.radius, this.radius); 



    }
}