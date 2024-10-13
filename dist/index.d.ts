export declare enum TranslatePreset {
  SLOW = "50%,0%,-50%",
  SLOWER = "100%,0%,-100%",
  FAST = "200%,0%,-200%",
  FASTER = "300%,0%,-300%",
}
export declare enum OpacityPreset {
  FULL = "0,1,0",
  HALF = "0.5,1,0.5",
  QUARTER = "0.25,1,0.25",
}
export declare enum RangePreset {
  COVER = "cover 0% cover 100%",
  CONTAIN = "contain 0% contain 100%",
}
declare class ParallaxX {
  constructor();
  private init;
  private setupParallax;
  private getPxxx;
  private setPxxxProperties;
}
export { ParallaxX };
