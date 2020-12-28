class Block{
    constructor(x,y){
        var options={
            'friction':1
        }
        this.x = x;
        this.y = y;
        this. body = Bodies.rectangle(x,y,30,50, options);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(0.5);
        rect(0,0, 30, 50);
        pop();

    }
}