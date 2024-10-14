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
    <main className="w-full bg-off-black font-sans">
      <header className="relative flex h-svh select-none flex-col items-center justify-center text-center">
        <div
          className={twJoin(
            "flex-1 flex items-center w-full justify-center",
            HORIZONTAL_PADDING
          )}
        >
          <h1
            className="code relative z-20 overflow-hidden rounded-lg border-4 border-light-grey/40 bg-black px-12 py-4 text-3xl font-extrabold leading-normal tracking-tight text-white lg:text-[6vmax]"
            data-pxx-translate="0px,0px,-80px"
            data-pxx-opacity="1.0,1.0,0.0"
            data-pxx-range="cover 75% cover 100%"
          >
            <span className="text-[#569CD6]">new</span>{" "}
            <span className="text-green">ParallaxX</span>
            <span className="text-[#FFD602]">()</span>
          </h1>
        </div>

        <div
          className={twJoin(
            "flex w-full flex-col items-center gap-10 justify-center bg-black py-20",
            HORIZONTAL_PADDING
          )}
          data-pxx-opacity="1,1,0.0"
        >
          <h2 className="relative z-10 max-w-3xl text-2xl font-bold leading-relaxed text-white">
            A lightweight, framework-agnostic toolkit for implementing smooth
            parallax and fade effects that leverage the native{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/ScrollTimeline"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              ScrollTimeline API
            </a>
          </h2>
          <ul className="flex items-center gap-4 p-0 text-white text-lg">
            <li>✅ Miniscule footprint (5kb)</li>
            <li>✅ Easy to use</li>
            <li>✅ Maximum performance</li>
          </ul>
          <p className="py-4 text-light-grey">
            Chrome/Edge: no polyfill, Safari: with polyfill
          </p>
        </div>
      </header>

      <section
        data-pxx-opacity="0,1,1"
        className={twJoin(
          "py-20 grid grid-cols-2 items-stretch gap-10 xl:gap-16 text-light-grey",
          HORIZONTAL_PADDING
        )}
      >
        <div className="space-y-4">
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
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Limitations</h2>
          <p className="text-lg">
            Functionality is restricted by what browsers support natively. If
            you need advanced tweening, consider a more complete solution like
            GSAP.
            <br />
            <br />
            overflow: hidden prevents effects from running on children.
          </p>
        </div>
      </section>

      <ConfigSection
        heading="Translate"
        description={
          <p className="text-white">
            The &apos;data-pxx-translate&apos; property accepts a preset, or 3
            comma separated string values. These 3 values set the enter (0%),
            middle (50%), and exit (100%) values of the Y translation.
            <br />
            For example, &apos;100px,0px,0px&apos; will move the element up from
            100px to 0px as it enters the viewport.
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
            displayAttributes: `data-pxx-translate="random(20,200)"`,
            attributes: {
              "data-pxx-translate": "random(20,200)",
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
          <>{/* TODO: explain how these are fed into variables */}</>
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
            displayAttributes: `data-pxx-range="contain 50% contain 100%" data-pxx-opacity={OpacityPreset.FADE_IN_OUT}`,
            attributes: {
              "data-pxx-opacity": OpacityPreset.FADE_IN_OUT,
              "data-pxx-range": "contain 50% contain 100%",
            },
          },
        ]}
      />

      {/* Getting Started */}
      <section
        className={twJoin(
          "py-20 text-center flex bg-black flex-col gap-4 items-center text-light-grey",
          HORIZONTAL_PADDING
        )}
      >
        <h2 className="text-sm">Getting Started</h2>
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
          {`<div data-pxx-translate={TranslatePreset.FAST} data-pxx-opacity={OpacityPreset.HALF} />`}
        </code>
      </section>

      {/* Showcae */}
      <section className={twJoin(HORIZONTAL_PADDING, "h-svh py-20")}>
        <h2 className="text-2xl font-bold text-light-grey">
          Showcase coming soon...
        </h2>
      </section>

      {/* TODO: add performance testing. */}
    </main>
  );
}
