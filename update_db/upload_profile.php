<?php
// $conn = new mysqli("localhost", "tatiakqf_admin", "Gottobe$&@me", "tatiakqf_tatiame");
$conn = new mysqli("localhost", "root", "", "tatiame");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$user_name = "";
$pw = "";
if (isset($_POST["user_name"]) && isset($_POST["pw"])){
    $user_name = $_POST["user_name"];
    $pw = $_POST["pw"];
    if ($user_name != "tatiaris" || $pw != "Gottobe$&@me"){
        die("Invalid Request (wrong username or password)");
    }
} else {
    die("Invalid Request");
}

$target_dir_img = "./../images/";
$target_file = $target_dir_img . basename($_FILES["file_to_upload"]["name"]);

$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["file_to_upload"]["tmp_name"]);
    if($check != false) {
        // echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.<br>";
        $uploadOk = 0;
    }
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.<br>";
// if everything is ok, try to upload file
} else {
    $img_name = basename($_FILES["file_to_upload"]["name"]);

    if(file_exists($target_file)) unlink($target_file);
    move_uploaded_file($_FILES["file_to_upload"]["tmp_name"], $target_file);

}

?>

<form action="./../index.php" method="post" enctype="multipart/form-data">
    <input type="hidden" class="t_input_txt form-control form-control-lg" placeholder="username" name="username" value="<?php echo $user_name; ?>">
    <input type="hidden" class="t_input_txt form-control form-control-lg" placeholder="password" name="pw" value="<?php echo $pw; ?>">
    <input type="submit" id="submit" class="t_input_submit form-control-lg" value="Home" name="submit">
</form>
