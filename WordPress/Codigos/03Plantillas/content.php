<?php 
print('<main class="main  flex-auto  sm-w100  lg-w70  b-dark-gray  border">');
	if( have_posts() ):
		while( have_posts() ):
			the_post();
			//post info
			//print('<p>Si hay publicaciones</p>');
			//the_title();
			$html = '
				<article class="post">
					<h2>%s</h2>
					<a href="%s">Ver publicación</a>
					<p>%s -- %s</p>
					<p>%s</p>
					<p class="post-categories">%s</p>
					<p>%s</p>
					<p>
						<a href="%s">%s</a>
					</p>
					<div class="the-content">%s</div>
				</article>
				<hr>
			';

			printf(
				$html,
				get_the_title(),
				get_the_permalink(),
				get_the_date(),
				get_the_time(),
				get_the_excerpt(),
				get_the_category_list(' - '),
				get_the_tag_list('<i>', ', ', '</i>'),
				get_author_posts_url( get_the_author_id() ),
				get_the_author(),
				get_the_content()
			);
		endwhile;
	else:
		//no posts
		print('<p class="error">No hay publicaciones</p>');
	endif;	
print('</main>');