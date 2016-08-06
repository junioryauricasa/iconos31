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
			<h2><?php echo 'Hola ' . $_SESSION['name']; ?></h2>
		</div>
		<nav class="item  i-b  v-middle  ph12  lg10  lg-right">
			<ul class="container">
				<li class="nobullet  item  block  lg-inline"><a href="./">Inicio</a></li>
				<li class="nobullet  item  block  lg-inline"><a href="movieseries">MovieSeries</a></li>
				<li class="nobullet  item  block  lg-inline"><a href="users">Usuarios</a></li>
				<li class="nobullet  item  block  lg-inline"><a href="status">Status</a></li>
				<li class="nobullet  item  block  lg-inline"><a href="salir">Salir</a></li>
			</ul>
		</nav>
	</header>
	<main class="container center main">