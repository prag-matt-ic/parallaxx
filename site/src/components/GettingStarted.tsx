import React, { type PropsWithChildren, type FC } from "react";
import { twJoin } from "tailwind-merge";
import { HORIZONTAL_PADDING } from "./styles";

const CodeBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <code className="px-4 py-2 rounded bg-dark border border-mid w-fit">
      {children}
    </code>
  );
};

const GettingStarted: FC = () => {
  return (
    <section
      className={twJoin(
        "relative z-50 py-20 text-left bg-black",
        HORIZONTAL_PADDING
      )}
    >
      <div className="flex flex-col gap-6" data-pxx-opacity="0.1,1,1">
        <h2 className="font-chivo uppercase font-extrabold text-3xl">
          Getting Started
        </h2>

        <h3 className="text-lg">TODO: Install</h3>
        <CodeBlock>npm i @parallaxx/toolkit</CodeBlock>

        <h3 className="text-lg">TODO: Import</h3>
        <CodeBlock>
          {`import {ParallaxX, TranslatePreset, OpacityPreset, RangePreset} from "@parallaxx/toolkit";`}
          <br />
          {`import "@parallaxx/toolkit/dist/parallaxx.css";`}
        </CodeBlock>

        <h3 className="text-lg">TODO: Initialize</h3>
        <CodeBlock>
          {`useLayoutEffect(() => {
            new ParallaxX();
          }, [])`}
        </CodeBlock>

        <h3 className="font-bold text-white text-2xl">Use</h3>
        <CodeBlock>
          {`<div data-pxx-translate={TranslatePreset.FAST} data-pxx-opacity={OpacityPreset.FADE_IN} />`}
        </CodeBlock>
      </div>
    </section>
  );
};

export default GettingStarted;
