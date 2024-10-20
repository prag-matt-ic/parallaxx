import React, { type FC } from 'react'
import { twJoin } from 'tailwind-merge'

import CodeBlock from './CodeBlock'
import { H2_CLASS, H3_CLASS, HORIZONTAL_PADDING } from './styles'

const GettingStarted: FC = () => {
  return (
    <section className={twJoin('relative z-50 bg-black py-20 text-left', HORIZONTAL_PADDING)}>
      <div className="flex flex-col gap-6" data-pxx-opacity="0.1,1,1">
        <h2 className={H2_CLASS}>Getting Started</h2>

        <div className="flex flex-col gap-3">
          <h3 className={H3_CLASS}>Install</h3>
          <CodeBlock language="shell" code="npm i @parallaxx/toolkit" />
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
          <CodeBlock code={`useLayoutEffect(() => {\n  new ParallaxX()\n}, [])`} />
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
  )
}

export default GettingStarted
