<?
include './php/helper.php';
include './php/header.php';
if (login()){
    include './php/notes.php';
}
else {
    include './php/login.php';
}
include './php/footer.php';
?>
