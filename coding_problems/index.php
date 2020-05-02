<?php
    // $conn = new mysqli("localhost", "tatiakqf_admin", "Gottobe$&@me", "tatiakqf_tatiame");
    $conn = new mysqli("localhost", "root", "", "tatiame");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $all_pep = $conn->query("SELECT * FROM `project_euler`");
    $all_kp = $conn->query("SELECT * FROM `kattis`");
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <title>tatia.me | coding problems</title>
        <meta charset="utf-8">
        <script src="./../js/jquery.min.js"></script>
        <link rel="stylesheet" href="./../css/bootstrap.min.css">
        <script src="./../js/popper.min.js"></script>
        <link rel="stylesheet" href="./../css/style.css">
        <link rel="stylesheet" href="./../css/main.css">
        <script src="./../js/font_kit.js"></script>
    </head>

    <body>
        <div id="particles-js" class="position-fixed d-flex justify-content-center">
            <div class="container position-fixed d-flex tat_coding_problems_container">
                <div class="list-group" style="max-height:93vh;overflow:scroll;font-size:large;">
                    <a href="https://projecteuler.net" class="list-group-item list-group-item-action">Project Euler</a>
                    <?foreach ($all_pep as $key => $pep) {?>
                        <div class="list-group-item list-group-item-action">
                            <a href="<?php echo $pep["problem_url"]; ?>" class="tat_problem_url"><?php echo $pep["id"] . ". " . $pep["name"]; ?></a>
                            <a href="solution.php?site=pe&p=<?php echo $pep["id"] ?>" class="tat_solution_url">Solution</a>
                        </div>
                    <?}?>
                </div>

                <div class="list-group" style="max-height:93vh;overflow:scroll;font-size:large;">
                    <a href="https://open.kattis.com" class="list-group-item list-group-item-action">Kattis</a>
                    <?foreach ($all_kp as $key => $kp) {?>
                        <div class="list-group-item list-group-item-action">
                            <a href="<?php echo $kp["problem_url"]; ?>" class="tat_problem_url"><?php echo $kp["id"] . ". " . $kp["name"]; ?></a>
                            <a href="solution.php?site=k&p=<?php echo $kp["id"] ?>" class="tat_solution_url">Solution</a>
                        </div>
                    <?}?>
                </div>
            </div>
        </div>
        <form action="./../"><button type="submit" class="homebutton btn btn-dark fas fa-home"></button></form>

        <script src="./../particles.js"></script>
        <script src="./../js/app.js"></script>
    </body>
</html>
<?$conn->close()?>



<!-- function get_problems_solved(){
	solved = document.getElementsByClassName("id_column");
	var sql_cmds = "";
    for (var i = 1; i < solved.length; i++){
        var id = solved[i].innerText;
        var name = solved[i].parentElement.childNodes[1].innerText;
        var problem_url = "https://projecteuler.net/problem=" + id;
		sql_cmds += "INSERT INTO `project_euler`(`id`, `name`, `problem_url`, `solution`) VALUES ('" + id + "','" + name + "','" + problem_url + "','" + id + "');\n";
	}
console.log(sql_cmds);
} -->
