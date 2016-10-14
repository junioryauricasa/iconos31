<?php 
get_header();
printf('
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		search.php es la plantilla para búsquedas de WordPress
	</p>
	<p class="flex-auto  sm-w100  b-dark-gray  border  f2">
		Los resultado para la búsqueda <mark>%s</mark> son:
	</p>
', get_search_query() );
get_template_part('content');
get_sidebar();
get_footer();