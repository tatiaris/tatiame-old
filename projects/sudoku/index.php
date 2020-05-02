<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Sudoku Solver</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container center">
            <h1>Sudoku Solver</h1>
        </div>
        <div class="center">
            <div class="grid_container">
                <?for ($i = 1; $i < 10; $i++) {?>
                    <div class="row center">
                    <?for ($j = 1; $j < 10; $j++) {?>
                        <div class="cell" id="<? echo "cell_$i$j"; ?>">
                            <label class="hint" id="<? echo "hint_$i$j"; ?>"></label>
                            <input oninput="update_grid(<? echo "$i, $j"; ?>)" id="<? echo "inp_$i$j"; ?>" type="number" min="1" max="9">
                        </div>
                    <?}?>
                    </div>
                <?}?>
            </div>
        </div>
        <div class="container center">
            <button type="button" name="button" onclick="solve_sudoku()">Submit</button>
        </div>
        <script src="main.js"></script>
    </body>
</html>
