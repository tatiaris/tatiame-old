function player() {
  this.x = width/2 - 300;
  this.y = height*2/3;
  this.yVel = 0;
  this.jumping = 0;
  this.alive = true;
  this.score = 0;
  this.jumpForce = 15

  this.update = function() {
    this.y += this.yVel;
    this.yVel += 1;
    this.y = constrain(this.y, 0, height*2/3);
    if(this.y >= height*2/3){
      this.jumping = 0;
    }
  }
  this.show = function () {
    fill(255);
    rect(-25, -25, 50, 50);
  }
  this.jump = function () {
    this.jumpForce = constrain(this.jumpForce, 0, 20);
    this.yVel = -this.jumpForce;
    this.score++;
  }
}
