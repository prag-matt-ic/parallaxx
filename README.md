# ParallaxX Toolkit

A lightweight, framework-agnostic toolkit for creating smooth parallax scrolling effects using modern web technologies.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)

  - [Importing the Toolkit](#importing-the-toolkit)
  - [Initialization](#initialization)
  - [Adding Data Attributes](#adding-data-attributes)

- [Presets](#presets)

  - [Translate Presets](#translate-presets)
  - [Opacity Presets](#opacity-presets)

- [Custom Values](#custom-values)

  - [Custom Translate Values](#custom-translate-values)
  - [Custom Opacity Values](#custom-opacity-values)

- [Examples](#examples)

  - [Using Presets in React](#using-presets-in-react)
  - [Using Custom Values in HTML](#using-custom-values-in-html)

- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package via npm:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install parallaxx   `

## Getting Started

### Importing the Toolkit

Import the ParallaxX class and optional presets into your project:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   import { ParallaxX, TranslatePreset, OpacityPreset } from 'parallaxx';  // Import the CSS into your page or layout  import 'parallaxx/dist/parallaxx.css';   `

### Initialization

Initialize the ParallaxX class in your application. If you're using React, you can initialize it inside a useLayoutEffect or useEffect hook:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   import React, { useLayoutEffect } from 'react';  import { ParallaxX } from 'parallaxx';  import 'parallaxx/dist/parallaxx.css';  function App() {    useLayoutEffect(() => {      new ParallaxX();    }, []);    return (      // Your application code    );  }  export default App;   `

For other frameworks or vanilla JavaScript, initialize the class after the DOM is ready:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`htmlCopy code        </div><div class="slate-code_line">    import { ParallaxX } from &#x27;./node_modules/parallaxx/dist/index.js&#x27;;</div><div class="slate-code_line"></div><div class="slate-code_line">    document.addEventListener(&#x27;DOMContentLoaded&#x27;, () => {</div><div class="slate-code_line">      new ParallaxX();</div><div class="slate-code_line">    });</div><div class="slate-code_line">`

### Adding Data Attributes

Add data attributes to the elements you want to animate. The ParallaxX class looks for elements with data-pxx-translate and data-pxx-opacity attributes.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML `className={presetBoxClasses}    data-pxx-translate={TranslatePreset.FAST}    data-pxx-opacity={OpacityPreset.FULL}  >    {OpacityPreset.FULL}`

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

You can provide custom values instead of using presets. The custom values are comma-separated strings representing the enter, middle, and exit states.

### Custom Translate Values

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML

### Custom Opacity Values

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML

## Examples

### Using Presets

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsxCopy codeimport React from 'react';  import { TranslatePreset, OpacityPreset } from 'parallaxx';  function ExampleComponent() {    return (      className="example-element"        data-pxx-translate={TranslatePreset.FAST}        data-pxx-opacity={OpacityPreset.HALF}      >              );  }  export default ExampleComponent;   `

### Using Custom Values in HTML

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML `class="custom-element"    data-pxx-translate="100px,0px,-100px"    data-pxx-opacity="0,1,0"  >`

## Browser Support

The ParallaxX toolkit uses modern web APIs for smooth animations. Ensure that the browsers you target support the necessary features. For the best compatibility, consider checking browser support for the specific APIs used.

## License

This project is licensed under the MIT License.
