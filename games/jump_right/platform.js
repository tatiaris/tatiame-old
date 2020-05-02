function platform() {
  this.x = 0;
  this.y = height*2/3;
  this.show = function() {
    fill(0,255,0);
    rect(0, this.y, width, height/3);
  }
}
