<?php
    session_start();
    session_unset();
    session_destroy(); 
    header('Location: ../../accueil.php');
    exit; //Le placer toujours après un header('Location: ....)
?>