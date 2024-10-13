var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
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
var NO_TRANSLATE = { enter: '0%', middle: '0%', exit: '0%' };
var NO_OPACITY = { enter: '1', middle: '1', exit: '1' };
var TRANSLATE_PRESETS = (_a = {},
    _a[TranslatePreset.SLOW] = { enter: '100%', middle: '0%', exit: '-100%' },
    _a[TranslatePreset.SLOWER] = { enter: '50%', middle: '0%', exit: '-50%' },
    _a[TranslatePreset.FAST] = { enter: '200%', middle: '0%', exit: '-200%' },
    _a[TranslatePreset.FASTER] = { enter: '300%', middle: '0%', exit: '-300%' },
    _a);
var OPACITY_PRESETS = {
    full: { enter: '0.0', middle: '1.0', exit: '0.0' },
    half: { enter: '0.5', middle: '1.0', exit: '0.5' },
    quarter: { enter: '0.25', middle: '1.0', exit: '0.25' },
};
var ParallaxX = /** @class */ (function () {
    function ParallaxX() {
        this.isReady = false;
        this.init();
    }
    ParallaxX.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prefersReducedMotion, script;
            return __generator(this, function (_a) {
                if (typeof window === 'undefined')
                    return [2 /*return*/];
                prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (prefersReducedMotion) {
                    console.warn('Reduced motion is preferred. Parallax effects are disabled.');
                    return [2 /*return*/];
                }
                // Load polyfill if needed
                if (typeof window.ScrollTimeline === 'undefined') {
                    console.warn('ScrollTimeline is not supported. Loading polyfill.');
                    script = document.createElement('script');
                    script.src = 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
                    script.async = false;
                    script.onload = function () {
                        console.warn('ScrollTimeline Polyfill loaded');
                    };
                    document.head.appendChild(script);
                }
                this.setupParallax();
                return [2 /*return*/];
            });
        });
    };
    ParallaxX.prototype.setupParallax = function () {
        var _this = this;
        var parallaxxxElements = document.querySelectorAll('[data-pxx-translate],[data-pxx-opacity]');
        parallaxxxElements.forEach(function (element) {
            _this.setPxxxProperties(element, _this.getPxxx(element));
        });
        this.isReady = true;
    };
    ParallaxX.prototype.getPxxx = function (element) {
        var pxx = {
            translate: NO_TRANSLATE,
            opacity: NO_OPACITY,
        };
        var parseCustomValues = function (value, isTranslate) {
            // Parse string into enter, middle, and exit values
            // Translate can be anything that CSS translate3d supports: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d
            // Opacity can be any value between 0 and 1
            var values = value.split(',');
            if ((values === null || values === void 0 ? void 0 : values.length) === 3) {
                var enter = values[0], middle = values[1], exit = values[2];
                return { enter: enter, middle: middle, exit: exit };
            }
            return isTranslate ? NO_TRANSLATE : NO_OPACITY;
        };
        var parseTranslate = function (value) {
            var isPreset = Object.values(TranslatePreset).includes(value);
            if (isPreset)
                return TRANSLATE_PRESETS[value];
            // TODO: handle random() value
            // value = "random(20, 40)" - random px between 20 and 40
            if (value.includes('random')) {
                // Generate a random start and end value between the range
                var _a = value.match(/\d+/g), min = _a[0], max = _a[1];
                var random = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
                return { enter: "".concat(random, "px"), middle: '0px', exit: "".concat(-random, "px") };
            }
            console.log({ value: value, isPreset: isPreset });
            return parseCustomValues(value, true);
        };
        var parseOpacity = function (value) {
            var isPreset = Object.values(OpacityPreset).includes(value);
            if (isPreset)
                return OPACITY_PRESETS[value];
            return parseCustomValues(value, false);
        };
        var translate = element.getAttribute('data-pxx-translate');
        if (!!translate)
            pxx.translate = parseTranslate(translate);
        var opacity = element.getAttribute('data-pxx-opacity');
        if (!!opacity)
            pxx.opacity = parseOpacity(opacity);
        return pxx;
    };
    ParallaxX.prototype.setPxxxProperties = function (element, pxx) {
        console.log({ pxx: pxx });
        var translate = pxx.translate, opacity = pxx.opacity;
        // Set CSS custom properties
        // Translate
        element.style.setProperty('--pxx-enter-translate', "translate3d(0, ".concat(translate.enter, ", 0)"));
        element.style.setProperty('--pxx-center-translate', "translate3d(0, ".concat(translate.middle, ", 0)"));
        element.style.setProperty('--pxx-exit-translate', "translate3d(0, ".concat(translate.exit, ", 0)"));
        // Opacity
        element.style.setProperty('--pxx-enter-opacity', opacity.enter);
        element.style.setProperty('--pxx-center-opacity', opacity.middle);
        element.style.setProperty('--pxx-exit-opacity', opacity.exit);
    };
    return ParallaxX;
}());
export { ParallaxX };
//# sourceMappingURL=index.js.map