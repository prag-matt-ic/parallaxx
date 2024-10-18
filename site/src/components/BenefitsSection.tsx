import React, { type CSSProperties, type FC, type ReactNode } from "react";
import { OpacityPreset } from "@parallaxx/toolkit";
import { twJoin } from "tailwind-merge";
import { HORIZONTAL_PADDING } from "./styles";

const BenefitsSection: FC = () => {
  return (
    <section
      className={twJoin(
        "relative -mt-40 grid grid-cols-1 lg:grid-cols-2 grid-rows-auto gap-y-16 overflow-clip py-40",
        HORIZONTAL_PADDING
      )}
    >
      <div className="grid grid-cols-12 gap-2 absolute inset-0">
        {/* map 40 elements from an empty array into <divs */}
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            data-pxx-opacity={OpacityPreset.FADE_IN_OUT}
            className="w-full h-full flex items-center justify-center"
          >
            <div
              className="bg-mid/40 aspect-square absolute rounded"
              data-pxx-translate="random(80|240),0,random(-80|-240)"
              style={getBackgroundBoxStyles()}
            />
          </div>
        ))}
      </div>

      <BenefitTextBlock
        heading="Fast"
        paragraph="By utilizing native browser capabilities and minimizing reliance on JavaScript, ParallaxX outperforms animation frameworks that compute animations on the main thread."
        isBenefit
      />
      <BenefitTextBlock
        heading="Simple"
        paragraph="Opinionated presets make it extremely easy to add nice parallax effects to your project."
      />
      <BenefitTextBlock
        heading="Accessible"
        paragraph="Respects user preferences for reduced motion."
      />
      <BenefitTextBlock
        heading="But Limited"
        paragraph={
          <span className="text-light-grey text-sm">
            Functionality is restricted by what browsers support natively. If
            you need advanced tweening, consider a more complete solution like
            GSAP
            <br />
            <br />
            &quot;overflow: hidden&quot; prevents effects from running on
            children. &quot;overflow: clip&quot; can be used instead.
            <br />
            <br />
            Only supports vertical scrolling and Y axis translations.
          </span>
        }
        isBenefit={false}
      />
    </section>
  );
};

function getBackgroundBoxStyles(): CSSProperties {
  // Random size between 16 and 200. In 8px steps.
  const size = Math.floor(Math.random() * 24) * 8 + 16;
  // random marginLeft between -240px and 240px
  const marginLeft = Math.floor(Math.random() * 60) * 8 - 240;
  // random marginTop between -120px and 120px
  const marginTop = Math.floor(Math.random() * 30) * 8 - 120;
  const margin = `${marginTop}px 0px 0px ${marginLeft}px`;
  return {
    width: size,
    height: size,
    margin: margin,
  };
}

const BenefitTextBlock: FC<{
  heading: string;
  paragraph: ReactNode;
  isBenefit?: boolean;
}> = ({ heading, paragraph, isBenefit = true }) => {
  return (
    <div
      data-pxx-opacity={OpacityPreset.FADE_IN}
      className="relative flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <div
          className={twJoin(
            "size-4 rounded-sm",
            isBenefit ? "bg-green" : "bg-red"
          )}
        />
        <h3 className="uppercase font-chivo text-4xl font-extrabold">
          {heading}
        </h3>
      </div>
      <p className="text-light-grey max-w-xl">{paragraph}</p>
    </div>
  );
};

export default BenefitsSection;
