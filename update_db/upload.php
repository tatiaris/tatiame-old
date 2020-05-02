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

$db_name = $_POST["db_name"];
$item_name = $_POST["item_name"];
$item_link = $_POST["item_link"];

$target_dir_img = "./../$db_name/$item_link/images/";
$target_file = $target_dir_img . basename($_FILES["file_to_upload"]["name"]);

$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["file_to_upload"]["tmp_name"]);
    if($check !== false) {
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
    $target_dir_files = "./../$db_name/$item_link/";
    mkdir($target_dir_files);
    // echo "directory $item_link created.<br>";

    if(isset($_FILES['p_files_to_upload']['name'])) {
        $total_files = count($_FILES['p_files_to_upload']['name']);
        for($key = 0; $key < $total_files; $key++) {
            // Check if file is selected
            if(isset($_FILES['p_files_to_upload']['name'][$key]) && $_FILES['p_files_to_upload']['size'][$key] > 0) {
                $original_filename = $_FILES['p_files_to_upload']['name'][$key];
                $target = $target_dir_files . basename($original_filename);
                $tmp  = $_FILES['p_files_to_upload']['tmp_name'][$key];
                move_uploaded_file($tmp, $target);
            }
        }
        // echo "Item files uploaded successfully.<br>";
    }

    mkdir($target_dir_img);

    $img_name = basename($_FILES["file_to_upload"]["name"]);
    $item_id = $all_sims = $conn->query("SELECT * FROM `$db_name`")->num_rows + 1;
    $sql = "INSERT INTO `$db_name`(`id`, `name`, `link`, `img`) VALUES ($item_id,\"$item_name\",\"$item_link\",\"$img_name\");";
    $result = $conn->query($sql);
    if ($result){
        if (move_uploaded_file($_FILES["file_to_upload"]["tmp_name"], $target_file)) {
            echo "Database successfully updated.";
        } else {
            echo "Sorry, there was an error uploading your file.<br>";
        }
    } else {
        echo "Database upload unsuccessful.<br>";
    }
}

?>

<form action="create_item.php" method="post" enctype="multipart/form-data">
    <input type="hidden" class="t_input_txt form-control form-control-lg" placeholder="username" name="username" value="<?php echo $user_name; ?>">
    <input type="hidden" class="t_input_txt form-control form-control-lg" placeholder="password" name="pw" value="<?php echo $pw; ?>">
    <input type="submit" id="submit" class="t_input_submit form-control-lg" value="Upload Item" name="submit">
</form>

<form action="<?php echo $target_dir_files; ?>" method="post" enctype="multipart/form-data">
    <input type="submit" id="submit" class="t_input_submit form-control-lg" value="View Item" name="submit">
</form>
