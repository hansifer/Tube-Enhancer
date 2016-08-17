(function(win, doc) {

	const THUMBS_CONTAINER_SELECTOR = '.section-list';

	var _hideVideoEl, _thumbsContainer;

	// Chrome extension is not loading on browser navigation at YouTube - Stack Overflow:  http://stackoverflow.com/questions/18397962/chrome-extension-is-not-loading-on-browser-navigation-at-youtube

	setInterval(poll, 700);

	function poll() {
		// console.log('Tube Enhancer: polling...');

		// todo: implement dynamic polling frequency modulation based on average poll() duration to maintain an acceptable range for polling duration/period ratio (measured at around 0.0001 on my machine). will need to use setTimeout instead of setInterval. we'd also likely need to constrain the dynamic frequency to a predefined min/max.

		// var start = performance.now();

		initIf(newThumbsContainer());

		// console.log('Tube Enhancer: poll duration: ' + (performance.now() - start) + ' ms');
	}

	function initIf(thumbsContainer) {
		if (thumbsContainer) {
			appendHideVideoEl();
			attachEvents(thumbsContainer);
		}
	}

	function newThumbsContainer(thumbsContainer) {
		return window.location.href === 'https://www.youtube.com/feed/subscriptions' && (thumbsContainer = $(THUMBS_CONTAINER_SELECTOR).get(0)) && _thumbsContainer !== thumbsContainer && (_thumbsContainer = thumbsContainer);
	}

	function appendHideVideoEl() {
		_hideVideoEl = $('div.hide-video').get(0);

		if (!_hideVideoEl) {
			// console.log('Tube Enhancer: appending hide video element');
			(_hideVideoEl = doc.createElement('div')).classList.add('hide-video');
			(doc.body || doc.documentElement).appendChild(_hideVideoEl);
		}
	}

	function attachEvents(thumbsContainer) {
		// console.log('Tube Enhancer: attaching events', thumbsContainer);

		$(thumbsContainer).off('mouseover', '.yt-lockup-thumbnail', thumbMouseover).off('click', '.hide-video', hideVideoClick).on('mouseover', '.yt-lockup-thumbnail', thumbMouseover).on('click', '.hide-video', hideVideoClick);
	}

	function thumbMouseover() {
		if (_hideVideoEl) {
			this.appendChild(_hideVideoEl);
		}
	}

	function hideVideoClick() {
		$this = $(this);

		var btn = $this.closest('.yt-lockup-dismissable').find('.yt-lockup-content button.yt-ui-menu-item > .yt-ui-menu-item-label:contains("Hide")').get(0);

		if (btn) {
			setTimeout(function() {
				btn.click();
				$this.closest('li.yt-shelf-grid-item').css('width', '0').css('margin', '0').css('visibility', 'hidden');
			}, 0);
		}
	}
}(window, document));
