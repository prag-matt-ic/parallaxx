export declare enum TranslatePreset {
    SLOW = "slow",
    SLOWER = "slower",
    FAST = "fast",
    FASTER = "faster"
}
export declare enum OpacityPreset {
    FULL = "full",
    HALF = "half",
    QUARTER = "quarter"
}
declare class ParallaxX {
    isReady: boolean;
    constructor();
    private init;
    private setupParallax;
    private getPxxx;
    private setPxxxProperties;
}
export { ParallaxX };
