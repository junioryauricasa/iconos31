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
	<header class="flex-container  b-light-gray">
		<h1 class="logo  flex-auto  sm-w100  lg-w20  b-dark-gray  border">Logo</h1>
		<nav class="menu  flex-auto  sm-w100  lg-w80  b-dark-gray  border">Menú</nav>
	</header>
	<section class="flex-container  b-light-gray">
		<main class="main  flex-auto  sm-w100  lg-w70  b-dark-gray  border">
			Contenido Principal	
		</main>
		<aside class="aside  flex-auto  sm-w100  lg-w30  b-dark-gray  border">
			Contenido Secundario
		</aside>
	</section>
	<footer class="flex-container  b-light-gray">
		<div class="footer  flex-auto  sm-w100  b-dark-gray  border">
			<p>Pié de Página</p>
		</div>
	</footer>
</body>
</html>