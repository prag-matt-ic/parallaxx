"use client";

import "@parallaxx/toolkit/dist/parallaxx.css";
import {
  OpacityPreset,
  ParallaxX,
  RangePreset,
  TranslatePreset,
} from "@parallaxx/toolkit";
import { CSSProperties, FC, ReactNode, useLayoutEffect } from "react";
import { twJoin } from "tailwind-merge";
import ConfigSection from "@/components/ConfigSection";
import { HORIZONTAL_PADDING } from "@/components/styles";

export default function ParralaxX() {
  useLayoutEffect(() => {
    new ParallaxX();
  }, []);

  return (
    <main className="w-full bg-off-black font-sans text-white">
      <div
        className={twJoin(
          HORIZONTAL_PADDING,
          "fixed bg-red-800 text-white top-0 w-full flex bg-red text-sm font-semibold items-center justify-center py-2 left-0 right-0 z-[100]"
        )}
      >
        This is in early development. Please share any ideas or issues on{" "}
        <a
          href="https://github.com/prag-matt-ic/parallaxx"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Github
        </a>
      </div>

      <header className="relative flex h-svh select-none flex-col items-center justify-center text-center bg-gradient-to-b from-light to-off-black to-70%">
        <div
          data-pxx-opacity={OpacityPreset.FADE_OUT}
          data-pxx-range="cover 50% cover 95%"
          className={twJoin(
            "flex-1 flex flex-col items-center w-full justify-end",
            HORIZONTAL_PADDING
          )}
        >
          <h1 className="flex font-chivo items-center uppercase font-extrabold gap-4 tracking-tighter leading-tight text-[10vmax]">
            Parallax<span className="text-[#A1F6D1]">X</span>
          </h1>
        </div>

        <div
          data-pxx-translate="0,0,-100px"
          data-pxx-range="normal cover 100%"
          className="relative w-full py-20 bg-mid flex items-center justify-center z-10 -mt-[6vh]"
        >
          <h2 className="z-10 max-w-2xl text-xl font-bold leading-relaxed text-white">
            A lightweight, framework-agnostic toolkit for implementing parallax
            and fade effects that leverage the native{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/ScrollTimeline"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              ScrollTimeline API
            </a>
          </h2>
        </div>

        <div
          data-pxx-translate="0,0,-160px"
          data-pxx-range="normal cover 80vh"
          className={twJoin(
            "relative flex w-full z-20 flex-col items-center gap-10 justify-center py-16 bg-black",
            HORIZONTAL_PADDING
          )}
        >
          <ul className="relative flex items-center gap-4 p-0 text-white text-lg">
            <li>✅ Minuscule footprint (&lt;5kb)</li>
            <li>✅ Easy to use</li>
            <li>✅ Maximum performance</li>
          </ul>
          <p className="relative text-light-grey">
            Chrome/Edge: no polyfill, Firefox/Safari: with polyfill
          </p>
        </div>
      </header>

      <section
        className={twJoin(
          "relative grid grid-cols-1 lg:grid-cols-2 grid-rows-auto gap-y-16 overflow-clip pt-16 pb-40",
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
                data-pxx-translate="random(40|240),0,random(-40|-240)"
                style={getBenefitBoxStyles()}
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

      {/* Getting Started */}
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

      <ConfigSection
        heading="Translate"
        description={
          <p className="text-light-grey max-w-lg">
            Simply add the <span className="font-bold">data-pxx-translate</span>{" "}
            attribute to an element.
            <br />
            There are {Object.keys(TranslatePreset).length} Translate Presets to
            choose from, or you can use a custom value...
            <br />
            <br />
            The custom value must be 3 comma separated string values. These set
            the enter (0%), middle (50%), and exit (100%) values of the Y
            translation as the element moves through the view. The values can be
            any valid CSS translate3d value.
            <br />
            <br />
            For example, &quot;100px,0px,0px&quot; will move the element up from
            100px to 0px as it enters and aligns in the viewport.
            <br />
          </p>
        }
        examples={[
          ...Object.keys(TranslatePreset).map((key) => {
            return {
              label: key,
              displayAttributes: `data-pxx-translate={TranslatePreset.${key}}`,
              attributes: {
                "data-pxx-translate":
                  TranslatePreset[key as keyof typeof TranslatePreset],
              },
            };
          }),
          {
            label: "Custom",
            displayAttributes: `data-pxx-translate="240px,0px,-640px"`,
            attributes: {
              "data-pxx-translate": "240px,0px,-640px",
            },
          },
          {
            label: "Random",
            displayAttributes: `data-pxx-translate="random(20|200),0,random(-20|-200)"`,
            attributes: {
              "data-pxx-translate": "random(20|200),0,random(-20|-200)",
            },
          },
        ]}
      />

      <ConfigSection
        heading="Opacity"
        description={
          <>{/* TODO: explain how these are fed into variables */}</>
        }
        examples={[
          ...Object.keys(OpacityPreset).map((key) => {
            return {
              label: key,
              displayAttributes: `data-pxx-opacity={OpacityPreset.${key}}`,
              attributes: {
                "data-pxx-opacity":
                  OpacityPreset[key as keyof typeof OpacityPreset],
              },
            };
          }),
          {
            label: "Custom",
            displayAttributes: `data-pxx-opacity="0.2,1.0,0.6"`,
            attributes: {
              "data-pxx-opacity": "0.2,1.0,0.6",
            },
          },
        ]}
      />

      <ConfigSection
        heading="Animation Range"
        description={
          <p className="max-w-lg">
            The range controls when the animation timeline starts and ends.
            <br />
            <br />
            With &quot;cover&quot; (default) the timeline begins as the element
            starts to enter the view, and ends when it has completely left.
            <br />
            With &quot;contain&quot; it begins after the entire element has
            entered the view, and ends before it starts to leave.
          </p>
        }
        examples={[
          ...Object.keys(RangePreset).map((key) => {
            return {
              label: key,
              displayAttributes: `data-pxx-range={RangePreset.${key}} data-pxx-opacity={OpacityPreset.FADE_IN_OUT}`,
              attributes: {
                "data-pxx-opacity": OpacityPreset.FADE_IN_OUT,
                "data-pxx-range": RangePreset[key as keyof typeof RangePreset],
              },
            };
          }),
          {
            label: "Custom",
            displayAttributes: `data-pxx-range="contain 0% contain 60%" data-pxx-opacity={OpacityPreset.FADE_IN_OUT}`,
            attributes: {
              "data-pxx-opacity": OpacityPreset.FADE_IN_OUT,
              "data-pxx-range": "contain 0% contain 60%",
            },
          },
        ]}
      />
      {/* Random - performance */}
      <section
        className={twJoin(HORIZONTAL_PADDING, "h-[50vh] relative my-32")}
      >
        <div className="absolute inset-0 grid grid-cols-[repeat(256,1fr)]">
          {new Array(256).fill("").map((_, i) => {
            return (
              <div
                key={i}
                className="h-full bg-black"
                data-pxx-range="contain 0% contain 100%"
                data-pxx-translate="0,random(-20|-160),-15vh"
              />
            );
          })}
        </div>
        <div className="relative w-full h-full py-12">
          <h2 className="text-2xl font-bold text-white">Random Values</h2>
          <p className="text-lg text-light-grey">
            256 elements with random translate values.
          </p>
          <code className="code text-green">
            {`<div data-pxx-range={RangePreset.CONTAIN} data-pxx-translate="0,random(-20|-160),-15vh" />`}
          </code>
        </div>
      </section>

      <footer></footer>
    </main>
  );
}

function getBenefitBoxStyles(): {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  margin: CSSProperties["margin"];
} {
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
