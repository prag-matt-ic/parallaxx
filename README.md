# ParallaxX Toolkit

A lightweight, framework-agnostic toolkit for implementing smooth parallax and fade effects that leverage the native [ScrollTimeline](https://developer.mozilla.org/en-US/docs/Web/API/ScrollTimeline) API.

✅ Miniscule footprint (5kb)
✅ Easy to use
✅ Maximum performance

## Installation

Install the package via npm:

```
npm i @parallaxx/toolkit
```

## Getting Started

### Import the Toolkit

```typescript
// Import the ParallaxX class and optional preset enums
import { ParallaxX, TranslatePreset, OpacityPreset } from "@parallaxx/toolkit";
// Import the CSS
import "@parallaxx/toolkit/dist/parallaxx.css";
```

### Initialize

Initialize the ParallaxX class in your application.
If you're using React/Next.js, initialize it inside useLayoutEffect:

```jsx
useLayoutEffect(() => {
  new ParallaxX();
}, []);
```

For other frameworks or vanilla JavaScript, initialize the class after the DOM is ready.

### Add Data Attributes

Add data attributes to the elements you want to animate.
ParallaxX finds elements with 'data-pxx-translate' and 'data-pxx-opacity' attributes.

```jsx
<div
  data-pxx-translate={TranslatePreset.FAST}
  data-pxx-opacity={OpacityPreset.FULL}
></div>
```

## Presets

The toolkit provides several presets for convenience.

### Translate

- TranslatePreset.SLOW : { enter: '100%', middle: '0%', exit: '-100%' }
- TranslatePreset.SLOWER : { enter: '50%', middle: '0%', exit: '-50%' }
- TranslatePreset.FAST : { enter: '200%', middle: '0%', exit: '-200%' }
- TranslatePreset.FASTER : { enter: '300%', middle: '0%', exit: '-300%' }

### Opacity

- OpacityPreset.FULL : { enter: '0.0', middle: '1.0', exit: '0.0' }
- OpacityPreset.HALF : { enter: '0.5', middle: '1.0', exit: '0.5' }
- OpacityPreset.QUARTER : { enter: '0.25', middle: '1.0', exit: '0.25' }

## Custom Values

For greater flexibility you can provide custom values.
These are comma-separated strings representing the enter, middle, and exit states.

Translate values are anything that CSS [translate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d) supports.

Opacity values range between 0 and 1.

```jsx
// Translate the element from 120px to -120px as it moves through the view.
// Fade the element from 0.2 opacity to 1.0 as it reaches the center of the view.
<div data-pxx-translate="120px,0,-120px" data-pxx-opacity="0.2,1.0,1.0"></div>

// Translate the element from 10vh to -20vh as it moves through the view. Aligning in the center (0)
// Fade the element from 0 opacity to 1.0 as it reaches the center of the view, and then back out again as it exits.
<div data-pxx-translate="10vh,0,-20vh" data-pxx-opacity="0,1,0"></div>
```

## How It Works

By utilizing native browser capabilities and minimizing reliance on JavaScript, ParallaxX outperforms animation frameworks that compute animations on the main thread.

## Browser Support

If window.ScrollTimeline() is not supported, a polyfill is loaded.

## License

This project is licensed under the MIT License.
