	</section>
	<footer class="flex-container  b-light-gray">
		<div class="footer  flex-auto  sm-w100  b-dark-gray  border">
			<?php 
				wp_pagenavi();

				$args = array(
					'theme_location' => 'social_nav',
					'container' => 'nav'
				);

				wp_nav_menu( $args );

				dynamic_sidebar(2);
			?>
		</div>
	</footer>
	<?php wp_footer(); ?>
</body>
</html>