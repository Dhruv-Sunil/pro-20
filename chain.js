class rope{
constructor(body1,body2,x,y){
this.x=x
this.y=y
var options={
bodyA:body1,
bodyB:body2,
pointB:{x:this.x,y:this.y}


}
this.chain=Constraint.create(options)
World.add(world,this.chain)
}
display(){
var pointA=this.chain.bodyA.position
var pointB=this.chain.bodyB.position
strokeWeight(3)
var x1=pointA.x
var y1=pointA.y
var x2=pointB.x+this.x
var y2=pointB.y+this.y
line(x1,y1,x2,y2)
}

}