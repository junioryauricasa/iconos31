<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<?php wp_head(); ?>
</head>
<body>
	<header class="header">
		<section class="flex-container">
			<a href="#" class="menu-btn"></a>
			<div class="flex-auto  sm-w100  lg-w20  logo">
				<h1 class="">
					<a href="<?php bloginfo('home'); ?>">Logo</a>
				</h1>
			</div>
			<div class="flex-auto  sm-w100  lg-w80  menu-main">
				<?php 
					$args = array(
						'theme_location' => 'main_nav',
						'container' => 'nav',
						'container_id' => 'main-menu',
						'container_class' => ''
					);

					wp_nav_menu($args);

					get_search_form();
				?>
			</div>
		</section>
	</header>
	<section class="flex-container  b-dark">