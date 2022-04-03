<?php
session_start();
session_unset();
if (isset($_COOKIE[session_name()])) {
  setcookie(session_name(), '', time() - 3600);
}
session_destroy();
header('Location: ../../index.php');
exit; //Le placer toujours après un header('Location: ....)
