type Pxx = {
  enter: string;
  middle: string;
  exit: string;
};

type PxxParams = {
  translate: Pxx;
  opacity: Pxx;
};

export enum TranslatePreset {
  SLOW = "slow",
  SLOWER = "slower",
  FAST = "fast",
  FASTER = "faster",
}

export enum OpacityPreset {
  FULL = "full",
  HALF = "half",
  QUARTER = "quarter",
}

const NO_TRANSLATE: Pxx = { enter: "0%", middle: "0%", exit: "0%" } as const;
const NO_OPACITY: Pxx = { enter: "1", middle: "1", exit: "1" } as const;

const TRANSLATE_PRESETS: Record<TranslatePreset, Pxx> = {
  [TranslatePreset.SLOW]: { enter: "100%", middle: "0%", exit: "-100%" },
  [TranslatePreset.SLOWER]: { enter: "50%", middle: "0%", exit: "-50%" },
  [TranslatePreset.FAST]: { enter: "200%", middle: "0%", exit: "-200%" },
  [TranslatePreset.FASTER]: { enter: "300%", middle: "0%", exit: "-300%" },
} as const;

const OPACITY_PRESETS: Record<OpacityPreset, Pxx> = {
  full: { enter: "0.0", middle: "1.0", exit: "0.0" },
  half: { enter: "0.5", middle: "1.0", exit: "0.5" },
  quarter: { enter: "0.25", middle: "1.0", exit: "0.25" },
} as const;

class ParallaxX {
  isReady: boolean = false;

  constructor() {
    this.init();
  }

  private async init() {
    if (typeof window === "undefined") return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      console.warn(
        "Reduced motion is preferred. Parallax effects are disabled."
      );
      return;
    }

    // Load polyfill if needed
    if (typeof (window as any).ScrollTimeline === "undefined") {
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

  private setupParallax() {
    const parallaxxxElements = document.querySelectorAll(
      "[data-pxx-translate],[data-pxx-opacity]"
    ) as NodeListOf<HTMLElement>;
    parallaxxxElements.forEach((element) => {
      this.setPxxxProperties(element, this.getPxxx(element));
    });
    this.isReady = true;
  }

  private getPxxx(element: HTMLElement): PxxParams {
    let pxx: PxxParams = {
      translate: NO_TRANSLATE,
      opacity: NO_OPACITY,
    };

    const parseCustomValues = (value: string, isTranslate: boolean): Pxx => {
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

    const parseTranslate = (value: string): Pxx => {
      const isPreset = Object.values(TranslatePreset).includes(
        value as TranslatePreset
      );
      if (isPreset) return TRANSLATE_PRESETS[value as TranslatePreset];
      // TODO: handle random() value
      // value = "random(20, 40)" - random px between 20 and 40
      if (value.includes("random")) {
        // Generate a random start and end value between the range
        const [min, max] = value.match(/\d+/g) as string[];
        const random =
          Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) +
          parseInt(min);
        return { enter: `${random}px`, middle: "0px", exit: `${-random}px` };
      }
      console.log({ value, isPreset });
      return parseCustomValues(value, true);
    };

    const parseOpacity = (value: string): Pxx => {
      const isPreset = Object.values(OpacityPreset).includes(
        value as OpacityPreset
      );
      if (isPreset) return OPACITY_PRESETS[value as OpacityPreset];
      return parseCustomValues(value, false);
    };

    const translate = element.getAttribute("data-pxx-translate");
    if (!!translate) pxx.translate = parseTranslate(translate);

    const opacity = element.getAttribute("data-pxx-opacity");
    if (!!opacity) pxx.opacity = parseOpacity(opacity);

    return pxx;
  }

  private setPxxxProperties(element: HTMLElement, pxx: PxxParams) {
    console.log({ pxx });
    const { translate, opacity } = pxx;
    // Set CSS custom properties
    // Translate
    element.style.setProperty(
      "--pxx-enter-translate",
      `translate3d(0, ${translate.enter}, 0)`
    );
    element.style.setProperty(
      "--pxx-center-translate",
      `translate3d(0, ${translate.middle}, 0)`
    );
    element.style.setProperty(
      "--pxx-exit-translate",
      `translate3d(0, ${translate.exit}, 0)`
    );
    // Opacity
    element.style.setProperty("--pxx-enter-opacity", opacity.enter);
    element.style.setProperty("--pxx-center-opacity", opacity.middle);
    element.style.setProperty("--pxx-exit-opacity", opacity.exit);
  }
}

export { ParallaxX };
