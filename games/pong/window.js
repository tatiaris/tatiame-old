var lefty;
var righty;
var gol;
var wide;
var tall;
var scl;
var paused;
var gameOn;
var thetao;

function setup(){
    // createInput();
    thetao = 0;
    paused = false;
    gameOn = true;
    scl = 20;
    wide = innerWidth/1.5;
    tall = innerHeight;
    createCanvas(wide, tall);
    lefty = new paddle(-1, "Left", 255, 255, 0);
    righty = new paddle(wide - scl, "Right", 0, 255, 255);
    gol = new ball();
}
function draw(){
    if(!paused && gameOn){
        background(35);
        hitSide();
        righty.update();
        lefty.update();
        righty.show();
        lefty.show();
        gol.update();
        gol.show();
        checkGameStatus();
        displayScore();
    }
}

function keyPressed(){
    if (keyCode == 38) righty.yv = -10;
    else if (keyCode == 40) righty.yv = 10;
    if (keyCode == 87) lefty.yv = -10;
    else if (keyCode == 83) lefty.yv = 10;
    if (keyCode == 82) setup();
    if(keyCode == 32 && gameOn && !paused) paused = true;
    else if(keyCode == 32 && paused && gameOn) paused = false;
}
function keyIsDown(){
  // if (keyCode == 38) righty
}
function hitSide(){
    if (collideRectCircle(lefty.x, lefty.y, scl, lefty.length, gol.x, gol.y, scl) && gol.dir > 0){
        gol.bounce();
    }
    if (collideRectCircle(righty.x, righty.y, scl, righty.length, gol.x, gol.y, scl) && gol.dir < 0){
        gol.bounce();
    }
    if (gol.y <= 0 || gol.y >= tall){
        gol.bounceUp();
    }
    if (gol.x <= 0 || gol.x >= wide){
        if (gol.x <= 0) righty.score++;
        if (gol.x >= wide) lefty.score++;
        nextPoint();
    }
}

function displayScore(){
    textSize(32);
    text(lefty.score, 60, 60);
    text(righty.score, wide - 100, 60);
}
function nextPoint(){
    var ls = lefty.score;
    var rs = righty.score;
    lefty = new paddle(-1, "Left", 255, 255, 0);
    righty = new paddle(wide - scl, "Right", 0, 255, 255);
    gol = new ball();
    lefty.score = ls;
    righty.score = rs;
}
function checkGameStatus(){
    if (lefty.score == 10) gameOver(lefty);
    if (righty.score == 10) gameOver(righty);
}
function gameOver(winner){
    text(winner.name + " WINS!", wide/2-100,tall/2);
    text("Press ' r ' to restart!", wide/2 - 100, tall/2+100);
    gameOn = false;
}
function collidePointCircle(x, y, cx, cy, d) {
    //2d
    if( this.dist(x,y,cx,cy) <= d/2 ){
      return true;
    }
    return false;
};
function collideLineCircle( x1,  y1,  x2,  y2,  cx,  cy,  diameter) {
    var inside1 = collidePointCircle(x1,y1, cx,cy,diameter)
    var inside2 = collidePointCircle(x2,y2, cx,cy,diameter);
    if (inside1 || inside2) return true;
    var distX = x1 - x2;
    var distY = y1 - y2;
    var len = this.sqrt( (distX*distX) + (distY*distY) );
    var dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / this.pow(len,2);
    var closestX = x1 + (dot * (x2-x1));
    var closestY = y1 + (dot * (y2-y1));
    var onSegment = collidePointLine(closestX,closestY,x1,y1,x2,y2);
    if (!onSegment) return false;
    if(this._collideDebug){
      this.ellipse(closestX, closestY,10,10);
    }
    distX = closestX - cx;
    distY = closestY - cy;
    var distance = this.sqrt( (distX*distX) + (distY*distY) );
    if (distance <= diameter/2) {
      return true;
    }
    return false;
}
function collidePointLine(px,py,x1,y1,x2,y2, buffer){
    // get distance from the point to the two ends of the line
  var d1 = this.dist(px,py, x1,y1);
  var d2 = this.dist(px,py, x2,y2);

  // get the length of the line
  var lineLen = this.dist(x1,y1, x2,y2);

  // since floats are so minutely accurate, add a little buffer zone that will give collision
  if (buffer === undefined){ buffer = 0.1; }   // higher # = less accurate

  // if the two distances are equal to the line's length, the point is on the line!
  // note we use the buffer here to give a range, rather than one #
  if (d1+d2 >= lineLen-buffer && d1+d2 <= lineLen+buffer) {
    return true;
  }
  return false;
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
