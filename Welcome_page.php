<?php
session_start();
function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
        ');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}
console_log("Logging in !");
console_log($_SESSION);

if(!isset($_SESSION["sess_user"])){
    header("location:/lab1_regitration/login.html");
} else {
    ?>
    <!doctype html>
    <html lang="en">
    <head>
        <title>Welcome</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"/>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    </head>
    <header class="text-center">

        <h2>Welcome <?=$_SESSION['sess_user'];?>! , <a href="/lab1_registration/logout.php">Logout</a></h2>
    </header>
    </html>
    <?php
}
?>