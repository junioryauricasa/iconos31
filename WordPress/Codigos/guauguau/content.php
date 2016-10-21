<?php 
print('<main class="flex-none  m-auto  sm-w100  lg-w80">');
	if( have_posts() ):
		while( have_posts() ):
			the_post();
			
			if ( is_home()  || is_category()  || is_tag()  || is_search() ):
				$html = '
					<article class="sm-w100  lg-w70  post-info">
						<a href="%s" class="post-link">
							<h2>%s</h2>
							<div>%s</div>
							<p>%s</p>
						</a>
					</article>
				';

				printf(
					$html,
					get_the_permalink(),
					get_the_title(),
					get_the_post_thumbnail($post_id, 'thumbnail'),   //thumbnail, medium, large, full
					get_the_excerpt()
				);
			endif;

			if ( is_single() || is_page() ):
				$html = '
					<article class="post-info">
						<h2>%s</h2>
						<div>%s</div>
						<a href="%s">Ver publicación</a>
						<p>%s -- %s</p>
						<p>%s</p>
						<p class="">%s</p>
						<p>%s</p>
						<p>
							<a href="%s">%s</a>
						</p>
					</article>
				';

				printf(
					$html,
					get_the_title(),
					get_the_post_thumbnail($post_id, 'thumbnail'),   //thumbnail, medium, large, full
					get_the_permalink(),
					get_the_date(),
					get_the_time(),
					get_the_excerpt(),
					get_the_category_list(' - '),
					get_the_tag_list('<i>', ', ', '</i>'),
					get_author_posts_url( get_the_author_id() ),
					get_the_author()
				);

				printf(
					'<div class="">%s</div>',
					get_the_content()
				);
			endif;

			if ( is_single() ):
				comments_template();
			endif;
		endwhile;
	else:
		//no posts
		print('<p class="error">No hay publicaciones</p>');
	endif;	
print('</main>');