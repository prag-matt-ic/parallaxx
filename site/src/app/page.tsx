"use client";

import "@parallaxx/toolkit/dist/parallaxx.css";
import {
  OpacityPreset,
  ParallaxX,
  RangePreset,
  TranslatePreset,
} from "@parallaxx/toolkit";
import { useLayoutEffect } from "react";
import { twJoin } from "tailwind-merge";
import ConfigSection from "@/components/ConfigSection";
import { HORIZONTAL_PADDING } from "@/components/styles";

export default function ParralaxX() {
  useLayoutEffect(() => {
    new ParallaxX();
  }, []);

  return (
    <main className="w-full bg-off-black font-sans text-white">
      <header className="relative flex h-svh select-none flex-col items-center justify-center text-center">
        <div
          className={twJoin(
            HORIZONTAL_PADDING,
            "relative bg-red-800 text-white top-0 w-full flex text-sm font-semibold items-center justify-center py-3 left-0 right-0 z-[100]"
          )}
        >
          This is in early development and there are likely to be breaking
          changes as the toolkit evolves.
        </div>
        <div
          className={twJoin(
            "flex-1 flex flex-col items-center w-full justify-center",
            HORIZONTAL_PADDING
          )}
        >
          <h1
            className="flex items-center font-extrabold gap-4 tracking-tighter"
            data-pxx-translate="0px,0px,-15vh"
            data-pxx-opacity="1,1,0.3"
            data-pxx-range="cover 50% contain 100%"
          >
            <span className="text-[#569CD6] block !leading-normal code text-xl md:text-3xl">
              new
            </span>{" "}
            <span className="text-green block code leading-tight lg:text-[7.5vmax]">
              ParallaxX
            </span>
          </h1>
          <h2 className="text-2xl text-green/70 font-semibold">
            The quickest way to configure rediculously smooth parallax effects
          </h2>
        </div>

        <div
          className={twJoin(
            "relative flex w-full z-20 flex-col items-center gap-10 justify-center py-24 bg-black",
            HORIZONTAL_PADDING
          )}
        >
          <h2 className="relative z-10 max-w-3xl text-xl font-bold leading-relaxed text-white">
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
          <ul className="relative flex items-center gap-4 p-0 text-white text-lg">
            <li>✅ Miniscule footprint (5kb)</li>
            <li>✅ Easy to use</li>
            <li>✅ Maximum performance</li>
          </ul>
          <p className="relative text-light-grey">
            Chrome/Edge: no polyfill, Safari: with polyfill
          </p>
        </div>
      </header>

      <section
        data-pxx-opacity="0,1,1"
        className={twJoin(
          "py-20 grid grid-cols-2 items-stretch gap-10 xl:gap-16",
          HORIZONTAL_PADDING
        )}
      >
        {/* Benefits */}
        <div className="space-y-4" data-pxx-translate="80px,0,0">
          <h2 className="text-2xl font-bold">Benefits</h2>
          <p className="text-lg">
            <span className="font-bold">Fast:</span> By using native browser
            capabilities and minimizing reliance on JavaScript, ParallaxX
            outperforms animation frameworks that compute animations on the main
            thread.
            <br />
            <br />
            <span className="font-bold">Simple:</span> Opinionated presets makes
            it extremely easy to add nice parallax effects to your project.
            <br />
            <br />
            <span className="font-bold">Accessible:</span> Respects user
            preferences for reduced motion.
          </p>
        </div>

        {/* Limitations */}
        <div
          className="space-y-4 text-light-grey"
          data-pxx-translate="160px,0,0"
        >
          <h2 className="text-2xl font-bold">Limitations</h2>
          <p className="text-lg">
            Functionality is restricted by what browsers support natively. If
            you need advanced tweening, consider a more complete solution like
            GSAP.
            <br />
            <br />
            overflow: hidden prevents effects from running on children.
            <br />
            <br />
            Currently only setup to support vertical scrolling and Y axis
            translations.
          </p>
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

      {/* Getting Started */}
      <section
        className={twJoin(
          "py-20 text-left bg-black  text-light-grey",
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

      {/* Showcae */}
      <section className={twJoin(HORIZONTAL_PADDING, "h-80 py-20")}>
        <h2 className="text-2xl font-bold text-light-grey">
          Showcase coming soon...
        </h2>
      </section>

      <footer></footer>
    </main>
  );
}
