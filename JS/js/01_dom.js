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

	document.querySelectorAll('li');
	document.querySelector('li');

	var lista = d.getElementById('lista'),
		li = d.createElement('li'),
		txtLi = d.createTextNode('Lista 6'),
		p1 = d.querySelector('#uno'),
		p2 = d.querySelector('#dos'),
		p3,
		section = d.querySelector('#container'),
		otroLi,
		a = d.querySelector('.link'),
		html = d.querySelector('html');

	/*
	console.log(
		lista,
		lista.parentNode,
		lista.parentElement,
		lista.childNodes,
		lista.children,
		lista.firstChild,
		lista.firstElementChild,
		lista.lastChild,
		lista.lastElementChild,
		lista.previousSibling,
		lista.previousElementSibling,
		lista.nextElementSibling,
		lista.nextSibling
	);
	*/

	li.appendChild(txtLi);
	lista.appendChild(li);

	p3 = p2.cloneNode(true);
	section.appendChild(p3);

	lista.removeChild(lista.firstElementChild);

	otroLi = li.cloneNode(false);
	lista.insertBefore(otroLi, lista.children[0]);
	otroLi.innerText = '<b>Lista 7</b>';

	p1.innerHTML = '<b>Hola, este es el contenido del párrafo 1</b>';

	lista.firstChild.nodeValue = 'Hola soy el primer nodo';

	lista.replaceChild(lista.children[0], lista.children[3]);

	console.log(
		section.id,
		section.className,
		section.classList,
		section.classList[1],
		section.classList.contains('foo'),
		section.classList.contains('fixed'),
		a.href,
		a.getAttribute('target'),
		a.style,
		d.head,
		d.body
	);

	a.href = 'http://jonmircha.com';
	a.setAttribute('target', '_self');

	html.style.fontSize = '32px';
	a.style.padding = '1rem';
	a.style.borderRadius = '.25rem';

	p3.setAttribute('id','tres');

	d.querySelector('title').innerText = 'Hola';
	d.body.style.backgroundColor = 'black';
	d.body.style.color = 'greenyellow';
	
	container.style.backgroundColor = 'skyblue';
	container.insertAdjacentHTML('beforebegin', '<div>Contenido dinámico agregado antes y afuera del id container</div>');
	container.insertAdjacentHTML('afterbegin', '<div>Contenido dinámico agregado antes y dentro del id container</div>');
	container.insertAdjacentHTML('beforeend', '<div>Contenido dinámico agregado después y dentro del id container</div>');
	container.insertAdjacentHTML('afterend', '<div>Contenido dinámico agregado después y afuera del id container</div>');
})(document);