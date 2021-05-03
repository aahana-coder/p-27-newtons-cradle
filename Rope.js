
class rope{
    constructor(bodyA,bodyB,x,y){
        var options={
        bodyA:bodyA,
     bodyB:bodyB,    
     pointA:{x:x,y:y},  
        stiffness:0.04,
        length:250
       } 
 
       
        this.sling=Constraint.create(options);
        this.x=x
        this.y=y
        World.add(world,this.sling);
    }






    display(){
  
        strokeWeight(4);
line(this.sling.bodyA.position.x+this.x,this.sling.bodyA.position.y+this.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
        
    };
};




