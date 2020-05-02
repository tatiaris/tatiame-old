<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>tatia.me | sorting algorithms</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="buttons_container">
            <button type="button" onclick="create_empty_bars();" name="button">reset</button>
            <button type="button" onclick="insertion_sort();" name="button">insertion sort</button>
            <button type="button" onclick="bubble_sort();" name="button">bubble sort</button>
        </div>
        <div class="stats_container">

        </div>
        <div class="main_container">
            <div onload="create_empty_bars();" id="array_container" class="array_container"></div>
        </div>
    </body>
    <script src="main.js"></script>
</html>
