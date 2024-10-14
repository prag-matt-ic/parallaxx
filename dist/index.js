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
        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            console.warn("Reduced motion is preferred. Parallax effects are disabled.");
            return;
        }
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
        const parseValues = (value, isTranslate) => {
            // Parse string into enter, middle, and exit values
            // Translate can be anything that CSS translate3d supports: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d
            // Opacity can be any value between 0 and 1
            const values = value.split(",");
            if (values?.length === 3) {
                const [enter, middle, exit] = values;
                return { enter, middle, exit };
            }
            return isTranslate ? NO_TRANSLATE : NO_OPACITY;
        };
        const parseTranslate = (value) => {
            // value = "random(20, 40)" - random px between 20 and 40
            if (value.includes("random")) {
                // Generate a random start and end value between the range
                const [min, max] = value.match(/\d+/g);
                const random = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) +
                    parseInt(min);
                return { enter: `${random}px`, middle: "0px", exit: `${-random}px` };
            }
            return parseValues(value, true);
        };
        const parseOpacity = (value) => {
            return parseValues(value, false);
        };
        const translate = element.getAttribute("data-pxx-translate");
        if (!!translate)
            pxx.translate = parseTranslate(translate);
        const opacity = element.getAttribute("data-pxx-opacity");
        if (!!opacity)
            pxx.opacity = parseOpacity(opacity);
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