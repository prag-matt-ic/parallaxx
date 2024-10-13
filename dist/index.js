export var TranslatePreset;
(function (TranslatePreset) {
    TranslatePreset["SLOW"] = "slow";
    TranslatePreset["SLOWER"] = "slower";
    TranslatePreset["FAST"] = "fast";
    TranslatePreset["FASTER"] = "faster";
})(TranslatePreset || (TranslatePreset = {}));
export var OpacityPreset;
(function (OpacityPreset) {
    OpacityPreset["FULL"] = "full";
    OpacityPreset["HALF"] = "half";
    OpacityPreset["QUARTER"] = "quarter";
})(OpacityPreset || (OpacityPreset = {}));
const NO_TRANSLATE = { enter: "0%", middle: "0%", exit: "0%" };
const NO_OPACITY = { enter: "1", middle: "1", exit: "1" };
const TRANSLATE_PRESETS = {
    [TranslatePreset.SLOW]: { enter: "100%", middle: "0%", exit: "-100%" },
    [TranslatePreset.SLOWER]: { enter: "50%", middle: "0%", exit: "-50%" },
    [TranslatePreset.FAST]: { enter: "200%", middle: "0%", exit: "-200%" },
    [TranslatePreset.FASTER]: { enter: "300%", middle: "0%", exit: "-300%" },
};
const OPACITY_PRESETS = {
    full: { enter: "0.0", middle: "1.0", exit: "0.0" },
    half: { enter: "0.5", middle: "1.0", exit: "0.5" },
    quarter: { enter: "0.25", middle: "1.0", exit: "0.25" },
};
class ParallaxX {
    constructor() {
        this.isReady = false;
        this.init();
    }
    async init() {
        if (typeof window === "undefined")
            return;
        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            console.warn("Reduced motion is preferred. Parallax effects are disabled.");
            return;
        }
        // Load polyfill if needed
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
        this.isReady = true;
    }
    getPxxx(element) {
        let pxx = {
            translate: NO_TRANSLATE,
            opacity: NO_OPACITY,
        };
        const parseCustomValues = (value, isTranslate) => {
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
            const isPreset = Object.values(TranslatePreset).includes(value);
            if (isPreset)
                return TRANSLATE_PRESETS[value];
            // TODO: handle random() value
            // value = "random(20, 40)" - random px between 20 and 40
            if (value.includes("random")) {
                // Generate a random start and end value between the range
                const [min, max] = value.match(/\d+/g);
                const random = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) +
                    parseInt(min);
                return { enter: `${random}px`, middle: "0px", exit: `${-random}px` };
            }
            console.log({ value, isPreset });
            return parseCustomValues(value, true);
        };
        const parseOpacity = (value) => {
            const isPreset = Object.values(OpacityPreset).includes(value);
            if (isPreset)
                return OPACITY_PRESETS[value];
            return parseCustomValues(value, false);
        };
        const translate = element.getAttribute("data-pxx-translate");
        if (!!translate)
            pxx.translate = parseTranslate(translate);
        const opacity = element.getAttribute("data-pxx-opacity");
        if (!!opacity)
            pxx.opacity = parseOpacity(opacity);
        return pxx;
    }
    setPxxxProperties(element, pxx) {
        console.log({ pxx });
        const { translate, opacity } = pxx;
        // Set CSS custom properties
        // Translate
        element.style.setProperty("--pxx-enter-translate", `translate3d(0, ${translate.enter}, 0)`);
        element.style.setProperty("--pxx-center-translate", `translate3d(0, ${translate.middle}, 0)`);
        element.style.setProperty("--pxx-exit-translate", `translate3d(0, ${translate.exit}, 0)`);
        // Opacity
        element.style.setProperty("--pxx-enter-opacity", opacity.enter);
        element.style.setProperty("--pxx-center-opacity", opacity.middle);
        element.style.setProperty("--pxx-exit-opacity", opacity.exit);
    }
}
export { ParallaxX };
//# sourceMappingURL=index.js.map