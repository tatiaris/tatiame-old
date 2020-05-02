function bullet(x, y, direc) {
  this.x = x;
  this.y = y;
  this.vel = 20;
  this.dia = 20;
  this.active = true;

  this.show = function(){
    if(this.active){
      fill(255);
      ellipse(this.x, this.y, this.dia);
    }
  }
  this.move = function(){
    if (!paused && !gameOver){
      this.x += this.vel * direc;
    }
  }
}
