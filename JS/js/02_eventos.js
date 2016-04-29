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

(function (d, w) {
	var fecha = new Date(),
		hora = fecha.getHours(),
		saludo = d.getElementById('saludo'),
		hojaCSS = d.createElement('link');

	function saludar() {
		/*
			No me jodas 0-5
			Buenos dias 6-11
			Buenas tardes 12-18 
			Buenas noches 19-23
		*/
		//if (hora < 6)
		if (hora <= 5) {
			saludo.innerHTML = '<h3>No me jodas!!!</h3>';
			hojaCSS.href = './css/duermete.css';
		} else if(hora >= 6 && hora <= 11) {
			saludo.innerHTML = '<h3>Buenos días!!</h3>';
			hojaCSS.href = './css/dia.css';
		} else if(hora >= 12 && hora <= 18) {
			saludo.innerHTML = '<h3>Buenas tardes!!</h3>';
			hojaCSS.href = './css/tarde.css';
		} else {
			saludo.innerHTML = '<h3>Buenas noches!!</h3>';
			hojaCSS.href = './css/noche.css';
		}

		saludo.style.fontSize = '300%';
		hojaCSS.rel = 'stylesheet';
		d.head.appendChild(hojaCSS);
	}

	console.log(
		fecha,
		hora
	);

	w.onload = saludar;
})(document, window);