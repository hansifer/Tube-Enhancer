	refreshBrowserIcon();

	chrome.browserAction.onClicked.addListener(function() {
		localStorage.setItem('enhance', isOff() ? 'on' : 'off');
		
		refreshBrowserIcon();

		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, 'reload');
		});
	});

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request === 'inject' && !isOff()) {
			chrome.tabs.insertCSS(sender.tab.id, {
				file: 'content.css',
				allFrames: false,
				runAt: 'document_start'
			});

			chrome.tabs.executeScript(sender.tab.id, {
				file: 'jquery.min.js',
				allFrames: false,
				runAt: 'document_end'
			}, function() {
				chrome.tabs.executeScript(sender.tab.id, {
					file: 'content.js',
					allFrames: false,
					runAt: 'document_end'
				});
			});
		}
	});

	function refreshBrowserIcon() {
		if (isOff()) {
			chrome.browserAction.setIcon({
				path: 'img/logo19_off.png'
			});

			chrome.browserAction.setTitle({
				title: 'Enhance is OFF'
			});
		} else {
			chrome.browserAction.setIcon({
				path: 'img/logo19.png'
			});

			chrome.browserAction.setTitle({
				title: 'Enhance is ON'
			});
		}
	}

	function isOff() {
		return localStorage.getItem('enhance') === 'off';
	}
