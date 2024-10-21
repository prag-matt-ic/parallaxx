import { OpacityPreset } from '@parallaxx/toolkit'
import React, { type CSSProperties, type FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  boxCount?: number
  boxClassName?: string
}

const ParallaxBoxes: FC<Props> = ({ className, boxCount = 48, boxClassName }) => {
  return (
    <div className={twMerge('absolute inset-0 grid grid-cols-12 gap-2 overflow-clip', className)}>
      {Array.from({ length: boxCount }).map((_, i) => (
        <div
          key={i}
          data-pxx-opacity={OpacityPreset.FADE_IN_OUT}
          className="flex h-full w-full items-center justify-center">
          <div
            className={twMerge('absolute aspect-square rounded bg-mid/30', boxClassName)}
            data-pxx-translate="random(80|240),0,random(-80|-240)"
            style={getBackgroundBoxStyles()}
          />
        </div>
      ))}
    </div>
  )
}

export default ParallaxBoxes

function getBackgroundBoxStyles(): CSSProperties {
  // Random size between 16 and 200. In 8px steps.
  const size = Math.floor(Math.random() * 24) * 8 + 16
  // random marginLeft between -240px and 240px
  const marginLeft = Math.floor(Math.random() * 60) * 8 - 240
  // random marginTop between -120px and 120px
  const marginTop = Math.floor(Math.random() * 30) * 8 - 120
  const margin = `${marginTop}px 0px 0px ${marginLeft}px`
  return {
    width: size,
    height: size,
    margin: margin,
  }
}
