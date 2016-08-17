<img src="http://hansifer.com/hosted-assets/tube-enhancer/github-title.png">
	
## A browser extension that enhances the UX of the YouTube subscriptions feed

[Features](### Features)

- Adds a close button to the upper-right corner of a video thumbnail when hovered over, providing a quicker way to hide videos than opening the video's menu and clicking "Hide".

- When the thumbnail's close button is clicked to hide a video, its thumbnail disappears immediately rather than displaying a "Video hidden from feed" placeholder as YouTube normally does.

- Active enhancement can be toggled on or off by clicking on the Tube Enhancer browser action button.

<img src="http://hansifer.com/hosted-assets/tube-enhancer/thumb-hover.png">

[Browser Support](### Browser Support)

Currently Chrome only.

[Caveats](### Caveats)

- Content scripts are inherently brittle. Since this extension relies on assumptions about the YouTube UI, it may break as YouTube rolls out UI changes.

- Enhancement is currently limited specifically to the subscriptions feed (https://www.youtube.com/feed/subscriptions).

[Technical Notes](### Technical Notes)

- jQuery is the only dependency.

[Todos](### Todos)

- Switch to a slimmed-down version of jQuery.
