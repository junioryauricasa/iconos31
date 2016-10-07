<?php 
get_header();
print('
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		author.php es la plantilla para mostrar contenido del autor de la publicación en WordPress
	</p>
');
get_template_part('content');
get_sidebar();
get_footer();