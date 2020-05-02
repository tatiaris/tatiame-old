<?
$template = $_GET["template"];
$top_text = $_GET["top"];
$bot_text = $_GET["bot"];
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>MemeMaker</title>
        <style media="screen">
            @font-face {
                font-family: myFirstFont;
                src: url(impact.ttf);
            }
            * {
                color: white;
                text-shadow: 4px 2px black;
                font-size: 1.6em;
                text-align: center;
                margin: 0px;
                border: 0px;
                text-transform: uppercase;
                font-family: myFirstFont;
                overflow-wrap: break-word;
            }
            body {
                background-color: black;
                width: 100vw;
                height: 100vh;
            }
            .text-container {
                position: absolute;
                width: 100%;
            }
            .top {
                top: 0px;
            }
            .bottom {
                bottom: 0px;
            }
            .meme-img {
                height: 100%;
            }
            .img-container {
                width: 100%;
                height: 100%;
                position: relative;
            }
        </style>
    </head>
    <body>
        <div class="img-container">
            <img class="meme-img" src="<?echo "./$template.png";?>" alt="">
            <div class="top text-container">
                <?echo $top_text;?>
            </div>
            <div class="bottom text-container">
                <?echo $bot_text;?>
            </div>
        </div>
    </body>
</html>
