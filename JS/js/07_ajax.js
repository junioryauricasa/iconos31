(function (d, w) {
	'use strict';

	var READY_STATE_COMPLETE = 4,
		OK = 200,
		NOT_FOUND = 404,
		ajax = new XMLHttpRequest(),
		preload = d.querySelector('#preload'),
		country = d.querySelector('#country'),
		linksMenu = d.querySelectorAll('.menu a');

	function countryInfo() {
		//console.log(ajax);
		preload.innerHTML = '<i class="fa  fa-refresh  fa-spin  fa-5x"></i>';
		if (ajax.readyState === READY_STATE_COMPLETE && ajax.status === OK) {
			console.log(ajax);
			setTimeout(function () {
				preload.innerHTML = '';
				country.innerHTML = ajax.response;
			}, 1000);
		} else if (ajax.status === NOT_FOUND) {
			console.log(ajax);
			setTimeout(function () {
				preload.innerHTML = '';
				country.innerHTML = '<h3>El servidor NO responde. Error N°' + ajax.status + ': <mark>' + ajax.statusText + '</mark><h3>';
			}, 1000);
		}
	}

	function ajaxRequest(e) {
		//alert('funciona');

		e.preventDefault();

		ajax.onreadystatechange = countryInfo;
		ajax.open('GET', e.target.href, true);
		/*
			http://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions
			http://sites.utoronto.ca/webdocs/HTMLdocs/Book/Book-3ed/appb/mimetype.html
		*/
		ajax.setRequestHeader('Content-Type', 'text/html');
		ajax.send();
	}

	w.onload = function () {
		for (var n = 0; n < linksMenu.length; n++) {
			linksMenu[n].onclick = ajaxRequest;
		}
	}
})(document, window);