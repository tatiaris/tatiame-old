var scl = 50;
var gap =  100;
var g = 1;
var burd;
var pipes;
var pipes2;
var pipes3;
var score;
var paused;
var gameOn;
var minh;
var maxh;
var bg;


function preload(){
    // bg = loadImage("http://localhost:8000/libraries/opera.png");
}

function setup(){
    // createCanvas(bg.width, bg.height);
    createCanvas(700, 700);
    minh = 250;
    maxh = 450;
    angleMode(DEGREES);
    burd = new bird();
    pipes = new obstacles();
    pipes2 = new obstacles();
    pipes3 = new obstacles();
    gameOn = true;
    score = 0;
    paused = false;
}

function draw(){
    if (gameOn && !paused){
        // background(bg);
        background(0);
        fill(255,255,255);
        textSize(32);
        text(score, width - 60, 60);
        burd.showTrail();
        burd.update();
        createObstacle();
        if (pipes.x == 0 || pipes2.x == 0 || pipes3.x == 0){
            minh+=2.5;
            maxh+=2.5;
            score++;
        }
        if (score < 25){
            pipes.update();
            if (pipes.x < width/2 || score > 0) pipes2.update();
            if (pipes.x == 0 || score > 0) pipes3.update();
        }
        else {
            pipes.advancedUpdate();
            if (pipes.x < width/2 || score > 0) pipes2.advancedUpdate();
            if (pipes.x == 0 || score > 0) pipes3.advancedUpdate();
        }
        checkCollision();
    }
}

function keyPressed(){
    if(keyCode == 32){
        bounce();
    }
    if(keyCode == 82){
        setup();
    }
    if(keyCode == 80 && !paused){
        paused = true;
    } else if (keyCode ==  80 && paused){
        paused = false;
    }
}

function mousePressed(){
    bounce();
}

function bounce(){
    burd.yv = 0;
    burd.yv -= 13;
}

function checkCollision(){
    if (collideRectCircle(pipes.x, pipes.y, scl, pipes.var, burd.x, burd.y, scl*2/3)) gameOver();
    if (collideRectCircle(pipes2.x, pipes2.y, scl, pipes2.var, burd.x, burd.y, scl*2/3)) gameOver();
    if (collideRectCircle(pipes3.x, pipes3.y, scl, pipes3.var, burd.x, burd.y, scl*2/3)) gameOver();
    if (burd.y == 0 || burd.y > height - scl/3) gameOver();
}

function createObstacle(){
    if (pipes.x == width/2) pipes2 = new obstacles();
    else if (pipes2.x == width/2) pipes3 = new obstacles();
    else if (pipes3.x == width/2) pipes = new obstacles();
}

function collideRectCircle(rx, ry, rw, rh, cx, cy, diameter) {
    var testX = cx;
    var testY = cy;

    if (cx < rx){         testX = rx       // left
    }else if (cx > rx+rw){ testX = rx+rw  }   // right

    if (cy < ry){         testY = ry       // top
    }else if (cy > ry+rh){ testY = ry+rh }   // bottom

    var distance = this.dist(cx,cy,testX,testY)

    if (distance <= diameter/2) {
      return true;
    }
    return false;
}

function gameOver(){
    fill(255,0,0);
    textSize(32);
    text("Final Score: " + score, 40, 300);
    text("Press ' r ' to RESTART!", 40, 400);
    fill(255,0,0);
    ellipse(burd.x, burd.y, scl*2/3,scl*2/3);
    gameOn = false;
}


// a3q36zm7rk
