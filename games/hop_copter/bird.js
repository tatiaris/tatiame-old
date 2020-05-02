function bird(){
    this.yv = 0;
    this.x = width/4;
    this.y = height/2;
    this.xCor = [];
    this.yCor = [];
    this.tThick = 10;

    this.update = function(){
        this.yv += g;
        this.y += this.yv;
        fill(0,255,255);
        ellipse(this.x, this.y, scl*2/3, scl*2/3);
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
        this.xCor.push(this.x);
        this.yCor.push(this.y)
    }

    this.showTrail = function(){
        fill(0,255,255);
        this.tThick = 10;
        if (this.yCor.length <= 50){
            for(var i = 1; i < this.yCor.length; i++){
                ellipse(this.x - i*5,
                    this.yCor[this.yCor.length - i],
                    this.tThick,
                    this.tThick)
                this.tThick -= .2;                
            }
        }
        if (this.yCor.length > 50){
            for(var i = 1; i < 50; i++){
                ellipse(this.x - i*5,
                    this.yCor[this.yCor.length - i],
                    this.tThick,
                    this.tThick)
                this.tThick -= .2;                
            }
        }
    }
}