<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
</head>
<body>
	<h1>Hola WordPress</h1>
	<h2>bloginfo()</h2>
	<p>
		Nombre:
		<mark><?php bloginfo('name'); ?></mark>
	</p>
	<p>
		Descripción:
		<mark><?php bloginfo('description'); ?></mark>
	</p>
	<p>
		URL HOME:
		<mark><?php bloginfo('home'); ?></mark>
	</p>
	<p>
		URL Hoja de Estilos:
		<mark><?php bloginfo('stylesheet_url'); ?></mark>
	</p>
	<p>
		URL del Tema:
		<mark><?php bloginfo('template_url'); ?></mark>
	</p>
	<p>
		Idioma:
		<mark><?php bloginfo('language'); ?></mark>
	</p>
	<p>
		Juego de carcteres:
		<mark><?php bloginfo('charset'); ?></mark>
	</p>
	<img src="<?php bloginfo('template_url'); ?>/img/huella.png">
</body>
</html>