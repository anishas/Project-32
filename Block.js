class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 1){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }else{
        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity -5;
        pop();
      }
     // if(this.body.speed < 3){
     // World.add(world, this.body);
     // }
     //  else{
     //   World.remove(world, this.body);
     //   push();
     // this.Visiblity = this.Visiblity - 5;
     //  tint(255,this.Visiblity);
     //  pop();
     // }
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
