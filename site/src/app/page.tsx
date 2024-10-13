"use client";

// Import the CSS
import "@parallaxx/toolkit/dist/parallaxx.css";
// Import the ParallaxX class and optional preset enums
import {
  OpacityPreset,
  ParallaxX,
  RangePreset,
  TranslatePreset,
} from "@parallaxx/toolkit";
import { useLayoutEffect } from "react";
import { twJoin } from "tailwind-merge";
import ConfigSection from "@/components/ConfigSection";

const HORIZONTAL_PADDING = "w-full px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48";

export default function ParralaxX() {
  // Initialize ParallaxX
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
          <h2 className="relative z-10 max-w-4xl text-3xl font-bold leading-relaxed text-white">
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
            By using native browser capabilities and minimizing reliance on
            JavaScript, ParallaxX outperforms animation frameworks that compute
            animations on the main thread.
            <br />
            <br />
            Opinionated presets makes it extremely easy to add nice parallax
            effects to your project.
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
          <>{/* TODO: explain how these are fed into variables */}</>
        }
        examples={[
          {
            label: "Faster",
            attributes: {
              "data-pxx-translate": TranslatePreset.FASTER,
            },
          },
          {
            label: "Fast",
            attributes: {
              "data-pxx-translate": TranslatePreset.FAST,
            },
          },
          {
            label: "Slow",
            attributes: {
              "data-pxx-translate": TranslatePreset.SLOW,
            },
          },
          {
            label: "Slower",
            attributes: {
              "data-pxx-translate": TranslatePreset.SLOWER,
            },
          },
          {
            label: "Custom",
            attributes: {
              "data-pxx-translate": "240px,0px,-640px",
            },
          },
          {
            label: "Random",
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
          {
            label: "Full (0%)",
            attributes: {
              "data-pxx-opacity": OpacityPreset.FULL,
            },
          },
          {
            label: "Quarter (25%)",
            attributes: {
              "data-pxx-opacity": OpacityPreset.QUARTER,
            },
          },
          {
            label: "Half (50%)",
            attributes: {
              "data-pxx-opacity": OpacityPreset.HALF,
            },
          },
          {
            label: "Custom\n0% - 100% - 100%",
            attributes: {
              "data-pxx-opacity": "0,1,1",
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
          {
            label: "COVER",
            attributes: {
              "data-pxx-opacity": OpacityPreset.FULL,
              "data-pxx-range": RangePreset.COVER,
            },
          },
          {
            label: "CONTAIN",
            attributes: {
              "data-pxx-opacity": OpacityPreset.FULL,
              "data-pxx-range": RangePreset.CONTAIN,
            },
          },
          {
            label: "CUSTOM",
            attributes: {
              "data-pxx-opacity": "1,1,0",
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
    </main>
  );
}
