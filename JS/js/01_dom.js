(function (d) {
	'use strict';
	//Analisis del código de Bextlán
	document.getElementsByTagName('li');
	document.getElementsByTagName('li').length;
	document.getElementsByTagName('li')[3];

	document.getElementsByClassName('menu');
	document.getElementsByClassName('menu').length;

	document.getElementById('subscription');

	document.getElementsByName('email');
	document.getElementsByName('email').length;
	document.getElementsByName('email')[0];

	document.querySelectorAll('section');

	document.querySelectorAll('[href]');
	document.querySelectorAll('[href]').length;

	document.querySelectorAll('[name="email"]');
	document.querySelectorAll('[placeholder="Tu email"]');
	document.querySelectorAll('[placeholder="Tu email"]')[0];
	document.querySelectorAll('.menu');
	document.querySelectorAll('#loader');

	document.querySelector('#loader');
	//document.querySelector('#loader').length;
	//document.querySelector('#loader')[0];


	
	document.querySelector('li');
})(document);