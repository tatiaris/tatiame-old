function left(){
  this.x = width/2 - 100;
  this.y = height/2 - 100;
  this.xVelocity = 0;
  this.yVelocity = 0;
  this.xAcc = 0;
  this.yAcc = 0;
  this.ammo = 10;
  this.bullets = [];
  this.reloading = false;
  this.lives = 5;
  this.name = "SONIC";
  this.r = 0;
  this.g = 0;
  this.b = 255;
  this.img;

  this.move = function(){
    if (this.xAcc == 0){
      if (this.xVelocity > 0) {
        this.xVelocity -= 0.5;
      }
      if (this.xVelocity < 0){
        this.xVelocity += 0.5;
      }
    }
    if (this.yAcc == 0){
      if (this.yVelocity > 0) {
        this.yVelocity -= 0.5;
      }
      if (this.yVelocity < 0){
        this.yVelocity += 0.5;
      }
    }
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.x = constrain(this.x, 0, width/2 - 50);
    this.y = constrain(this.y, 0, height - 50);
  }
  this.show = function(){
    fill(0, this.lives * 50, this.lives * 50);
    image(this.img, this.x, this.y);
  }
  this.shoot = function(){
    if(this.ammo > 0){
      var clic = new bullet(this.x+25, this.y + 25, 1);
      this.bullets.push(clic);
      this.ammo--;
    }
  }
}
