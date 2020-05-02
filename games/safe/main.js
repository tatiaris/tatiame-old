var speed = 100;

player_spin = setInterval(rotate_player, 100);

document.addEventListener("keyup", function(e) {
	if (e.keyCode == 40) { // down
        console.log("moving down");
        move("v", speed);
	}
    if (e.keyCode == 38) { // up
        move("v", -speed);
    }
    if (e.keyCode == 37) { // left
        move("h", -speed);
    }
    if (e.keyCode == 39) { // right
        move("h", speed);
    }
});

function move(dir, amt) {
    if (dir == "v") {
        c_pos = document.getElementById("player").style.top;
        document.getElementById("player").style.top = (parseInt(c_pos.substring(0, c_pos.length - 2)) + amt) + "px";
    }
    else if (dir == "h") {
        c_pos = document.getElementById("player").style.left;
        document.getElementById("player").style.left = (parseInt(c_pos.substring(0, c_pos.length - 2)) + amt) + "px";
    }
}

function rotate_player() {
    e = document.getElementById("player");
    e.style.transform = "rotate(" + (parseInt(e.style.transform.substring(7, e.style.transform.length - 4)) + 5) + "deg)"
}
