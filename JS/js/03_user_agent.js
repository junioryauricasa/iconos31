(function (d, w, n) {
	'use strict';

	var ua = n.userAgent,
		mobile = ua.match(/android|iphone|ipad|ipod|windows phone|blackberry|mobile/i),
		desktop = ua.match(/linux|mac os|windows nt/i),
		browsers = ua.match(/chrome|safari|firefox|opera|opera mini|msie|iemobile|edge/i),
		isMobile = {
			android : function () {
				return ua.match(/android/i);
			},
			ios : function () {
				return ua.match(/iphone|ipad|ipod/i);
			},
			windows : function () {
				return ua.match(/windows phone/i);
			},
			blackberry : function () {
				return ua.match(/blackberry/i);
			},
			any : function () {
				return ( this.android() || this.ios()  || this.windows() || this.blackberry() );
			}
		},
		isDesktop = {
			linux : function () {
				return ua.match(/linux/i);
			},
			mac : function () {
				return ua.match(/mac os/i);
			},
			windows : function () {
				return ua.match(/windows nt/i);
			},
			any : function () {
				return ( this.linux() || this.mac() || this.windows() );
			}
		},
		isBrowser = {
			chrome : function () {
				return ua.match(/chrome/i);
			},
			safari : function () {
				return ua.match(/safari/i);
			},
			firefox : function () {
				return ua.match(/firefox/i);
			},
			opera : function () {
				return ua.match(/opera|opera mini/i);
			},
			ie : function () {
				return ua.match(/msie|iemobile/i);
			},
			edge : function () {
				return ua.match(/edge/i);
			},
			any : function () {
				return ( this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera() );
			}
		},
		liUserAgent = d.querySelector('#user-agent'),
		liPlatform = d.querySelector('#platform'),
		liBrowser = d.querySelector('#browser'),
		container = d.querySelector('#container'),
		btnDevice = d.querySelector('#btn-device'),
		btnPlatform = d.querySelector('#btn-platform'),
		btnBrowser = d.querySelector('#btn-browser'),
		btnRedirect = d.querySelector('#btn-redirect'),
		deviceIcon,
		platformIcon,
		browserIcon,
		whereIGo;

	function createIcon(icon) {
		var i = d.createElement('i');

		i.classList.add('fa', 'fa-5x', icon);
		i.style.padding = '1rem';

		container.appendChild(i);
	}

	function detectDevice(e) {
		deviceIcon = ( isMobile.any() ) ? 'fa-mobile' : 'fa-desktop';
		createIcon(deviceIcon);
		e.target.removeEventListener('click', detectDevice);
	}

	function detectPlatform(e) {
		if( isDesktop.windows() || isMobile.windows() ) {
			platformIcon = 'fa-windows';
		} else if ( isDesktop.mac() || isMobile.ios() ) {
			platformIcon = 'fa-apple';
		} else if ( isMobile.android() ) {
			platformIcon = 'fa-android';
		} else if ( isDesktop.linux() ) {
			platformIcon = 'fa-linux';
		} else {
			platformIcon = 'fa-question';
		}

		createIcon(platformIcon);
		e.target.removeEventListener('click', detectPlatform);
	}

	function detectBrowser(e) {
		browserIcon = ( isBrowser.ie() ) ? 'fa-internet-explorer' : 'fa-' + isBrowser.any();
		createIcon( browserIcon.toLowerCase() );
		e.target.removeEventListener('click', detectBrowser);	
	}

	w.onload = function () {
		console.log(
			ua,
			mobile,
			desktop,
			browsers,
			isMobile,
			isMobile.android(),
			isMobile.any()
		);

		liUserAgent.textContent = ua;
		liPlatform.textContent = ( isMobile.any() ) ? isMobile.any() : isDesktop.any();
		liBrowser.textContent = isBrowser.any();

		btnDevice.addEventListener('click', detectDevice);
		btnPlatform.addEventListener('click', detectPlatform);
		btnBrowser.addEventListener('click', detectBrowser);
		btnRedirect.onclick = function () {	
			whereIGo = ( isMobile.any() ) ? 'http://m.mediotiempo.com' : 'http://mediotiempo.com';
			w.location.href = whereIGo;
		};

		/*
			Redirección Automática
			whereIGo = ( isMobile.any() ) ? 'http://m.mediotiempo.com' : 'http://mediotiempo.com';
			w.location.href = whereIGo;
		*/
	}
})(document, window, navigator);