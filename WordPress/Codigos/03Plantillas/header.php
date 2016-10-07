<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	<?php wp_head(); ?>
</head>
<body>
	<header class="flex-container  b-light-gray">
		<h1 class="logo  flex-auto  sm-w100  lg-w20  b-dark-gray  border">
			<a href="<?php bloginfo('home'); ?>">Logo</a>
		</h1>
		<nav class="menu  flex-auto  sm-w100  lg-w80  b-dark-gray  border">Menú</nav>
	</header>
	<section class="flex-container  b-light-gray">