<?php 
get_header();
print('
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		category.php es la plantilla para mostrar contenido de categorías de WordPress
	</p>
');
get_template_part('content');
get_sidebar();
get_footer();