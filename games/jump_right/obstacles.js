function obstacles(v) {
  this.vel = -v;
  this.x = width;
  this.y = random(height*2/3 - 600, height*2/3 - 50);
  this.show = function(){
    fill(255,0,0);
    rect(this.x, this.y, 50, 50);
  }
  this.update = function(){
    this.x += this.vel;
  }
}
