(function ($) {
	'use strict';

	function calendario() {
		//alert('funciona');
		if (Modernizr.inputtypes.date) {
			//alert('Tu navegador SI soporta el input date');
		} else {
			//alert('Tu navegador NO soporta el input date');
			var cssUI = '<link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">',
				jsUI = 'https://code.jquery.com/ui/1.12.0/jquery-ui.js';

			//Promesas de JS
			//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promesa
			$.when( $.ready, $.getScript(jsUI) )
				.then(function () {
					//alert('Si cargo jQueryUI');
					$('head').append(cssUI);
					$('#cumple').datepicker();
				})
				.catch(function () {
					alert('No cargo jQueryUI');
				});
		}
	}

	function enviarDatos(e) {
		//alert('funciona');
		e.preventDefault();

		var opcionesAJAX = {
			url : './servidor.php',
			method : 'POST',//GET o POST
			dataType : 'text',//json,xml,html,text,script
			data : $(this).serialize(),
			beforeSend : function () {
				//alert('antes de enviar info');
				$('#precarga').fadeIn('slow');
			},
			error : function () {
				//alert('ocurrió un error');
				$('#precarga').fadeOut('slow', function () {
					$('#mensaje')
						.fadeIn()
						.html('ocurrió un error');
				});
			},
			success : function (data) {
				//alert('éxito, el servidor responde');
				$('#precarga').fadeOut('slow', function () {
					$('#mensaje')
						.fadeIn()
						.html(data);
				});
			}
		};

		$.ajax(opcionesAJAX);
	}

	$(document).ready(calendario);

	$('#contacto').submit(enviarDatos);
})(jQuery);