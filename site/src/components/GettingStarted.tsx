import React, { type FC } from "react";
import { twJoin } from "tailwind-merge";
import { H2_CLASS, H3_CLASS, HORIZONTAL_PADDING } from "./styles";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import shell from "highlight.js/lib/languages/shell";
import xml from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("shell", shell);
hljs.registerLanguage("xml", xml);

const CodeBlock: FC<{ code: string; language?: string }> = ({
  code,
  language = "jsx",
}) => {
  const highlightedCode = hljs.highlight(code, {
    language,
  }).value;

  return (
    <code
      className="px-4 py-2 rounded bg-dark border border-mid w-fit text-xs sm:text-base whitespace-pre-wrap max-w-full overflow-hidden overflow-scroll"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
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
        <h2 className={H2_CLASS}>Getting Started</h2>

        <div className="flex flex-col gap-3">
          <h3 className={H3_CLASS}>Install</h3>
          <CodeBlock
            language="shell"
            code="npm i @parallaxx/toolkit"
          ></CodeBlock>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className={H3_CLASS}>Import</h3>
          <CodeBlock
            language="javascript"
            code={`import {ParallaxX, TranslatePreset, OpacityPreset, RangePreset} from "@parallaxx/toolkit";\nimport "@parallaxx/toolkit/dist/parallaxx.css";`}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className={H3_CLASS}>Initialize</h3>
          <CodeBlock
            code={`useLayoutEffect(() => {\n  new ParallaxX()\n}, [])`}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className={H3_CLASS}>Use</h3>
          <CodeBlock
            language="xml"
            code={`<div data-pxx-translate={TranslatePreset.FAST} data-pxx-opacity={OpacityPreset.FADE_IN} />`}
          />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
