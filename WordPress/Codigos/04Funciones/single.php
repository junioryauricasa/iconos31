<?php 
get_header();
print('
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		single.php es la plantilla para mostrar contenido de entradas de WordPress
	</p>
');
get_template_part('content');
get_sidebar();
comments_template();
get_footer();