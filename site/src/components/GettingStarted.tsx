import React, { type FC } from "react";
import { twJoin } from "tailwind-merge";
import { HORIZONTAL_PADDING } from "./styles";

const GettingStarted: FC = () => {
  return (
    <section
      className={twJoin(
        "relative z-50 py-20 text-left bg-black  text-light-grey",
        HORIZONTAL_PADDING
      )}
    >
      <div className="flex flex-col gap-4" data-pxx-opacity="0.1,1,1">
        <h2 className="text-sm uppercase font-light">Getting Started</h2>
        <h3 className="font-bold text-white text-2xl">Install</h3>
        <code className="">npm i @parallaxx/toolkit</code>

        <h3 className="font-bold text-white text-2xl">Import</h3>
        <code>
          {`import {ParallaxX, TranslatePreset, OpacityPreset, RangePreset} from "@parallaxx/toolkit";`}
          <br />
          {`import "@parallaxx/toolkit/dist/parallaxx.css";`}
        </code>

        <h3 className="font-bold text-white text-2xl">Initialize</h3>
        <code>
          {`useLayoutEffect(() => {
            new ParallaxX();
          }, [])`}
        </code>

        <h3 className="font-bold text-white text-2xl">Use</h3>
        <code>
          {`<div data-pxx-translate={TranslatePreset.FAST} data-pxx-opacity={OpacityPreset.FADE_IN} />`}
        </code>
      </div>
    </section>
  );
};

export default GettingStarted;
