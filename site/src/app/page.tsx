'use client'

import '@parallaxx/toolkit/dist/parallaxx.css'

import { ParallaxX } from '@parallaxx/toolkit'
import Image from 'next/image'
import { useLayoutEffect } from 'react'
import { twJoin } from 'tailwind-merge'

import opacityIcon from '@/assets/icons/opacity.svg'
import rangeIcon from '@/assets/icons/range.svg'
import translateIcon from '@/assets/icons/translate.svg'
import BenefitsSection from '@/components/BenefitsSection'
import GettingStarted from '@/components/GettingStarted'
import Header from '@/components/Header'
import { HORIZONTAL_PADDING } from '@/components/styles'
import UsageSection from '@/components/UsageSection'

export default function ParralaxX() {
  useLayoutEffect(() => {
    new ParallaxX()
  }, [])

  return (
    <main className="bg-off-black w-full font-sans text-white">
      <div
        className={twJoin(
          HORIZONTAL_PADDING,
          'bg-red-800 fixed left-0 right-0 top-0 z-[100] flex w-full items-center justify-center bg-red py-2 text-sm font-semibold text-white',
        )}>
        This is in early development. Please share any ideas or issues on{' '}
        <a href="https://github.com/prag-matt-ic/parallaxx" target="_blank" rel="noreferrer" className="underline">
          Github
        </a>
      </div>

      <Header />

      <BenefitsSection />

      <GettingStarted />

      <UsageSection
        type="Translate"
        heading={<>Parallax Effects (Translate)</>}
        icon={<Image src={translateIcon} alt="translate" className="size-10 object-contain" />}
      />

      <UsageSection
        type="Opacity"
        className="bg-dark"
        heading={<>Fade Effects (Opacity)</>}
        icon={<Image src={opacityIcon} alt="opacity" className="size-10 object-contain" />}
      />

      <UsageSection
        type="Range"
        heading={<>Start and End (Timeline Range)</>}
        icon={<Image src={rangeIcon} alt="range" className="size-10 object-contain" />}
      />

      {/* Random - performance */}
      <section className={twJoin(HORIZONTAL_PADDING, 'relative my-32 h-[50vh]')}>
        <div className="absolute inset-0 grid grid-cols-[repeat(256,1fr)]">
          {new Array(256).fill('').map((_, i) => {
            return (
              <div
                key={i}
                className="h-full bg-black"
                data-pxx-range="contain 0% contain 100%"
                data-pxx-translate="0,random(-20|-160),-15vh"
              />
            )
          })}
        </div>
        <div className="relative h-full w-full py-12">
          <h2 className="text-2xl font-bold text-white">Random Values</h2>
          <p className="text-lg text-light-grey">256 elements with random translate values.</p>
          <code className="code text-green">
            {`<div data-pxx-range={RangePreset.CONTAIN} data-pxx-translate="0,random(-20|-160),-15vh" />`}
          </code>
        </div>
      </section>

      <footer></footer>
    </main>
  )
}
