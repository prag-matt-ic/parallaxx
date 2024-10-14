export var TranslatePreset;
(function (TranslatePreset) {
    TranslatePreset["SLOWER"] = "50%,0%,-50%";
    TranslatePreset["SLOW"] = "100%,0%,-100%";
    TranslatePreset["FAST"] = "200%,0%,-200%";
    TranslatePreset["FASTER"] = "300%,0%,-300%";
})(TranslatePreset || (TranslatePreset = {}));
export var OpacityPreset;
(function (OpacityPreset) {
    OpacityPreset["FADE_IN"] = "0,1,1";
    OpacityPreset["FADE_IN_OUT"] = "0,1,0";
    OpacityPreset["HALF_FADE_IN"] = "0.5,1,1";
    OpacityPreset["HALF_FADE_IN_OUT"] = "0.5,1,0.5";
})(OpacityPreset || (OpacityPreset = {}));
// https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range
// https://scroll-driven-animations.style/tools/view-timeline/ranges/
export var RangePreset;
(function (RangePreset) {
    RangePreset["COVER"] = "cover 0% cover 100%";
    RangePreset["CONTAIN"] = "contain 0% contain 100%";
})(RangePreset || (RangePreset = {}));
const NO_TRANSLATE = { enter: "0%", middle: "0%", exit: "0%" };
const NO_OPACITY = { enter: "1", middle: "1", exit: "1" };
class ParallaxX {
    constructor() {
        this.init();
    }
    async init() {
        // Can this work server side?
        if (typeof window === "undefined")
            throw new Error("Window is undefined. Use in client environment.");
        // Load polyfill if needed
        // TODO package the polyfill with the library and load it from there for server side rendering
        if (typeof window.ScrollTimeline === "undefined") {
            console.warn("ScrollTimeline is not supported. Loading polyfill.");
            const script = document.createElement("script");
            script.src =
                "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
            script.async = false;
            script.onload = () => {
                console.warn("ScrollTimeline Polyfill loaded");
            };
            document.head.appendChild(script);
        }
        this.setupParallax();
    }
    setupParallax() {
        const parallaxxxElements = document.querySelectorAll("[data-pxx-translate],[data-pxx-opacity]");
        parallaxxxElements.forEach((element) => {
            this.setPxxxProperties(element, this.getPxxx(element));
        });
    }
    getPxxx(element) {
        let pxx = {
            translate: NO_TRANSLATE,
            opacity: NO_OPACITY,
        };
        const getRandomValue = (randomString) => {
            // "random(-10|-100)" => random between -10 and -100
            // "random(0|100)" => random between 0 and 100
            // Extract the number values from the randomString
            const match = randomString.match(/random\((-?\d+)\|(-?\d+)\)/);
            if (!match)
                throw new Error("Invalid input string");
            const min = Number(match[1]);
            const max = Number(match[2]);
            // Generate a random number between the two values - preserving the sign
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            // Return as a string
            return `${random}px`;
        };
        const parseValues = (value, isTranslate) => {
            // Parse string into enter, middle, and exit values
            // Translate can be anything that CSS translate3d supports: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d
            // Opacity can be any value between 0 and 1
            const values = value.split(",");
            console.log({ values });
            if (values?.length === 3) {
                let [enter, middle, exit] = values;
                if (enter.includes("random"))
                    enter = getRandomValue(enter);
                if (middle.includes("random"))
                    middle = getRandomValue(middle);
                if (exit.includes("random"))
                    exit = getRandomValue(exit);
                console.log({ enter, middle, exit });
                return { enter, middle, exit };
            }
            return isTranslate ? NO_TRANSLATE : NO_OPACITY;
        };
        const translate = element.getAttribute("data-pxx-translate");
        if (!!translate)
            pxx.translate = parseValues(translate, true);
        const opacity = element.getAttribute("data-pxx-opacity");
        if (!!opacity)
            pxx.opacity = parseValues(opacity, false);
        const animationRange = element.getAttribute("data-pxx-range");
        if (!!animationRange)
            pxx.range = animationRange;
        return pxx;
    }
    setPxxxProperties(element, pxx) {
        const { translate, opacity, range } = pxx;
        // Translate properties
        element.style.setProperty("--pxx-enter-translate", `translate3d(0, ${translate.enter}, 0)`);
        element.style.setProperty("--pxx-center-translate", `translate3d(0, ${translate.middle}, 0)`);
        element.style.setProperty("--pxx-exit-translate", `translate3d(0, ${translate.exit}, 0)`);
        // Opacity properties
        element.style.setProperty("--pxx-enter-opacity", opacity.enter);
        element.style.setProperty("--pxx-center-opacity", opacity.middle);
        element.style.setProperty("--pxx-exit-opacity", opacity.exit);
        // Range
        if (!!range)
            element.style.setProperty("--pxx-animation-range", range);
    }
}
export { ParallaxX };
//# sourceMappingURL=index.js.map