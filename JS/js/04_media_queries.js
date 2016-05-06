(function (d, w) {
	'use strict';

	var mq1024 = w.matchMedia('(min-width:1024px)'),
		youtube = d.querySelector('#youtube'),
		gmaps = d.querySelector('#gmaps');

	function peformanceOptimization(mq1024) {
		if (mq1024.matches) {
			youtube.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/jXFldV3ImU0" frameborder="0" allowfullscreen></iframe>';
			gmaps.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.2922926156743895!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre+Eiffel!5e0!3m2!1ses-419!2smx!4v1461982266426" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
		} else {
			youtube.innerHTML = '<a href="https://www.youtube.com/watch?v=jXFldV3ImU0" target="_blank">Ver Video</a>';
			gmaps.innerHTML = '<a href="https://www.google.com.mx/maps/place/Torre+Eiffel/@48.8583701,2.2922926,17z/data=!4m6!1m3!3m2!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!2sTorre+Eiffel!3m1!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0" target="_blank">Ver Mapa</a>';
		}
	}

	w.onload = peformanceOptimization(mq1024);
	mq1024.addListener(peformanceOptimization);
})(document, window);