<?php 
get_header();
print('
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		index.php es la plantilla principal de WordPress
	</p>
');
get_template_part('content');
get_sidebar();
get_footer();