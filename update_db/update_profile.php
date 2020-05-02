<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>tatia.me | add item</title>
        <meta charset="utf-8">
        <script src="./../js/jquery.min.js"></script>
        <link rel="stylesheet" href="./../css/bootstrap.min.css">
        <script src="./../js/popper.min.js"></script>
        <link rel="stylesheet" href="./../css/style.css">
        <link rel="stylesheet" href="./../css/main.css">
        <script src="./../js/font_kit.js"></script>
    </head>

    <body>
        <div id="particles-js" class="position-fixed d-flex justify-content-center align-items-center">
            <div class="container position-fixed">
            <?php
                if (isset($_POST["username"]) && isset($_POST["pw"])){
                    $user_name = $_POST["username"];
                    $pw = $_POST["pw"];
                    if ($user_name == "tatiaris" && $pw == "Gottobe$&@me"){?>
                        <form action="upload_profile.php" method="post" enctype="multipart/form-data">
                            <input type="hidden" name="user_name" value="<?php echo $user_name; ?>">
                            <input type="hidden" name="pw" value="<?php echo $pw; ?>">
                            <div class="input-group justify-content-center">
                                <div class="input-group-prepend">
                                    <span class="input-group-text t_input_txt tat-label">Profile Pic: </span>
                                </div>
                                <input type="file" class="t_input_txt form-control-file form-control-lg border tat-file_input" name="file_to_upload" id="file_to_upload">
                            </div>
                            <input type="submit" id="my_submit" class="t_input_submit form-control-lg" value="Update Profile" name="submit">
                        </form>
                    <?} else {?>
                        <div class="alert alert-danger" style="margin:1vh;"><strong>Err.</strong> Wrong username or password.</div>
                        <form action="update_profile.php" method="post" enctype="multipart/form-data">
                            <input type="text" class="t_input_txt form-control form-control-lg" placeholder="username" name="username" value="">
                            <input type="password" class="t_input_txt form-control form-control-lg" placeholder="password" name="pw" value="">
                            <input type="submit" id="my_submit" class="t_input_submit form-control-lg" value="Log In" name="submit">
                        </form>
                    <?}
                } else {?>
                    <form action="update_profile.php" method="post" enctype="multipart/form-data">
                        <input type="text" class="t_input_txt form-control form-control-lg" placeholder="username" name="username" value="">
                        <input type="password" class="t_input_txt form-control form-control-lg" placeholder="password" name="pw" value="">
                        <input type="submit" id="submit" class="t_input_submit form-control-lg" value="Log In" name="submit">
                    </form>
                <?}
            ?>
            </div>
        </div>
        <form action="./../"><button type="submit" class="homebutton btn btn-dark fas fa-home fa-3x"></button></form>
        <script src="./../particles.js"></script>
        <script src="./../js/app.js"></script>
    </body>
</html>
