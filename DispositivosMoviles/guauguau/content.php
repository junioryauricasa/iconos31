<?php 
print('<main class="flex-none  m-auto  sm-w100  lg-w80">');
	if ( is_search() ):
		printf('
			<p class="message-query">
				Los resultado para la búsqueda <mark>%s</mark> son:
			</p>
		', get_search_query() );
	endif;

	if ( is_404() ):
		print('
			<p class="message-404">
				ERROR 404:<br>RECURSO NO ENCONTRADO
			</p>
		');
	endif;

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
					<section class="post-content">
						<article class="the-content">
							<h2>%s</h2>
							<div>%s</div>
						</article>
						<aside>
							<p>
								<span class="post-date">%s</span>
								 <span class="post-time">%s</span>
							</p>
							<p class="post-categories">%s</p>
							<p class="post-tags">%s</p>
							<p class="post-author">
								<a href="%s">%s</a>
							</p>
						</aside>
					</section>
				';

				printf(
					$html,
					get_the_title(),
					get_the_content(),
					get_the_date(),
					get_the_time(),
					get_the_category_list(' - '),
					get_the_tag_list('', ', ', ''),
					get_author_posts_url( get_the_author_id() ),
					get_the_author()
				);
			endif;

			if ( is_single() ):
				comments_template();
			endif;
		endwhile;
	else:
		print('
			<article class="sm-w100  lg-w70  m-auto  error">
				<p>No hay publicaciones que mostrar</p>
				<p class="carita">:\'(</p>
			</article>
		');
	endif;	
print('</main>');