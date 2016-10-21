(function (d, w) {
	'use strict';

	var tags = d.querySelectorAll('a[rel="tag"]'),
		categories = d.querySelectorAll('a[rel="category tag"]'),
		postDate = d.querySelector('.post-date'),
		postTime = d.querySelector('.post-time'),
		postAuthor = d.querySelector('.post-author');

	for (var i = 0; i < tags.length; i++) {
		tags[i].insertAdjacentHTML('afterbegin', '<i class="fa fa-tag"></i>');
	};

	for (var i = 0; i < categories.length; i++) {
		categories[i].insertAdjacentHTML('afterbegin', '<i class="fa fa-folder-open"></i>');
	};

	postDate.insertAdjacentHTML('afterbegin', '<i class="fa fa-calendar"></i> ');
	postTime.insertAdjacentHTML('afterbegin', '<i class="fa fa-clock-o"></i> ');
	postAuthor.insertAdjacentHTML('afterbegin', '<i class="fa fa-user"></i> ');
})(document, window);

(function (d, w) {
	'use strict';

	var menu = d.querySelector('.menu-main'),
		menuBtn = d.querySelector('.menu-btn'),
		mq = w.matchMedia('(min-width:64em)');

	function closeNav(mq) {
		return (mq.matches) ? menu.classList.remove('active') : false;
	}

	menuBtn.onclick = function (e) {
		e.preventDefault();
		menu.classList.toggle('active');
	};

	w.onload = closeNav(mq);
	mq.addListener(closeNav);
})(document, window);