<?php
    $class_name = $_POST["class_name"];
    $num_p_vars = $_POST["num_p_vars"];
    $num_funcs = $_POST["num_funcs"];
    $all_imports = explode(" ", $_POST["imports"]);

    $tab = "    ";
    $h_file = "#ifndef " . strtoupper($class_name) . "_H\n";
    $h_file .= "#define " . strtoupper($class_name) . "_H\n\n";
    foreach ($all_imports as $import) {
        $h_file .= "#include <$import>\n";
    }
    $h_file .= "\nusing namespace std;\n\n";
    $h_file .= "class $class_name {\n";
    $h_file .= "private:\n";
    for ($i = 1; $i < $num_p_vars + 1; $i++) {
        $t1 = "var_".$i."_type";
        $t2 = "var_".$i."_name";
        $var_type = $_POST[$t1];
        $var_name = $_POST[$t2];
        $h_file .= "$tab$var_type $var_name;\n";
    }
    $h_file .= "\npublic:\n";
    $h_file .= "$tab$class_name(";
    for ($i = 1; $i < $num_p_vars + 1; $i++) {
        $h_file .= $_POST["var_".$i."_type"] . " " . $_POST["var_".$i."_name"];
        if ($i < $num_p_vars) $h_file .= ", ";
    }
    $h_file .= ");\n\n";

    for ($i = 1; $i < $num_p_vars + 1; $i++) {
        $h_file .= $tab . "void set" . ucfirst($_POST["var_".$i."_name"]) . " (" . $_POST["var_".$i."_type"] . " " . $_POST["var_".$i."_name"] . ");\n";
        $h_file .= $tab .  "const " . $_POST["var_".$i."_type"] . " " . "get" . ucfirst($_POST["var_".$i."_name"]) . "() const;\n\n";
    }

    for ($i = 1; $i < $num_funcs + 1; $i++) {
        $h_file .= $tab . $_POST["func_".$i."_return_type"] . " " . $_POST["func_".$i."_name"] . " (" . $_POST["func_".$i."_params"] . ");\n";
    }
    $h_file .= "};\n\n";
    $h_file .= "ostream& operator<<(ostream& os, const $class_name& " . strtolower($class_name) . ");";
    $h_file .= "\n\n#endif";

    $cpp_file = "";
    foreach ($all_imports as $import) {
        $cpp_file .= "#include <$import>\n";
    }
    $cpp_file .= "#include \"$class_name.h\"\n\n";
    $cpp_file .= "using namespace std;\n\n";
    $cpp_file .= "$class_name::$class_name(";
    for ($i = 1; $i < $num_p_vars + 1; $i++) {
        $cpp_file .= $_POST["var_".$i."_type"] . " " . $_POST["var_".$i."_name"];
        if ($i < $num_p_vars) $cpp_file .= ", ";
    }
    $cpp_file .= ") : \n";
    for ($i = 1; $i < $num_p_vars + 1; $i++) {
        $cpp_file .= $_POST["var_".$i."_name"] . "(" . $_POST["var_".$i."_name"] . ")";
        if ($i < $num_p_vars) $cpp_file .= ", ";
    }
    $cpp_file .= "{}\n\n";

    for ($i = 1; $i < $num_p_vars + 1; $i++) {
        $cpp_file .= "void $class_name::set" . ucfirst($_POST["var_".$i."_name"]) . " (" . $_POST["var_".$i."_type"] . " " . $_POST["var_".$i."_name"] . "){this->" . $_POST["var_".$i."_name"] . " = " . $_POST["var_".$i."_name"] . ";}\n";
        $cpp_file .= "const " . $_POST["var_".$i."_type"] . " " . "$class_name::get" . ucfirst($_POST["var_".$i."_name"]) . "() const {return " . $_POST["var_".$i."_name"] . ";}\n\n";
    }
    for ($i = 1; $i < $num_funcs + 1; $i++) {
        $cpp_file .= $_POST["func_".$i."_return_type"] . " " . $_POST["func_".$i."_name"] . " (" . $_POST["func_".$i."_params"] . "){\n";
        $cpp_file .= $tab . "return null;\n}\n";
    }

    $cpp_file .= "\nostream& operator<<(ostream& os, const $class_name& " . strtolower($class_name) . ") {\n";
    $cpp_file .= $tab . "os << \"$class_name\" << endl;\n";
    $cpp_file .= $tab . "return os;\n}";
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>tatia.me | <?php echo strtolower($class_name); ?> files</title>
        <meta charset="utf-8">
        <script src="./../../js/jquery.min.js"></script>
        <link rel="stylesheet" href="./../../css/bootstrap.min.css">
        <script src="./../../js/popper.min.js"></script>
        <link rel="stylesheet" href="./../../css/style.css">
        <link rel="stylesheet" href="./../../css/main.css">
        <script src="./../../js/font_kit.js"></script>
    </head>

    <body>
        <div id="particles-js" class="position-fixed d-flex align-items-center justify-content-center">
            <div class="container position-fixed" style="display: flex;justify-content: center;">
                <div class="code-container" style="max-width: 50%; margin-right:1%;">
                    <button class="btn btn-block" style="background-color:#00897bd6;justify-content:center;display:flex;">
                        <span style="margin-right:10%;"><?php echo $class_name; ?>.h</span>
                        <span style="margin-left:10%;float:right;">C++</span>
                    </button>
                    <?
                        $url = 'http://hilite.me/api';
                        $data = array('code' => $h_file, 'lexer' => 'c++', 'options' => '', 'style' => 'fruity', 'lineons' => '', 'divstyles' => 'max-height:80vh;max-width:40vw;overflow:scroll;font-size:large;border:none;background-color:#21212182;');

                        $options = array(
                            'http' => array(
                                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                                'method'  => 'POST',
                                'content' => http_build_query($data)
                            )
                        );
                        $context  = stream_context_create($options);
                        $result = file_get_contents($url, false, $context);
                        if ($result === False) {echo "could not load code.";}

                        echo $result;
                    ?>
                </div>
                <div class="code-container" style="max-width: 50%; margin-left:1%;">
                    <button class="btn btn-block" style="background-color:#00897bd6;justify-content:center;display:flex;">
                        <span style="margin-right:10%;"><?php echo $class_name; ?>.cpp</span>
                        <span style="margin-left:10%;float:right;">C++</span>
                    </button>
                    <?
                        $url = 'http://hilite.me/api';
                        $data = array('code' => $cpp_file, 'lexer' => 'c++', 'options' => '', 'style' => 'fruity', 'lineons' => '', 'divstyles' => 'max-height:80vh;max-width:40vw;overflow:scroll;font-size:large;border:none;background-color:#21212182;');

                        $options = array(
                            'http' => array(
                                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                                'method'  => 'POST',
                                'content' => http_build_query($data)
                            )
                        );
                        $context  = stream_context_create($options);
                        $result = file_get_contents($url, false, $context);
                        if ($result === False) {echo "could not load code.";}

                        echo $result;
                    ?>
                </div>
            </div>
        </div>

        <form action="./../../"><button type="submit" class="homebutton btn btn-dark fas fa-home fa-3x"></button></form>

        <script src="./../../particles.js"></script>
        <script src="./../../js/app.js"></script>
    </body>
</html>
