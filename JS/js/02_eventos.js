function rojo(evento) {
	document.body.style.backgroundColor = 'red';
	document.body.style.color = 'white';
	console.log(evento);
}

(function (d) {
	'use strict';

	var btnVerde = d.querySelector('#verde'),
		btnAzul = d.getElementById('azul'),
		btnReset = d.querySelector('#resetear'),
		btns = d.querySelectorAll('button');

	function verde(e) {
		d.body.style.backgroundColor = 'green';
		d.body.style.color = 'white';
		console.log(e);

		e.target.textContent = 'He pulsado el botón';
		e.target.style.fontSize = '300%';
		e.target.style.backgroundColor = 'black';
		e.target.style.color = 'white';
	}

	function azul(e) {
		var elemento = e.target;

		d.body.style.backgroundColor = 'blue';
		d.body.style.color = 'white';
		console.log(e);

		elemento.style.fontSize = '200%';
		elemento.style.backgroundColor = 'skyblue';
	}


	//Manejador de eventos semántico
	btnVerde.onclick = verde;

	//Manejador de eventos múltiple
	btnAzul.addEventListener('click', azul);

	btnReset.addEventListener('click', function () {
		d.body.style.backgroundColor = '';
		d.body.style.color = '';

		for (var n = 0; n < btns.length; n++) {
			btns[n].style.fontSize = '';
			btns[n].style.backgroundColor = '';
			btns[n].style.color = '';
		}

		btnAzul.removeEventListener('click', azul);
	});
})(document);