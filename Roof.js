class roof{
    constructor(x,y,w,h){
        var options={
    isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.x=x
        this.y=y
        this.w=w
        this.h=h
    World.add(world,this.body)

    
}
display(){
    push();
   fill("grey")
   stroke("black")
   translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)
  rect(0,0,this.w,this.h)
  pop();
}



























}