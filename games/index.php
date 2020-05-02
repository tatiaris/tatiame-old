<?php
    // $conn = new mysqli("localhost", "tatiakqf_admin", "Gottobe$&@me", "tatiakqf_tatiame");
    $conn = new mysqli("localhost", "root", "", "tatiame");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $all_games = $conn->query("SELECT * FROM `games`");
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>tatia.me | games</title>
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
            <div class="row tat-items_container position-fixed justify-content-center tat-scrollbar">
                <?foreach ($all_games as $key => $game) {?>
                    <a href="./<?php echo $game["link"]; ?>">
                        <div class="card" style="background:transparent;">
                            <img class="card-img-top" src="./../games/<?php echo $game["link"] ?>/images/<?php echo $game["img"]; ?>" alt="<?php echo $game["name"]; ?>">
                            <form action="./<?php echo $game["link"]; ?>"><button type="submit" class="btn btn-dark tat-btn-dark btn-block"><?php echo $game["name"]; ?></button></form>
                        </div>
                    </a>
                <?}?>
            </div>
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
