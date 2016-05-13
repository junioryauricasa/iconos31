(function (d, w, j) {
	'use strict';

	var ajax = new XMLHttpRequest(),
		movies = d.querySelector('#movies'),
		moviesInfo,
		moviesTemplate = '';

	w.onload = function () {
		ajax.open('GET', './js/movies.json', true);

		ajax.onload = function () {
			if (ajax.status >= 200 && ajax.status < 400) {
				moviesInfo = j.parse(ajax.responseText);

				console.log(
					ajax,
					moviesInfo
				);

				for (var n = 0; n < moviesInfo['movies'].length; n++) {
					moviesTemplate += `
						<article>
							<h2>${moviesInfo['movies'][n].title}</h2>
							<p><b>${moviesInfo['movies'][n].year}</b></p>
							<p><i>${moviesInfo['movies'][n].genres}</i></p>
							<img src="${moviesInfo['movies'][n].poster}">
						</article>
					`;
				}
			} else {
				moviesTemplate = '<h3>El servidor NO responde. Error N°' + ajax.status + ': <mark>' + ajax.statusText + '</mark><h3>';
			}
			
			movies.innerHTML = moviesTemplate;
		};

		ajax.send();
	};
})(document, window, JSON);