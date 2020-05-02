<?php
    // $conn = new mysqli("localhost", "tatiakqf_admin", "Gottobe$&@me", "tatiakqf_tatiame");
    $conn = new mysqli("localhost", "root", "", "tatiame");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $github_url = $conn->query("SELECT `link` FROM `urls` WHERE urls.name = 'github' LIMIT 1")->fetch_assoc()["link"];
    $linkedin_url = $conn->query("SELECT `link` FROM `urls` WHERE urls.name = 'linkedin' LIMIT 1")->fetch_assoc()["link"];
    $instagram_url = $conn->query("SELECT `link` FROM `urls` WHERE urls.name = 'instagram' LIMIT 1")->fetch_assoc()["link"];
    $discord_url = $conn->query("SELECT `link` FROM `urls` WHERE urls.name = 'discord' LIMIT 1")->fetch_assoc()["link"];
    $spotify_url = $conn->query("SELECT `link` FROM `urls` WHERE urls.name = 'spotify' LIMIT 1")->fetch_assoc()["link"];
    $conn->close();
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>tatia.me</title>
        <meta charset="utf-8">
        <script src="./js/jquery.min.js"></script>
        <link rel="stylesheet" href="./css/bootstrap.min.css">
        <script src="./js/popper.min.js"></script>
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./css/main.css">
        <script src="./js/font_kit.js"></script>
    </head>

    <body>
        <div id="particles-js" class="position-fixed"></div>
        <div class="position-absolute d-flex justify-content-center align-items-center tat-main_container">
            <div class="row justify-content-center" style="width:50%;">
                <div class="card align-items-center tat_profile_card">
                    <img class="card-img-top tat_card_img" src="images/pfp.png" alt="Card image">
                    <div class="card-body">
                        <div class="container">
                            <div class="row justify-content-center"><h4 class="card-title tat_contrast_text tat_large_font"><b>Rishabh Tatia</b></h4></div>
                            <div class="row justify-content-center"><p class="card-text tat_contrast_text"><b>TAMU '22</b></p></div>
                            <div class="row justify-content-center"><p class="card-text tat_contrast_text">CS Engineer</p></div>

                            <div class="row justify-content-center align-items-center">
                                <div class="d-flex">
                                    <a href="<?php echo $github_url; ?>" class="badge badge-secondary tat_contrast_text">GitHub</a>
                                    <a href="<?php echo $linkedin_url; ?>" class="badge badge-info badge-linkedin tat_contrast_text">LinkedIn</a>
                                </div>
                            </div>

                            <div class="row justify-content-center align-items-center">
                                <div class="d-flex justify-content-center">
                                    <a href="<?php echo $instagram_url; ?>"><i class="fab fa-instagram fa-3x tat-icon"></i></a>
                                    <a href="<?php echo $discord_url; ?>"><i class="fab fa-discord fa-3x tat-icon"></i></a>
                                    <a href="<?php echo $spotify_url; ?>"><i class="fab fa-spotify fa-3x tat-icon"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card tat-card_body">
                    <div class="card-body justify-content-center">
                        <div class="d-flex flex-column text-center">
                            <row><form action="./projects"><button type="submit" class="btn tat-btn-dark btn-block tat-btn-grad">Projects</button></form></row>
                            <row><form action="./games"><button type="submit" class="btn tat-btn-dark btn-block tat-btn-grad">Games</button></form></row>
                            <row><form action="./simulations"><button type="submit" class="btn tat-btn-dark btn-block tat-btn-grad">Simulations</button></form></row>
                            <row><form action="./coding_problems"><button type="submit" class="btn tat-btn-dark btn-block tat-btn-grad">Coding Problems</button></form></row>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <form action="#"><button type="submit" class="homebutton btn btn-dark fas fa-home"></button></form>
        <form action="./update_db/create_item.php"><button type="submit" class="add_button btn btn-dark fas fa-edit"></button></form>
        <script src="particles.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>
