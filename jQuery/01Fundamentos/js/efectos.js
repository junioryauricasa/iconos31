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

		$('#boton12').click(function () {
			$('#contenido').html('<i>El contenido ha sido cambiado</i>');
		});

		$('#boton13').click(function () {
			$('#contenido').text('<i>El contenido ha sido cambiado</i>');
		});

		$('#boton14').click(function () {
			$('#contenido').prepend('<b>Contenido agregado antes</b><img src="http://bextlan.com/img/bextlan-logo.png"> ');
		});

		$('#boton15').click(function () {
			$('#contenido').append(' <b>Contenido agregado después</b> <input type="text">');
		});

		$('#boton16').click(function () {
			$('#contenido').before('<div class="antes">Contenido agregado antes del selector</div>');
			$('.antes').css('background-color', '#FF5700');
			$(this).off('click');
		});

		$('#boton17').click(function () {
			$('#contenido').after('<div class="despues">Contenido agregado después del selector</div>');
			$('.despues').css('background-color', '#205081');
		});

		$('#enlace').on({
			click : function (evento) {
				evento.preventDefault();
				alert('Se ha prevenido la acción por defecto del enlace');
			},
			mouseover : function () {
				//$('span').addClass('mas-grande');
				$('span').toggleClass('mas-grande');
			},
			mouseout : function () {
				//$('span').removeClass('mas-grande');
				$('span').toggleClass('mas-grande');
			}
		});

		$('#boton18').click(function () {
			/*
			$('#oculto').hide(2000);
			alert('El párrafo se ha ocultado');
			*/

			//función callback
			$('#oculto').hide(2000, function () {
				alert('El párrafo se ha ocultado');	
			});
		});
		
		$('#boton19').click(function () {
			//$('#ajax').load('./otro.html');
			$('#ajax').load('./otro.html #videos');
		});
		
		$('#boton20').click(function () {
			$('#ajax').load('./otro.html', function () {
				$(this)
					.css({display:'none'})
					.fadeIn(2000);
			});
		});

		$('#ajax').css({width:2000});

		$('#nombre').focus(function () {
			$('#saludo').text('¿Cómo te llamas?');
		});

		$('#nombre').blur(function () {
			$('#saludo').text( 'Hola ' + $('#nombre').val() );
			$('#nombre').val(null);
		});

		$('#subir').click(function () {
			$('body').animate({
				scrollTop : 0,
				scrollLeft : 0
			}, 1000);
		});
	}//cierra efectos

	function muevete(e) {
		//console.log(e);
		//console.log(e.keyCode);

		switch (e.keyCode) {
			case 37 : {
				e.preventDefault();
				$('#pacman').animate({left:'-=2rem'}, 'swing');
				break;
			}

			case 38 : {
				e.preventDefault();
				$('#pacman').animate({top : '-=2rem'}, 'swing');
				break;
			}

			case 39 : {
				e.preventDefault();
				$('#pacman').animate({left:'+=2rem'}, 'swing');
				break;
			}

			case 40 : {
				e.preventDefault();
				$('#pacman').animate({top : '+=2rem'}, 'swing');
				break;
			}
		}//cierra switch
	}//cierra muevete

	function detectarScroll () {
		var scrollVertical = $(window).scrollTop(),
			scrollHorizontal = $(window).scrollLeft();

		//console.log( scrollVertical, scrollHorizontal );

		return (scrollVertical > 100)
			? $('#subir').fadeIn()
			: $('#subir').fadeOut();
	}

	function webPerformanceOptimization () {
		var anchoPantalla = $(window).innerWidth(),
			altoPantalla = $(window).innerHeight(),
			contenidoDesktop = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLvq-jIkSeTUYvLDfVUXOhnZ6QSouIfQQ7" frameborder="0" allowfullscreen></iframe>',
			contenidoMobile = '<a href="https://www.youtube.com/playlist?list=PLvq-jIkSeTUYvLDfVUXOhnZ6QSouIfQQ7" target="_blank">Ver en youtube</a>';

		//console.log( anchoPantalla, altoPantalla );

		return (anchoPantalla <= 1024)
			? $('#wpo').html(contenidoMobile)
			: $('#wpo').html(contenidoDesktop);
	}

	$(document).ready(efectos);
	$(document).keydown(muevete);

	//$(window).scroll(detectarScroll);
	$(window).on({
		scroll : detectarScroll,
		resize : webPerformanceOptimization,
		load : webPerformanceOptimization
	});
})(jQuery);