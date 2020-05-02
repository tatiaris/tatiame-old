function bg() {
  this.starsX = [];
  this.starsY = [];

  this.x = 0;
  this.y = 0;

  this.yVel = 0;
  this.numStars = 100;
  for(var i = 0; i < this.numStars; i++){
    this.starsX.push(random(-2*width, 5*width));
    this.starsY.push(random(-height, height*2/3));
  }
  this.show = function() {
    this.x += 2;
    background(0);
    this.y -= this.yVel;
    for(var i = 0; i < this.starsX.length; i++){
      fill(255);
      ellipse(this.starsX[i] - this.x, this.starsY[i] - this.y, 4);
    }
  }
}
