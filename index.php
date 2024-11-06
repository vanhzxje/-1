<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
session_cache_expire(1);
header('Vary: Accept');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="vuongvietanh, vanhzxje, kizakisato, vanhcutii">
    <meta name="author" content="VanhZxje">
    <title>I Love Kizakisato</title>
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://i.pinimg.com/originals/8e/e9/4c/8ee94c23c52dec4c8e03d0fe18668e26.jpg">
    <link rel="icon" href="images/icon.ico?<?=bin2hex(random_bytes(5));?>">
    <link rel="stylesheet" href="css/style.css?<?=bin2hex(random_bytes(5));?>">
</head>

<body>
   <div class="banner"></div>
   <div class="nen"></div>
    <script src="js/music.js?<?=bin2hex(random_bytes(5));?>"></script>
    <script src="js/sakura.js?<?=bin2hex(random_bytes(5));?>"></script>
</body>

</html>
