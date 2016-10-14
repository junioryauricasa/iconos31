<?php 
get_header();
print('
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		page-el-perro.php es la plantilla para mostrar contenido de la página "El Perro" de WordPress
	</p>
');
get_template_part('content');
get_sidebar();
get_footer();