<form class="login-container" action="index.php" method="post">
    <?if (isset($_POST["username"])){?>
        <input id="username" name="username" type="text" value="<?echo $_POST['username'];?>" placeholder="username">
    <?}else{?>
        <input id="username" name="username" type="text" placeholder="username">
    <?}?>
    <input id="password" name="password" type="password" placeholder="password">
    <button id="login_btn" type="submit" name="button">SUBMIT</button>
</form>
