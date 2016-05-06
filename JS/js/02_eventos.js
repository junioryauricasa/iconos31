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
		hojaCSS = d.createElement('link'),
		reloj = d.getElementById('reloj'),
		//toLocaleString()  fecha y hora
		//toLocaleDateString() fecha
		//toLocaleTimeString() hora
		fechaFormato = fecha.toLocaleTimeString(),
		btnIniciarReloj = d.querySelector('#iniciar-reloj'),
		btnIniciarAlarma = d.querySelector('#iniciar-alarma'),
		btnDetenerReloj = d.querySelector('#detener-reloj'),
		btnDetenerAlarma = d.querySelector('#detener-alarma'),
		alarma = d.createElement('audio'),
		temporizadorReloj,
		temporizadorAlarma,
		btnNumero = d.querySelector('#numero');

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

	function parImpar() {
		//alert('Ingresa un numero');
		//confirm('Ingresa un numero');
		//prompt('Ingresa un numero');
		var numero = prompt('Ingresa un numero'),
			modulo = numero % 2,
			textoPar = 'El número: ' + numero + ' es Par',
			textoImpar = 'El número: ' + numero + ' es Impar',
			ternario;

		/*
			= Asignación
			== Comparación de valor
			=== Comparación de valor y tipo de dato
		*/
		if ( isNaN(modulo) || numero === '' ) {
			alert('No me engañes, "' + numero + '" no es un número');
		} else {
			/*
				operador ternario
				variable = (condición) ? verdadero : falso;
			*/
			ternario = (modulo === 0) ? textoPar : textoImpar
			alert(ternario);
		}
	}

	console.log(
		fecha,
		hora
	);

	reloj.style.fontSize = '500%';
	reloj.innerHTML = fechaFormato;

	alarma.src = './audio/alarma.mp3';
	alarma.controls = true;
	d.body.appendChild(alarma);

	w.onload = saludar;

	btnIniciarReloj.onclick = function () {
		temporizadorReloj = setInterval(function () {
			reloj.innerHTML = new Date().toLocaleTimeString();
		}, 1000);
	};

	btnDetenerReloj.onclick = function () {
		clearInterval(temporizadorReloj);
	};

	btnIniciarAlarma.addEventListener('click', function () {
		temporizadorAlarma = setTimeout(function () {
			alarma.play();
		}, 3000);
	});

	btnDetenerAlarma.addEventListener('click', function () {
		clearTimeout(temporizadorAlarma);
	});

	btnNumero.onclick = parImpar;
})(document, window);