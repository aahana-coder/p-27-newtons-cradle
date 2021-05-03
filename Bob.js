class bob{
    constructor(x,y,r){
        var options={
            friction:0,
            restitution:1,
            density:0.8
        }
        this.body=Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r=r
    World.add(world,this.body)

    
}
display(){
    push();
   fill("black")
   stroke("white")
   translate(this.body.position.x,this.body.position.y)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r)
    pop();
}



























}