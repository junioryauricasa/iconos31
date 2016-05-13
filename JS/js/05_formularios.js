(function (d) {
	'use strict';
	var validateInputs = d.querySelectorAll('.validate'),
		expRegName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
		expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	/*
	console.log(
		d.forms,
		d.forms[0],
		d.forms[1]
	);
	*/
	function validateForm(e) {
		var input = e.target;

		/*
		console.log(
			e,
			e.type,
			e.target
		);
		*/

		switch (input.name) {
			case 'nombre':
				if ( !expRegName.exec(input.value) ) {
					alert(input.title + ' no es válido');
					input.focus();
				}
				break;

			case 'email':
				if ( !expRegEmail.exec(input.value) ) {
					alert(input.title + ' no es válido');
					input.focus();
				}
				break

			case 'comentarios':
				if (!input.value) {
					alert(input.title);
					input.focus();
				} else if (input.value.length > 255) {
					alert(input.title + ' exceden el límite de 255 caracteres');
					input.focus();
				}
				break;

			default: 
				if (!input.value) {
					alert(input.title);
					input.focus();
				}
				break;
		}
	}

	function sendForm(e) {
		var form = e.target,
			preload = form.querySelector('.preload'),
			message = form.querySelector('.message');

		/*
		console.log(
			e,
			e.type,
			e.target
		);
		*/

		e.preventDefault();

		preload.classList.remove('hidden');

		setTimeout(function () {
			preload.classList.add('hidden');
			message.classList.remove('hidden');

			setTimeout(function () {
				form.reset();
				message.classList.add('hidden');
			}, 3000);
		}, 3000);
	}

	for (var n = 0; n < validateInputs.length; n++) {
		validateInputs[n].onblur = validateForm;	
	}

	for (var n = 0; n < d.forms.length; n++) {
		d.forms[n].onsubmit = sendForm;
	}

	//d.querySelector('#nombre_id').focus();
})(document);