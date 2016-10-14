<?php 
/*
Template name: página sin sidebar
*/
get_header();
print('
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		page-sin-sidebar.php es una plantilla personalizada para mostrar contenido de páginas de WordPress
	</p>
');
get_template_part('content');
get_sidebar();
get_footer();