	</section>
	<footer class="flex-container b-dark">
		<div class="flex-none  m-auto">
			<?php 
				wp_pagenavi();

				$args = array(
					'theme_location' => 'social_nav',
					'container' => 'nav',
					'container_class' => 'social-nav'
				);

				wp_nav_menu( $args );
			?>
		</div>
	</footer>
	<?php wp_footer(); ?>
</body>
</html>