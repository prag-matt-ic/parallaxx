# ParallaxX Toolkit

A lightweight, framework-agnostic toolkit for creating smooth parallax scrolling effects using modern web technologies.

## Installation

Install the package via npm:

```
npm install @parallaxx/toolkit
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
If you're using React/Next.js, initialize it inside useLayoutEffect.

```jsx
useLayoutEffect(() => {
  new ParallaxX();
}, []);
```

For other frameworks or vanilla JavaScript, initialize the class after the DOM is ready.

### Add Data Attributes

Add data attributes to the elements you want to animate.
The ParallaxX class finds elements with 'data-pxx-translate' and 'data-pxx-opacity' attributes.

```jsx
<div
  data-pxx-translate={TranslatePreset.FAST}
  data-pxx-opacity={OpacityPreset.FULL}
></div>
```

## Presets

The toolkit provides several presets for convenience.

### Translate Presets

- TranslatePreset.SLOW : { enter: '100%', middle: '0%', exit: '-100%' }
- TranslatePreset.SLOWER : { enter: '50%', middle: '0%', exit: '-50%' }
- TranslatePreset.FAST : { enter: '200%', middle: '0%', exit: '-200%' }
- TranslatePreset.FASTER : { enter: '300%', middle: '0%', exit: '-300%' }

### Opacity Presets

- OpacityPreset.FULL : { enter: '0.0', middle: '1.0', exit: '0.0' }
- OpacityPreset.HALF : { enter: '0.5', middle: '1.0', exit: '0.5' }
- OpacityPreset.QUARTER : { enter: '0.25', middle: '1.0', exit: '0.25' }

## Custom Values

You can also provide custom values instead of using presets. These are comma-separated strings representing the enter, middle, and exit states.

```jsx
// TODO
```

## Examples

## Browser Support

The ParallaxX toolkit uses modern web APIs for smooth animations. If window.ScrollTimeline is not supported, a polyfill will be loaded.

## License

This project is licensed under the MIT License.
