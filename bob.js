class bob{
    constructor(x,y,r){
        var options ={
            
            restitution :1,
            friction :0,
            density :1.2,
           isStatic :false 
        }
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
       // var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
       rectMode(CENTER)
       fill(255,0,255)
       ellipse(0,0,this.r,this.r)
       pop()
    }
}