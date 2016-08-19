(function ($) {
	'use strict';

	function efectos() {
		$('#jqy').click(function (e) {
			e.preventDefault();
			//alert('jQuery');
			$('#contenido').load('./html/jquery.html');
		});

		$('#jqi').click(function (e) {
			e.preventDefault();
			//alert('jQueryUI');
			$('#contenido').load('./html/jquery-ui.html', function () {
				$(this)
					.css({display:'none'})
					.fadeIn(2000);
			});
		});

		$('#jqm').click(function (e) {
			e.preventDefault();
			//alert('jQueryMobile');
			$('#contenido').fadeOut(2000, function () {
				$(this).load('./html/jquery-mobile.html', function () {
						$(this).fadeIn(2000);
				});
			});
		});

		$('#jqu').click(function (e){
			e.preventDefault();
			$('#contenido').slideUp(2000, function (){
				$(this).load('./html/qunit.html', function (){
					$(this).slideDown(2000);
				});
			});
		});

		$('#jqs').click(function (e){
			e.preventDefault();
			$('#contenido').hide(2000, function (){
				$(this).load('./html/sizzle.html', function (){
					$(this).show(2000);
				});
			});
		});
	}

	$(document).ready(efectos);
})(jQuery);