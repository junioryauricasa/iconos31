/*
	Para versionar
		http://semver.org/
	
	jquery.one-page-scroll.js v1.0.0
*/
(function ($) {
	'use strict';

	$.fn.extend({
		onePageScroll : function (opciones) {
			var predeterminadas = {
				velocidad : 1000
			},
				opc = $.extend(predeterminadas, opciones);

			function inicializar() {
				//alert('funciona');
				function aDondeScroll(e) {
					e.preventDefault();

					var idEnlace = $(this).attr('href'),
						coordsSeccion = $(idEnlace).offset().top;

					console.log(idEnlace, coordsSeccion);

					$('html, body').animate({
						scrollTop : coordsSeccion 
					}, opc.velocidad);
				}

				$(this).click(aDondeScroll);
			}

			return $(this).each(inicializar);
		}
	});
})(jQuery);