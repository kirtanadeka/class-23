class gr{
//properties and create box body rect.
constructor(x,y,w,h){
var o={
    isStatic:true
}
//creating body
this.body = Bodies.rectangle(x,y,w,h,o)
this.w = w;
this.h = h;
World.add(world,this.body)
}
//function d
display(){
var pos = this.body.position;
rectMode(CENTER);
fill(155) ;   
rect(pos.x,pos.y,w,h);


}


};