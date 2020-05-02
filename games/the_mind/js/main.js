document.getElementById("join_game").onclick = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("info-container").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./php/functions.php?f=html_player_name", true);
    xhttp.send();
};

document.getElementById("create_game").onclick = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("info-container").innerHTML = this.responseText;
            window.room = document.getElementById("room_code").innerHTML;
        }
    };
    xhttp.open("GET", "./php/functions.php?f=create_game", true);
    xhttp.send();
};

function enter_player() {
    console.log('entering player');
    var xhttp = new XMLHttpRequest();
    var nickname = document.getElementById("nickname").value;
    var room_code = document.getElementById("room_code").value;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("info-container").innerHTML = this.responseText;
            window.room = room_code;
            window.nickname = nickname;
        }
    };
    xhttp.open("GET", "./php/functions.php?f=enter_player&code=" + room_code + "&nickname=" + nickname, true);
    xhttp.send();
}

function player_ready() {
    console.log('played is ready');
    setInterval(check_for_notifications, 1000);
    document.getElementById("player_ready_btn").className += "btn-disabled";
    document.getElementById("player_ready_btn").disabled = true;
}

function check_for_notifications() {
    console.log('checking for notifs');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "1") {
                update_screen();
            }
        }
    };
    xhttp.open("GET", "./php/functions.php?f=check_for_notifications&code=" + window.room + "&nickname=" + window.nickname, true);
    xhttp.send();
}

function update_screen() {
    console.log('updating screen');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == "1") {
                console.log("game has started");
            }
        }
    }
    xhttp.open("GET", "./php/functions.php?f=find_update&code=" + window.room + "&nickname=" + window.nickname, true);
    xhttp.send();
}

function start_game() {
    console.log('starting game');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "./php/functions.php?f=start_game&code=" + window.room, true);
    xhttp.send();
}
