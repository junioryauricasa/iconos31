<!DOCTYPE html>
<html lang="es">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-8">
	<title>Mexflix</title>
	<link rel="shortcut icon" type="image/png" href="./public/img/favicon.png">
	<link rel="stylesheet" href="./public/css/responsimple.min.css">
	<link rel="stylesheet" href="./public/css/mexflix.css">
</head>
<body>
	<header class="container center header">
		<div class="item  i-b  v-middle  ph12  lg2">
			<h1 class="logo">Mexflix</h1>
		</div>
		<nav class="item  i-b  v-middle  ph12  lg10  lg-right">
			<ul class="container">
				<li class="nobullet  item  block  lg-inline"><a href="./">Inicio</a></li>
				<li class="nobullet  item  block  lg-inline"><a href="movieseries">MovieSeries</a></li>
				<li class="nobullet  item  block  lg-inline"><a href="usuarios">Usuarios</a></li>
				<li class="nobullet  item  block  lg-inline"><a href="status">Status</a></li>
				<li class="nobullet  item  block  lg-inline"><a href="salir">Salir</a></li>
			</ul>
		</nav>
	</header>
	<main class="container center main">
		<p class="item">
			Aquí trabajaremos
			<?php
				require_once('./controllers/Autoload.php');
				$autoload = new Autoload();
				
				$status = new StatusModel();
				var_dump($status->get());
			?>
		</p>
	</main>
	<script src="./public/js/mexflix.js"></script>
</body>
</html>