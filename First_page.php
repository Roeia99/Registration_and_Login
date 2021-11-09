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
console_log($_SESSION);


?>
<!doctype html>
<html lang="en">
<head>
    <title>Welcome, please choose between</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"/>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
</head>
<header class="text-center">
    <h1>Welcome, please choose between:</h1>
    <h2> <a href="/lab1_registration/registration.html">Register</a></h2>
    <h2><a href="/lab1_registration/login.html">Login</a></h2>
</header>
</html>
<?php

?>