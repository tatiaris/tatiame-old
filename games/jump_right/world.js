var bg1;
var player1;
var land;
var leftBound;
var theta;
var obstaclesList;
var n;
var obv;

function setup() {
  obv = 10;
  obstaclesList = [];
  createCanvas(innerWidth, innerHeight);
  theta = 0;
  bg1 = new bg();
  player1 = new player();
  land = new platform();
  var l = setInterval(newObstacle, 600);
}
function draw() {
  noStroke();
  createCanvas(innerWidth, innerHeight);
  bg1.show();
  if(player1.alive){
    player1.update();
    checkKeyDown();
    updateObstacles();
    clearGarbage();
    push();
    translate(player1.x + 25, player1.y - 25);
    if(player1.jumping > 0) rotate(theta);
    else theta = 0;
    player1.show();
    pop();
  }
  fill(0,255,0);
  rect(0, height*2/3, width, height/3);
  theta += PI/100;
  showObstacles();
  fill(255);
  textSize(32);
  text(player1.score, 10, 25);
  obv+=0.1;
  player1.jumpForce += 0.01;
}
function newObstacle() {
  obv = constrain(obv, 0, 110);
  n = new obstacles(obv);
  obstaclesList.push(n);
}
function updateObstacles() {
  for(var i = 0; i < obstaclesList.length; i++){
    obstaclesList[i].update();
  }
}
function showObstacles() {
  for(var i = 0; i < obstaclesList.length; i++){
    obstaclesList[i].show();
    if(rectRect(player1.x, player1.y - 50, 50, 50, obstaclesList[i].x, obstaclesList[i].y, 50, 50)){
      player1.alive = false;
      setTimeout(refresh, 500);
    }
  }
}
function keyPressed() {
  if(keyCode == 32 && player1.jumping < 2){  // jump 'space'
    player1.jump();
    player1.jumping++;
  }
  if (keyCode == 70){ // full screen mode
    var fs = fullscreen();
    fullscreen(!fs);
  }
  if(keyCode == 82){
    location.reload();
  }
}
function checkKeyDown() {
  if (keyIsDown(65)) {  // left
    everythingMoveX(-1);
  }

  if (keyIsDown(68)) {  // right
    everythingMoveX(1);
  }
}
function refresh() {
    // setup();
}
function everythingMoveX(n) {
  bg1.x += n*2;
}

function rectRect(x, y, w, h, x2, y2, w2, h2) {
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
}
function collideCircles(x, y,d, x2, y2, d2){
  if(this.dist(x,y,x2,y2) <= (d/2)+(d2/2)) return true;
  return false;
}
function clearGarbage() {
  if(obstaclesList.length > 10){
    obstaclesList.splice(0, obstaclesList.length - 10);
  }
}
