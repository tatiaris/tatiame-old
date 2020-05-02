var stars = [];
var speed = 10;

var starcount = 0;

var mx;
var my;

// Text trans stuff
var outroString ="";
var globalSpeed = 40; // smaller = longer duration
var initDelay = 10000; // in ms

var whiteness = 0;
var opa = 0;
var whitescreen = false;
var compwhite = false;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  if (window.innerWidth >= window.innerHeight) {
    starcount = width / 3;
  } else {
    starcount = height / 3;
  }
  for (var i = 0; i < starcount; i ++) {
    stars[i] = new Star();
  }
}

function draw() {
  push();
  if (mouseX <= (width/2) - 10) {
    speed = map(mouseX, 0, (width/2) - 10, 0, 75);
  } else if (mouseX >= (width/2) + 10) {
    speed = map(mouseX, (width/2) + 10, width, 75, 0);

  }

  if (
    mouseX > (width/2) - 30 &&
    mouseX < (width/2) + 30 &&
    mouseY > (height/2) - 30 &&
    mouseY < (height/2) + 30 &&
    whitescreen == false
  ) {
    speed += 2;
     if (speed > 500) {
       speed = 500;
       whitescreen = true;
     }
  }
  background(0);
  translate(mouseX, mouseY);
  for (var i = 0; i < stars.length; i ++) {
    stars[i].update();
    stars[i].show();
  }
  pop();
  // rect(width/2,height/2,2,2);
  if (whitescreen) {
    if (whiteness < 255) {
      whiteness += 2.5;
    } else if(compwhite == false) {
      compwhite = true;
      TextAni("Wow there!! you went a little too fast...");
    }

    noStroke();
    fill(255, whiteness);
    rect(0, 0, width, height);

    if (compwhite) {
      if (opa < 255) {
        opa += 2.5;
      }
      fill(0, opa);
      textAlign(CENTER);
      textSize(50);
      text(outroString, width/2, height/2);
    }
  }

}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
  this.showCircle = false;

  this.update = function() {
    this.z -= speed;
    if (this.z < 1) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
      this.pz = this.z;
    }
    if (speed < 20) {
      this.showCircle = true;
    } else if (speed > 20) {
      this.showCircle = false;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 6, 0);
    if (this.showCircle) {
      ellipse(sx, sy, r, r);
    }

    var px = map(this.x / this.pz, 0, 1, 0, width)
    var py = map(this.y / this.pz, 0, 1, 0, height)

    this.pz = this.z;
    stroke(255);
    line(px, py, sx ,sy);

  }
}



function TextAni(string) {
    var startStr = 0; //string process
    var strLen = string.length; //string length
    var inStr = string; //initial string
    var ensString = ""; //ensemble string
    strAnTo(startStr, strLen, inStr, ensString, initDelay);

}
function strAnTo(startStr, strLen, inStr, ensString, ToDur) { //string antimate timeout
    var startStrAni = startStr; //string process
    var strLenAni = strLen; //string length
    var inStrAni = inStr; //initial string
    var ensStringAni = ensString; //ensemble string
    var strAnIt = setTimeout(function () {
        if (startStrAni <= strLenAni) {
            startStrAni ++;
            ensStringAni = inStrAni.substr(0, startStrAni);
            outroString = inStrAni.substr(0, startStrAni);
            if (inStrAni.charAt(startStrAni) == ",") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 2000);
            } else if (inStrAni.charAt(startStrAni) == ".") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 3500);
            } else if (inStrAni.charAt(startStrAni) == "?") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 2500);
            } else if (inStrAni.charAt(startStrAni) == "!") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 2200);
            } else if (inStrAni.charAt(startStrAni) == " ") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 1500);
            } else {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 1000);
            }
        }
    },ToDur/globalSpeed)
}
