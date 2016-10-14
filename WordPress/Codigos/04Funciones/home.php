<?php 
get_header();
print('
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		home.php es la plantilla de la página frontal de WordPress
	</p>
');
get_template_part('content');
get_sidebar();
get_footer();