<?
function login() {
    if (!isset($_POST["username"]) || !isset($_POST["password"])) {
        return false;
    } else {
        $user = $_POST["username"];
        $pwd = $_POST["password"];
    }
    return verify_user($user, $pwd);
}

function verify_user($usr, $pw) {
    if ($usr == "tatiaris" && $pw == "Gottobe$&@19") {
        return true;
    }
    return false;
}
?>
