<?php
    // $conn = new mysqli("localhost", "tatiakqf_admin", "Gottobe$&@me", "tatiakqf_tatiame");
    $conn = new mysqli("localhost", "root", "", "tatiame");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $all_projects = $conn->query("SELECT * FROM `projects` ORDER BY id DESC");
    $num_projects = $all_projects->num_rows;
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>tatia.me | projects</title>
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
            <?if ($num_projects < 1){?>
                <div class="empty_db_message_container">
                    <label>To Be Added...</label>
                </div>
            <?} else {?>
                <div class="row tat-items_container position-fixed justify-content-center tat-scrollbar">
                    <?foreach ($all_projects as $key => $project) {?>
                        <a href="./<?php echo $project["link"]; ?>">
                            <div class="card" style="background:transparent;">
                                <img class="card-img-top" src="./../projects/<?php echo $project["link"] ?>/images/<?php echo $project["img"]; ?>" alt="<?php echo $project["name"]; ?>">
                                <button type="submit" class="btn tat-btn-dark btn-block"><?php echo $project["name"]; ?></button>
                            </div>
                        </a>
                    <?}?>
                </div>
            <?}?>
        </div>
        <form action="./../"><button type="submit" class="homebutton btn btn-dark fas fa-home fa-3x"></button></form>
        <form action="./../update_db/create_item.php"><button type="submit" class="add_button btn btn-dark fas fa-edit fa-3x"></button></form>

        <script src="./../particles.js"></script>
        <script src="./../js/app.js"></script>
        <script src="./../js/bootstrap.js"></script>
        <script src="./../js/bootstrap.bundle.js"></script>
    </body>
</html>
<?$conn->close()?>
