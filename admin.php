<?php

if (isset($_SESSION['user_login'])) {
  echo $_SESSION['user_login'] . 'Добро пожаловать admin!';
  echo '<br>';
  echo 'Вы посещали эту страницу: ' . $_COOKIE['page_visit'] . ' раз';

  echo '<a href="logout.php">Exit</a>';
} else {
  die("Acces denied on the page");
}
