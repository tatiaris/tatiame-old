function ball(){
    this.x = wide/2;
    this.y = tall/2;
    this.theta = 0;
    this.vel = scl/5;
    this.dir = 0;
    this.numBounces = 0;
    var px;
    this.pickDir = function(){
        var num  = ceil(random(0,4));
        switch(num){
            case 1:
                this.theta += num;
                break;
            case 2:
                this.theta += num;
                break;
            case 3:
                this.theta += num + 1;
                break;
            case 4:
                this.theta += num + 1;
                break;
        }
    }
    this.pickDir();
    this.update = function(){
        px = this.x;
        this.x += this.vel*Math.sin(this.theta);
        this.y += this.vel*Math.cos(this.theta);
        this.x = constrain(this.x, 0, wide);
        this.y = constrain(this.y, 0, tall);
        if (this.x > px) this.dir = -1;
        else this.dir = 1;
    }
    this.show = function(){
        fill(255,255,255);
        ellipse(this.x, this.y, scl,scl);
    }
    this.bounce = function(){
        this.numBounces++;
        if (this.numBounces == 1) this.vel = scl/2;
        this.vel += 0.2;
        this.theta *= -1;
        this.theta *= random(0.95, 1.05);
    }
    this.bounceUp = function(){
        this.theta *= -1;
        this.theta += PI;
    }
}
