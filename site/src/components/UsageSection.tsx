import { OpacityPreset, RangePreset, TranslatePreset } from '@parallaxx/toolkit'
import React, { type FC, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import CodeBlock from './CodeBlock'
import { H2_CLASS, H3_CLASS, HORIZONTAL_PADDING } from './styles'

const exampleClasses =
  'relative flex h-32 min-w-24 items-center text-white rounded text-xs md:text-sm font-medium text-light-grey select-none justify-center bg-black p-3'

const DESCRIPTIONS: Record<Props['type'], ReactNode> = {
  Translate: (
    <>
      Translate the element along the Y-axis as it moves through the view.
      <br />
      <br />
      <CodeBlock language="xml" code={`<div data-pxx-translate={TranslatePreset.FAST} />`} />
    </>
  ),
  Opacity: (
    <>
      Fade the element as it moves through the view.
      <br />
      <br />
      <CodeBlock language="xml" code={`<div data-pxx-opacity={OpacityPreset.FADE_IN} />`} />
    </>
  ),
  Range: (
    <>
      Control when the animation timeline starts and ends.
      <br />
      <br />
      <CodeBlock language="xml" code={`<div data-pxx-range={RangePreset.CONTAIN} />`} />
      <br />
      With &quot;cover&quot; (default) the timeline begins as the element starts to enter the view, and ends when it has
      completely left. With &quot;contain&quot; it begins after the entire element has entered the view, and ends before
      it starts to leave.
    </>
  ),
} as const

const PRESET_EXAMPLES: Record<Props['type'], ReactNode[]> = {
  Translate: Object.keys(TranslatePreset).map((key) => {
    return (
      <div
        key={key}
        data-pxx-translate={TranslatePreset[key as keyof typeof TranslatePreset]}
        className={exampleClasses}>
        TranslatePreset.{key}
      </div>
    )
  }),
  Opacity: Object.keys(OpacityPreset).map((key) => {
    return (
      <div key={key} data-pxx-opacity={OpacityPreset[key as keyof typeof OpacityPreset]} className={exampleClasses}>
        OpacityPreset.{key}
      </div>
    )
  }),
  Range: Object.keys(RangePreset).map((key) => {
    return (
      <div
        key={key}
        data-pxx-range={RangePreset[key as keyof typeof RangePreset]}
        data-pxx-opacity={OpacityPreset.FADE_IN_OUT}
        className={exampleClasses}>
        RangePreset.{key}
      </div>
    )
  }),
} as const

const CUSTOM_DESCRIPTIONS: Record<Props['type'], ReactNode> = {
  Translate: (
    <>
      Custom values must be 3 comma separated string values. These define the enter (0%), middle (50%), and exit (100%)
      values of the Y translation as the element moves through the view. Values can be any valid{' '}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d"
        className="underline"
        target="_blank"
        rel="noreferrer">
        CSS translate3d
      </a>{' '}
      value.
      <br />
      <br />
      <CodeBlock language="xml" code={`<div data-pxx-translate="10vh,0,-10vh" />`} />
      <br />
      The above example will animate the element from 10vh as it enters the view, to 0 as it aligns in the viewport, and
      then to -10vh as it exits at the top.
    </>
  ),
  Opacity: (
    <>
      Custom values must be 3 comma separated string values. These define the enter (0%), middle (50%), and exit (100%)
      opacity values as the element moves through the view. Values can be any number between 0 and 1.
      <br />
      <br />
      <CodeBlock language="xml" code={`<div data-pxx-opacity="0.2,1,0.6" />`} />
      <br />
      In this example the element will fade from 20% opacity to 100% as it enters and aligns in the viewport, and then
      down to 60% as it exits at the top.
    </>
  ),
  Range: <></>,
} as const

const CUSTOM_EXAMPLES: Record<Props['type'], ReactNode> = {
  Translate: (
    <>
      <div data-pxx-translate="10vh,0,-10vh" className={exampleClasses}>
        &quot;10vh,0,-10vh&quot;
      </div>
      <div data-pxx-translate="random(80|200),0,random(-80|-200)" className={exampleClasses}>
        Random Values
        <br />
        &quot;random(80|200),0,random(-80|-200)&quot;
      </div>
      <div data-pxx-translate="random(80|200),0,random(-80|-200)" className={exampleClasses}>
        Random Values
        <br />
        &quot;random(80|200),0,random(-80|-200)&quot;
      </div>
    </>
  ),
  Opacity: (
    <>
      <div data-pxx-opacity="0.2,1.0,0.6" className={exampleClasses}>
        &quot;0.2,1.0,0.6&quot;
      </div>
      <div data-pxx-opacity="1.0,1.0,0.3" className={exampleClasses}>
        &quot;1.0,1.0,0.3&quot;
      </div>
    </>
  ),
  Range: (
    <div
      data-pxx-range="contain 0% contain 60%"
      data-pxx-opacity={OpacityPreset.FADE_IN_OUT}
      className={exampleClasses}>
      OpacityPreset.FADE_IN_OUT
      <br />
      &quot;contain 0% contain 60%&quot;
    </div>
  ),
} as const

type Props = {
  heading: ReactNode
  icon: ReactNode
  type: 'Translate' | 'Opacity' | 'Range'
  className?: string
}

const UsageSection: FC<Props> = ({ heading, icon, type, className }) => {
  const renderExamples = (nodes: ReactNode): ReactNode => (
    <div className="relative flex w-fit items-center justify-center gap-4 py-20">
      <div className="absolute -left-6 size-3 rounded-sm bg-green" />
      {nodes}
    </div>
  )

  return (
    <section className={twMerge('HORIZONTAL_PADDINGrelative space-y-10 bg-mid py-24', HORIZONTAL_PADDING, className)}>
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className={H2_CLASS}>{heading}</h2>
        </div>
        <p className="max-w-xl text-light-grey">{DESCRIPTIONS[type]}</p>
      </header>

      <div className="space-y-2">
        <h3 className={H3_CLASS}>{type} Presets</h3>
        <p className="max-w-xl text-light-grey">
          There are {PRESET_EXAMPLES[type].length} {type} Presets to choose from:
        </p>
        {renderExamples(PRESET_EXAMPLES[type])}
      </div>

      <div className="space-y-2">
        <h3 className={H3_CLASS}>Custom Values</h3>
        <p className="max-w-xl text-light-grey">{CUSTOM_DESCRIPTIONS[type]}</p>
        {renderExamples(CUSTOM_EXAMPLES[type])}
      </div>
    </section>
  )
}

export default UsageSection
