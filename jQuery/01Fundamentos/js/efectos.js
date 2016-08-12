(function ($) {
	'use strict';

	/*
		jQuery('selector') o $('selector')
		Tipos de selectores
			Objetos JS
			Etiquetas HTML
			Id CSS
			Clases CSS
			Pseudo clases CSS
			Pseudo selectores CSS
	*/

	function efectos() {
		//alert('Invocando jQuery :)');
		
		/*
			document.querySelector('p').onclick = function () {
				this.style.display = 'none';
			}
		*/

		$('p').click(function () {
			$(this).hide();
		});

		$('#boton1').click(function () {
			$('p').show();
		});

		$('p').css('background-color', 'yellow');

		$('p').css({
			color : 'green',
			padding : '.5rem',
			fontSize : '1.5rem',
			'box-shadow' : '.1rem .1rem .5rem rgba(0,0,0,.5) inset',
			'border-radius' : '.5rem',
			textShadow : '.3rem .3rem .5rem rgba(255,0,0,.5)'
		});

		$('#boton2').click(function () {
			$('p').hide('swing'); /* fast, slow y swing */
		});

		$('#boton3').click(function () {
			$('p').show(2000);
		});
	}

	$(document).ready(efectos);
})(jQuery);