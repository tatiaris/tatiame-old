function obstacles(){
    this.var = random(minh, maxh);
    this.var = constrain(this.var, 250, 550);    
    this.x = width;
    this.y = round(random(0,height-250));
    this.yav = random(-3,3);
    this.angle = 0;

    if (this.yav > -0.5 || this.yav < 0.5) this.yav = round(this.yav);
    else if (this.yav > 0) this.yav = ceiling(this.yav);
    else if (this.yav < 0) this.yav = floor(this.yav);

    this.update = function(){
        this.x -= 5;
        fill(0,250,0);
        rect(this.x, this.y, scl, this.var);
    }
    this.advancedUpdate = function(){
        this.x -= 5;
        this.y += this.yav;
        if (this.y >= height - this.var || this.y <= 0) this.yav *= -1;
        fill(0,250,0);
        rect(this.x, this.y, scl, this.var);
    }
}