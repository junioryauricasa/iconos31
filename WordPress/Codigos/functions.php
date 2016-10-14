<?php 
function guauguau_setup() {
	add_theme_support('post-thumbnails');

	$locations = array(
		'main_nav' => 'Navegación Principal',
		'social_nav' => 'Navegación Redes Sociales'
	);

	register_nav_menus( $locations );
}

add_action('after_setup_theme', 'guauguau_setup');


add_filter('excerpt_more', function () {
	return '&nbsp;<a href="' . get_permalink() . '">leer más...</a>';
});

add_filter('excerpt_length', function () {
	return 20;
});

add_action('wp_enqueue_scripts', function () {
	wp_register_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css');
	wp_enqueue_style('font-awesome');

	wp_register_style('my-styles', get_template_directory_uri() . '/style.css');
	wp_enqueue_style('my-styles');

	wp_enqueue_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js');

});