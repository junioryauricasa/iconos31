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

		$('#boton4').click(function () {
			$('p').toggle();
		});

		$('#boton5').click(function () {
			$('p').toggle('swing');
		});

		$('.mostrar').click(function () {
			$('.capa').slideDown(1500);
		});

		$('.ocultar').click(function () {
			$('.capa').slideUp('fast');
		});

		$('.cambiar').click(function () {
			$('.capa').slideToggle();
		});

		$('#boton6').click(function () {
			$('#cuadro').fadeTo(3000, .25);
		});

		$('#boton7').click(function () {
			$('#cuadro').fadeTo('slow', 1);
		});

		$('#boton8').click(function () {
			$('#cuadro').fadeOut(2000);
		});

		$('#boton9').click(function () {
			$('#cuadro').fadeIn(2000);
		});

		$('#parpadea').click(function () {
			$('#cuadro').fadeOut().fadeIn();
			/*
				setInterval(function (){
					$('#cuadro').fadeOut().fadeIn();
				}, 1000);
			*/
		});

		$('#boton10').click(function () {
			$('#animable')
				.animate({width:300}, 'slow')
				.animate({height:300}, 800)
				.animate({
					height : 100, 
					width : 100
				}, 3000);
		});

		$('#boton11').click(function () {
			$('#animable')
				.animate({left:'50%'}, 'swing')
				.animate({width:400}, 1000)
				.animate({'font-size' : '3rem'}, 'fast')
				.animate({fontSize : '2rem'}, 'slow')
				.animate({top : -100}, 1200)
				//http://plugins.jquery.com/color/
				.animate({backgroundColor : '#123456'}, 500)
				.animate({color : 'red'}, 'swing')
				.animate({
					'font-size' : '1rem',
					left : 0,
					top : 0,
					width : 100,
					backgroundColor : '#FF5700',
					color : 'black'
				}, 5000);
		});

		/*
			antes .before();
			<selector>
				antes .prepend();
				CONTENIDO .html(); .text();
				después .append();
			</selector>
			después .after();
		*/
	}

	$(document).ready(efectos);
})(jQuery);