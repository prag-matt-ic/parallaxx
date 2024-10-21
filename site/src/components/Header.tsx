import Image from 'next/image'
import React, { type FC } from 'react'
import { twJoin } from 'tailwind-merge'

import chromeIcon from '@/assets/chrome.svg'
import edgeIcon from '@/assets/edge.svg'
import firefoxIcon from '@/assets/firefox.svg'
import safariIcon from '@/assets/safari.svg'

import ParallaxBoxes from './ParallaxBoxes'
import { HORIZONTAL_PADDING } from './styles'

const Header: FC = () => {
  return (
    <header className="to-off-black relative flex h-svh select-none flex-col items-center justify-center bg-gradient-to-b from-light text-center">
      <ParallaxBoxes className="grid-cols-8" boxCount={32} boxClassName="bg-light/20" />

      <div
        // data-pxx-opacity={OpacityPreset.FADE_OUT}
        // data-pxx-range="cover 50% cover 95%"
        className={twJoin('relative flex w-full flex-1 flex-col items-center justify-end', HORIZONTAL_PADDING)}>
        <h1 className="-mb-5 flex font-chivo text-[64px] font-extrabold uppercase !leading-tight tracking-tighter sm:-mb-9 sm:text-[120px] xl:-mb-12 xl:text-[160px]">
          Parallax<span className="text-[#A1F6D1]">X</span>
        </h1>
      </div>

      <div
        data-pxx-translate="0,0,-80px"
        data-pxx-range="normal cover 100%"
        className="relative z-10 flex w-full items-center justify-center bg-mid py-20">
        <h2 className="z-10 max-w-2xl text-xl font-bold leading-relaxed text-white">
          A lightweight, framework-agnostic toolkit for implementing parallax and fade effects that leverage the native{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/ScrollTimeline"
            target="_blank"
            rel="noreferrer"
            className="underline">
            ScrollTimeline API
          </a>
        </h2>
      </div>

      <div
        data-pxx-translate="0,0,-120px"
        data-pxx-range="normal cover 80vh"
        className={twJoin(
          'relative z-20 flex w-full flex-col items-center justify-center gap-10 bg-black py-20',
          HORIZONTAL_PADDING,
        )}>
        <ul className="relative flex items-center gap-4 p-0 text-xl text-white">
          <li>✅ Minuscule footprint (&lt;5kb)</li>
          <li>✅ Easy to use</li>
          <li>✅ Maximum performance</li>
        </ul>
        <div className="relative flex items-center gap-2 text-light-grey">
          <Image src={chromeIcon} alt="Chrome" className="size-8 object-contain" />
          <Image src={edgeIcon} alt="Edge" className="size-8 object-contain" />
          <span className="">no polyfill</span>
          <Image src={safariIcon} alt="Safari" className="ml-4 size-8 object-contain" />
          <Image src={firefoxIcon} alt="Firefox" className="size-8 object-contain" />
          <span>with polyfill</span>
        </div>
      </div>
    </header>
  )
}

export default Header
