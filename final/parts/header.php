<header>
  <nav>
    <?php if (isset($_SESSION['user_login'])) : ?>
    <a href="index.php">Главная</a>
    <a href="movies.php">Фильмы</a>
    <?php else : ?>
    <a href="signin.php">Авторизироваться</a>
    <a href="signгз.php">Зарегистрироваться</a>
<?php endif; ?>
  </nav>
</header>