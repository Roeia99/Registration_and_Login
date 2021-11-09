<?php
session_start();
unset($_SESSION['sess_user']);
session_destroy();
header("location: /Registration_and_Login/First_page.php");
