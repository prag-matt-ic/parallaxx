import React, { type FC } from "react";
import { TranslatePreset } from "../../../dist";

const boxClasses =
  "relative flex size-24 items-center rounded text-sm font-medium select-none justify-center bg-light-grey p-1 uppercase";

const controlLineClasses = "absolute h-1 w-full bg-light-grey/10";

const ConfigSection: FC = () => {
  return (
    <section className="relative grid grid-rows-1 grid-cols-[auto_1fr] w-full py-32">
      <div className="bg-light-grey/10 p-8 *:block rounded-tr-md rounded-br-md">
        <h2 className="text-3xl font-extrabold text-white">Translate</h2>
        <p>{/* Mention presets and custom values */}</p>
        <code>{`<div data-pxx-translate={TranslatePreset.FASTER} />`}</code>
        <code>{`<div data-pxx-translate={TranslatePreset.FAST} />`}</code>
        <code>{`<div data-pxx-translate={TranslatePreset.SLOW} />`}</code>
        <code>{`<div data-pxx-translate={TranslatePreset.SLOWER} />`}</code>
        <code>{`<div data-pxx-translate="240px,0px,-640px" />`}</code>
        <code>{`<div data-pxx-translate="random(20,200)" />`}</code>
      </div>

      <div className="relative flex items-center justify-center gap-8">
        <div className={controlLineClasses} />

        <div className={boxClasses} data-pxx-translate={TranslatePreset.FASTER}>
          <span>Faster</span>
        </div>

        <div className={boxClasses} data-pxx-translate={TranslatePreset.FAST}>
          <span>Fast</span>
        </div>

        <div className={boxClasses} data-pxx-translate={TranslatePreset.SLOW}>
          <span>Slow</span>
        </div>

        <div className={boxClasses} data-pxx-translate={TranslatePreset.SLOWER}>
          <span>Slower</span>
        </div>

        <div className={boxClasses} data-pxx-translate="240px,0px,-640px">
          <span>Custom</span>
        </div>

        <div className={boxClasses} data-pxx-translate="random(20,200)">
          <span>Random</span>
        </div>
      </div>
    </section>
  );
};

export default ConfigSection;
