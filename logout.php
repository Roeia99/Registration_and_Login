<?php
session_start();
unset($_SESSION['sess_user']);
session_destroy();
header("location: /lab1_registration/First_page.php");
