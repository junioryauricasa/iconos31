/*
	Para versionar
		http://semver.org/
	
	jquery.one-page-scroll.js v1.0.0
*/
(function ($) {
	'use strict';

	$.fn.extend({
		onePageScroll : function (opciones) {
			var predeterminadas = {},
				opc = $.extend(predeterminadas, opciones);

			function inicializar() {
				//alert('funciona');
			}

			return $(this).each(inicializar);
		}
	});
})(jQuery);