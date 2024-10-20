import { OpacityPreset } from '@parallaxx/toolkit'
import React, { type FC, type ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

import ParallaxBoxes from './ParallaxBoxes'
import { HORIZONTAL_PADDING } from './styles'

const BenefitsSection: FC = () => {
  return (
    <section
      className={twJoin(
        'grid-rows-auto relative -mt-32 grid grid-cols-1 gap-y-16 overflow-clip bg-gradient-to-b from-mid to-black py-40 lg:grid-cols-2',
        HORIZONTAL_PADDING,
      )}>
      <ParallaxBoxes />

      <BenefitTextBlock
        heading="Fast"
        paragraph="By utilizing native browser capabilities and minimizing reliance on JavaScript, ParallaxX outperforms animation frameworks that compute animations on the main thread."
        isBenefit
      />
      <BenefitTextBlock heading="Accessible" paragraph="Respects user preferences for reduced motion." />
      <BenefitTextBlock
        heading="Simple"
        paragraph="Opinionated presets make it extremely easy to add nice parallax effects to your project. Plus there's no need to write a single line of CSS."
      />
      <BenefitTextBlock
        heading="Limited"
        paragraph={
          <span className="text-sm">
            Functionality is restricted by what browsers support natively. If you need advanced tweening, consider a
            more complete solution like GSAP
            <br />
            <br />
            &quot;overflow: hidden&quot; prevents effects from running on children. &quot;overflow: clip&quot; can be
            used instead.
            <br />
            <br />
            Only supports vertical scrolling and Y axis translations (at the moment).
          </span>
        }
        isBenefit={false}
      />
    </section>
  )
}

const BenefitTextBlock: FC<{
  heading: string
  paragraph: ReactNode
  isBenefit?: boolean
}> = ({ heading, paragraph, isBenefit = true }) => {
  return (
    <div data-pxx-opacity={OpacityPreset.FADE_IN} className="relative flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className={twJoin('size-3 rounded-sm', isBenefit ? 'bg-green' : 'bg-red')} />
        <h3 className="font-chivo text-4xl font-extrabold uppercase">{heading}</h3>
      </div>
      <p className="max-w-xl text-lg text-light-grey">{paragraph}</p>
    </div>
  )
}

export default BenefitsSection
