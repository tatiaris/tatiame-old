function paddle(x, nam, r, g, b){
    this.x = x;
    this.y = tall/2.5;
    this.length = scl*7;
    this.yv = 0;
    this.score = 0;
    this.name = nam;
    this.direc = 0;
    this.update = function(){
        this.y += this.yv;
        if (this.yv > 0){
          this.yv-=0.1;
          this.direc = -1;
        }
        if (this.yv < 0){
          this.yv+=0.1;
          this.direc = 1;
        }
        this.y = constrain(this.y, -1, tall - this.length);
    }

    this.show = function(){
        fill(r, g, b);
        rect(this.x, this.y, scl, this.length);
    }
}
