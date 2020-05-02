var cobra;
var cheese;
var scl = 20;
var controlsOn;
var v;
var totalScore;
var h;
var a;
var x;

function setup(){
    createCanvas(800, 600);
    cobra = new snek();
    cheese = new fud();
    frameRate(60);
    v = 0.25;
    cheese.updateFudLocation();
    totalScore = 0;
    controlsOn = true;
    paused = false;
    h = false;
    a = false;
    x = false;
}

function draw(){
    if (controlsOn){
        background(0);
        boundary();
        if (h == true && a == true && x == true) activateCheat();
        cobra.updateLocation();
        cobra.show();
        checkClash();        
        cheese.showFud();
        checkFood();
        displayScore();
    }
}

function boundary(){
    stroke(255,255,255);
    strokeWeight(scl);
    line(0 , 0, width, 0);
    line(0, 0, 0, height);
    line(width, 0, width, height);
    line(0, height, width, height);
    stroke(0, 0, 255);
    strokeWeight(1);
    textSize(10);
    text("move: arrow keys  /  WASD         ||           pause: spacebar           ||           restart: ' r '", 20,7)
}


function keyPressed(){
    if (controlsOn){
        if (keyCode == UP_ARROW && cobra.ySpeed == 0) cobra.dir(0,-v);
        else if (keyCode == DOWN_ARROW && cobra.ySpeed == 0) cobra.dir(0,v);
        else if (keyCode == LEFT_ARROW && cobra.xSpeed == 0)  cobra.dir(-v,0);
        else if (keyCode == RIGHT_ARROW && cobra.xSpeed == 0)    cobra.dir(v,0);

        if (keyCode == 87 && cobra.ySpeed == 0) cobra.dir(0,-v);
        else if (keyCode == 83 && cobra.ySpeed == 0) cobra.dir(0,v);
        else if (keyCode == 65 && cobra.xSpeed == 0)  cobra.dir(-v,0);
        else if (keyCode == 68 && cobra.xSpeed == 0)    cobra.dir(v,0);
    }
    if (keyCode == 32 && controlsOn){
        strokeWeight(5);
        controlsOn = false;
        text("PAUSED", width/2 - width/6, height/2);
    }
    else if (!controlsOn && keyCode == 32) controlsOn = true;
    if (keyCode == 82) restart();
    else if (keyCode == 72) h = !h;
    else if (keyCode == 65) a = !a;
    else if (keyCode == 88) x = !x;
    draw();
}

function activateCheat(){
    if(cobra.x + (cobra.xSpeed * scl) < scl){                       //left
        if(cobra.y + (-v * scl) < scl)  cobra.dir(0,v);
        else    cobra.dir(0,-v);
    }else if(cobra.x + (cobra.xSpeed * scl) > width-scl){           //right
        if(cobra.y + (v * scl) > height - scl)  cobra.dir(0,-v);
        else    cobra.dir(0, v);
    }else if(cobra.y + (cobra.ySpeed * scl) < scl){                 //top
        if(cobra.x + (v * scl) > width - scl)   cobra.dir(-v, 0);
        else    cobra.dir(v, 0);
    }else if(cobra.y + (cobra.ySpeed * scl) > height - scl){        //bottom
        if(cobra.x + (-v * scl) < scl)  cobra.dir(v, 0);
        else    cobra.dir(-v, 0);
    }else if (round(cobra.x/scl) == round(cheese.x/scl) && cobra.ySpeed == 0){
        if (cobra.y > cheese.y && cobra.ySpeed == 0)    cobra.dir(0,-v);
        else if(cobra.y < cheese.y && cobra.ySpeed == 0)    cobra.dir(0,v);
    }else if (round(cobra.y/scl) == round(cheese.y/scl) && cobra.xSpeed == 0){
        if (cobra.x > cheese.x && cobra.xSpeed == 0)    cobra.dir(-v,0);
        else if (cobra.x < cheese.x && cobra.xSpeed == 0)   cobra.dir(v,0);
    }
    for (var i = 2; i < cobra.body; i++){
        var tailx = 0;
        var taily = 0;
        if (cobra.xList[cobra.xList.length - i] - cobra.xList[cobra.xList.length - i - 1] > 0){ //going right
            print("right");
            tailx = -v;
            taily = 0;
        }else if (cobra.xList[cobra.xList.length - i] - cobra.xList[cobra.xList.length - i - 1] < 0){ //going left
            print("left");
            tailx = v;
            taily = 0;
        }else if (cobra.yList[cobra.yList.length - i] - cobra.yList[cobra.yList.length - i - 1] > 0){ //going down
            print("down");
            tailx = 0;
            taily = -v;
        }else if (cobra.yList[cobra.yList.length - i] - cobra.yList[cobra.yList.length - i - 1] < 0){ //going up
            print("up");
            tailx = 0;
            taily = v;
        }
        if (cobra.x + (cobra.xSpeed*scl) == cobra.xList[cobra.xList.length - i] && cobra.y + (cobra.ySpeed*scl) == cobra.yList[cobra.yList.length - i]){
            print(tailx);
            print(taily);
            cobra.dir(tailx, taily);
        }
    }
    checkFood();
}

function checkFood(){
    if (round(cobra.x/scl) == cheese.x/scl && round(cobra.y/scl) == cheese.y/scl){
        cheese.updateFudLocation();        
        totalScore++;
        cobra.body+=5;
    }
}

function checkClash(){
    if (cobra.x < 20 || cobra.y < 20 || cobra.x > width - scl || cobra.y > height - scl) gameOver();
    for (var i = 4; i < cobra.body; i++){
        if (cobra.x == cobra.xList[cobra.xList.length - i] && cobra.y == cobra.yList[cobra.yList.length - i]){
            gameOver();
        }
    }
}

function displayScore(){
    strokeWeight(3);
    stroke(250, 240, 0);
    text(totalScore, width - 100, 60);
    strokeWeight(32);   
}

function gameOver(){
    controlsOn = false;    
    cobra.xSpeed = 0;
    cobra.ySpeed = 0;    
    stroke(255, 0, 0);
    ellipse(cobra.x, cobra.y, scl/2,scl/2);
    strokeWeight(3);
    textSize(40);
    text("GAME OVER", width/4, height/4);
    textSize(75);
    text("Final Score : " + totalScore, width/4,  height*3/8);
    textSize(32);
    text("PRESS 'R' TO RESTART", width/4, height/2);
}

function restart(){
    setup();
}

function snek(){
    this.x = scl;
    this.y = scl;
    this.xSpeed = 0.25;
    this.ySpeed = 0;
    this.xList = [];
    this.yList = [];
    this.body = 1;
    for (var i = 0; i < this.body; i++){
        this.xList[i] = this.x;
        this.yList[i] = this.y;
    }

    this.dir = function(x, y){
        this.xSpeed = x;
        this.ySpeed = y;

    }

    this.updateLocation = function(){
        stroke(255,255,255);
        textSize(32);
        this.x += (this.xSpeed * scl);
        this.y += (this.ySpeed * scl);
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
        append(this.xList, this.x);
        append(this.yList, this.y);
    }
    
    this.show = function(){
        stroke(73, 241, 68);
        strokeWeight(scl);
        for (var i = 1; i < this.body; i++)
        line(this.xList[this.xList.length - i], 
            this.yList[this.yList.length - i], 
            this.xList[this.xList.length - i - 1], 
            this.yList[this.yList.length - i - 1]);
        fill(0);
        ellipse(this.x, this.y, scl/2, scl/2);
    }
}
function fud(){
    var scl = 20;

    this.updateFudLocation =  function(){
        this.x = floor(random(1, width/scl)) * scl;
        this.y = floor(random(1, height/scl)) * scl;
    }

    this.showFud = function(){
        textSize(32);
        strokeWeight(scl);
        stroke(255, 0, 243);
        line(this.x, this.y, this.x, this.y);
    }
}