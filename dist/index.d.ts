export declare enum TranslatePreset {
    SLIDE_IN = "50%,0%,0%",
    SLOWER = "50%,0%,-50%",
    SLOW = "100%,0%,-100%",
    FAST = "200%,0%,-200%",
    FASTER = "300%,0%,-300%"
}
export declare enum OpacityPreset {
    FADE_IN = "0,1,1",
    FADE_IN_OUT = "0,1,0",
    HALF_FADE_IN = "0.5,1,1",
    HALF_FADE_IN_OUT = "0.5,1,0.5"
}
export declare enum RangePreset {
    COVER = "cover 0% cover 100%",
    CONTAIN = "contain 0% contain 100%"
}
declare class ParallaxX {
    constructor();
    private init;
    private setupParallax;
    private getPxxx;
    private setPxxxProperties;
}
export { ParallaxX };
