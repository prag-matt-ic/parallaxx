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
import Header from "@/components/Header";
import BenefitsSection from "@/components/BenefitsSection";
import GettingStarted from "@/components/GettingStarted";

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

      <Header />

      <BenefitsSection />

      <GettingStarted />

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
