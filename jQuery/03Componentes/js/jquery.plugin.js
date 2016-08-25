(function ($) {
	'use strict';

	//jQuery le hereda todas sus características al nuevo objeto
	$.fn.extend({
		//Nombre del componente
		plugin : function (opciones) {
			//Opciones por defecto del componente
			var predeterminadas = {
				fondo : 'orangered',
				colorLetra : 'navy',
				letra : '200%'
			},
				//$.extend() nos permite extender las opciones predeterminadas del plugin con las que posiblemente mande el usuario
				opc = $.extend(predeterminadas, opciones);

			//Función constructora del componente donde irá toda la programación del mismo
			function inicializar() {
				alert('funciona mi plugin');
			}

			//Por cada elemento que invoque el componente, se debe ejecutar una vez la función constructora
			return $(this).each(inicializar);
		}
	});
})(jQuery)