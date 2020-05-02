<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>tatia.me | c++ template</title>
        <meta charset="utf-8">
        <script src="./../../js/jquery.min.js"></script>
        <link rel="stylesheet" href="./../../css/bootstrap.min.css">
        <script src="./../../js/popper.min.js"></script>
        <link rel="stylesheet" href="./../../css/style.css">
        <link rel="stylesheet" href="./../../css/main.css">
        <script src="./../../js/font_kit.js"></script>
    </head>

    <body>
        <div id="particles-js" class="position-fixed d-flex justify-content-center align-items-center">
            <div class="container position-fixed" style="display: flex;justify-content: center;">
                <? if (isset($_POST["class_name"]) && isset($_POST["num_p_vars"]) && isset($_POST["num_funcs"])){ ?>
                    <form action="files.php" method="post" enctype="multipart/form-data">
                    <?
                    $class_name = $_POST["class_name"];
                    $num_p_vars = $_POST["num_p_vars"];
                    $num_funcs = $_POST["num_funcs"];
                    ?>
                    <input type="hidden" name="class_name" value="<?php echo $class_name; ?>">
                    <input type="hidden" name="num_p_vars" value="<?php echo $num_p_vars; ?>">
                    <input type="hidden" name="num_funcs" value="<?php echo $num_funcs; ?>">

                    <span class="type-title">Imports</span>
                    <input type="text" class="t_input_txt form-control form-control-lg" placeholder="library names (separated by spaces)" name="imports">

                    <span class="type-title">Variables</span>
                    <?for ($i = 1; $i < $num_p_vars + 1; $i++) {?>
                        <div class="variable-collector" style="width:100%;">
                            <input type="text" class="t_input_txt form-control form-control-lg variable-type" placeholder="type" name="var_<?echo $i;?>_type">
                            <input type="text" class="t_input_txt form-control form-control-lg variable-name" placeholder="name" name="var_<?echo $i;?>_name">
                        </div>
                    <?}?>
                        <span class="type-title">Functions</span>
                    <?for ($i = 1; $i < $num_funcs + 1; $i++) {?>
                        <div class="variable-collector" style="width:100%;">
                            <input type="text" class="t_input_txt form-control form-control-lg variable-type" placeholder="return type" name="func_<?echo $i;?>_return_type">
                            <input type="text" class="t_input_txt form-control form-control-lg variable-name" placeholder="name" name="func_<?echo $i;?>_name">
                            <input type="text" class="t_input_txt form-control form-control-lg" placeholder="parameters (separated by ,)" name="func_<?echo $i;?>_params">
                        </div>
                    <?}?>
                        <input type="submit" id="my_submit" class="t_input_submit form-control-lg" style="margin: 0!important;" value="create class files" name="submit">
                    </form>
                <?} else {?>
                    <form action="index.php" method="post" enctype="multipart/form-data">
                        <input type="text" class="t_input_txt form-control form-control-lg" placeholder="class name" name="class_name">
                        <input type="text" class="t_input_txt form-control form-control-lg" placeholder="num private variables" name="num_p_vars">
                        <input type="text" class="t_input_txt form-control form-control-lg" placeholder="num functions" name="num_funcs">
                        <input type="submit" id="my_submit" class="t_input_submit form-control-lg" style="margin: 0!important;" value="create class" name="submit">
                    </form>
                <?}?>
            </div>
        </div>
        <form action="./../../"><button type="submit" class="homebutton btn btn-dark fas fa-home fa-3x"></button></form>
        <script src="./../../particles.js"></script>
        <script src="./../../js/app.js"></script>
    </body>
</html>
