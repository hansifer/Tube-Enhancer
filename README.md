<img src="http://hansifer.com/hosted-assets/tube-enhancer/github-title.png">
	
## A browser extension that enhances the UX of the YouTube subscriptions feed

[Features](## Features)

- Adds a close button to the upper-right corner of a video thumbnail when hovered over, providing a quicker way to hide videos than opening the video's menu and clicking "Hide".

- When the thumbnail's close button is clicked to hide a video, its thumbnail disappears immediately rather than displaying a "Video hidden from feed" placeholder as YouTube normally does.

- Active enhancement can be toggled on or off by clicking on the Tube Enhancer browser action button.

<img src="http://hansifer.com/hosted-assets/tube-enhancer/Thumb-hover.png">

[Browser Support](## Browser Support)

Currently Chrome only.

[Caveats](## Caveats)

- Content scripts are inherently brittle. Since this Tube Enhancer relies on assumptions about the YouTube UI, it may break as YouTube rolls out UI changes.

- Enhancement is currently limited specifically to the subscriptions feed (https://www.youtube.com/feed/subscriptions).

[Technical Notes](## Technical Notes)

- Because of the way that YouTube implements navigation (via pushState), polling for a new thumb container element is the most robust way to ensure that we consistently attach the necessary hide video button element and delegated mouseover and click events to the subscription feed. Polling performance, while hardware-dependent, is not a concern in this case since the ratio of polling duration to period is extremely small (~0.00007 on my machine).

- A click on the hide video button relays a synthetic click on the corresponding video's "Hide" menu item and updates the video item's inline css to hide it immediately. The hide is animated via an (externally-defined) css transition.

- jQuery is the only dependency.

[Todos](## Todos)

- Switch to a slimmed-down version of jQuery (our use cases are very limited).
