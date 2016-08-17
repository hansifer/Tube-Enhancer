	chrome.runtime.sendMessage('inject');

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request === 'reload') {
			document.location.reload();
		}
	});
