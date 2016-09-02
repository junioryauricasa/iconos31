/*!
	Para versionar
		http://semver.org/

	Para minificar
		http://kangax.github.io/html-minifier/
		http://cssminifier.com/
		http://jscompress.com/
	
	jquery.one-page-scroll.js v1.1.0
*/
(function ($) {
	'use strict';

	$.fn.extend({
		onePageScroll : function (opciones) {
			var predeterminadas = {
				velocidad : 1000,
				direccion : 'vertical' //horizontal
			},
				opc = $.extend(predeterminadas, opciones);

			function inicializar() {
				//alert('funciona');
				function aDondeScroll(e) {
					e.preventDefault();

					var idEnlace = $(this).attr('href'),
						coordsSeccion;

					if (opc.direccion == 'vertical') {
						coordsSeccion = $(idEnlace).offset().top;

						$('html, body').animate({
							scrollTop : coordsSeccion 
						}, opc.velocidad);
					} else {
						coordsSeccion = $(idEnlace).offset().left;

						$('html, body').animate({
							scrollLeft : coordsSeccion 
						}, opc.velocidad);
					}

					console.log(idEnlace, coordsSeccion);
				}

				$(this).click(aDondeScroll);
			}

			return $(this).each(inicializar);
		}
	});

	$(document).ready(function () {
		if ( $('.wrapper').attr('data-horizontal') ) {
			var numSecciones = $('.wrapper').children().length,
				anchoWrapper = (numSecciones * 100).toString() + 'vw';

			console.log(numSecciones, anchoWrapper);

			$('.wrapper').css({width: anchoWrapper});

			$('.section').addClass('horizontal');

			$('body').css({overflow:'hidden'});
		} else {
			$('body').css({overflowX:'hidden'});
		}
	});
})(jQuery);