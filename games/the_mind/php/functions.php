<?
$conn = new mysqli("localhost", "root", "", "the_mind");

$f = $_GET["f"];

if ($f == "create_game"){
    create_game();
} else if ($f == "html_player_name") {
    echo html_player_name();
} else if ($f == "enter_player") {
    echo enter_player();
} else if ($f == "check_for_notifications") {
    echo check_for_notifications();
} else if ($f == "start_game") {
    echo start_game();
} else if ($f == "find_update") {
    echo find_update();
}

function start_game() {
    $code = strtoupper($_GET["code"]);
    $sql = "UPDATE `active_games` SET `ongoing_status`= 1 WHERE code = '$code'";
    $GLOBALS['conn']->query($sql);
    send_notifications($code);
}

function send_notifications($code) {
    $sql = "UPDATE `$code` SET `notif`= 1";
    $GLOBALS['conn']->query($sql);
}

function check_for_notifications() {
    $code = strtoupper($_GET["code"]);
    $nickname = $_GET["nickname"];

    $result = $GLOBALS['conn']->query("SELECT * FROM `$code` WHERE nickname = '$nickname'");

    if ($result->fetch_assoc()['notif'] == 0) {
        return "0";
    }
    return "1";
}

function create_game(){
    $code = create_room_code();
    while (room_code_exists($code)){
        $code = create_room_code();
    }
    // create the game in the SQL database here
    $sql = "INSERT INTO `active_games`(`code`) VALUES (\"$code\")";
    $result = $GLOBALS['conn']->query($sql);
    create_game_table($code);
    echo display_game_code($code);
}

function find_update() {
    echo game_started();
}

function game_started() {
    $code = strtoupper($_GET["code"]);
    $result = $GLOBALS['conn']->query("SELECT * FROM `active_games` WHERE code = '$code'");
    $status = $result->fetch_assoc()['ongoing_status'];
    if ($status == 1) {
        return true;
    }
    return false;
}

function create_game_table($code) {
    $sql = "CREATE TABLE `the_mind`.`$code` (`id` INT NOT NULL AUTO_INCREMENT , `nickname` TEXT NOT NULL , `cards` TEXT NOT NULL DEFAULT '', `notif` INT NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE = InnoDB;";
    $GLOBALS['conn']->query($sql);
}

// checks if room code already exists in the database
function room_code_exists($code){
    $result = $GLOBALS['conn']->query("SELECT * FROM `active_games` WHERE CODE = '$code'")->num_rows;
    if ($result < 1) return false;
    return true;
}

function get_random_character(){
    return chr(rand(65,90));
}

function create_room_code(){
    $code = "";
    for ($i = 0; $i < 4; $i++) {
        $code .= get_random_character();
    }
    return $code;
}

function display_game_code($code) {
    ?>
    <div class="full-height">
        <div class="half-height flex-center">
            <span style="font-size: 1.5em;">room code</span>
            <br>
            <span id="room_code" class="game-code" style="text-shadow: 2px 2px blue;"><? echo $code; ?></span>
        </div>
        <div class="half-height flex-center">
            <button id="start_game_btn" type="button" name="button" onclick="start_game()">START GAME</button>
        </div>
    </div>
    <?
}

function html_player_name() {
    ?>
    <div class="full-height grid">
        <div class="flex-center">
            <input id="room_code" type="text" name="" value="" placeholder="room code">
            <span style="margin: 30px;font-style:italic;">and</span>
            <input id="nickname" type="text" name="" value="" placeholder="nickname">
        </div>
        <div class="flex-center">
            <button id="submit_room_name" type="submit" name="button" onclick="enter_player()">join room</button>
        </div>
    </div>
    <?
}

function enter_player() {
    $nickname = $_GET["nickname"];
    $room_code = strtoupper($_GET["code"]);

    if (room_code_exists($room_code)) {
        $GLOBALS['conn']->query("INSERT INTO `$room_code` (`nickname`) VALUES (\"$nickname\")");
        $GLOBALS['conn']->query("UPDATE `active_games` SET `num_players`= num_players + 1 WHERE code = '$room_code'");
        ?>
        <div class="half-height flex-center">
            welcome <? echo $nickname; ?>, press ready and wait for the admin to start the game.
        </div>
        <div class="half-height flex-center">
            <button id="player_ready_btn" type="button" name="button" onclick="player_ready()">ready</button>
        </div>
        <?
    } else {
        return html_player_name();
    }
}

$conn->close();
?>
