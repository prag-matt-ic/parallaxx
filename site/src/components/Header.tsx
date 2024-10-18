import React, { type FC } from "react";
import { OpacityPreset } from "../../../dist";
import { twJoin } from "tailwind-merge";
import { HORIZONTAL_PADDING } from "./styles";

const Header: FC = () => {
  return (
    <header className="relative flex h-svh select-none flex-col items-center justify-center text-center bg-gradient-to-b from-light to-off-black">
      <div
        data-pxx-opacity={OpacityPreset.FADE_OUT}
        data-pxx-range="cover 50% cover 95%"
        className={twJoin(
          "flex-1 flex flex-col items-center w-full justify-end",
          HORIZONTAL_PADDING
        )}
      >
        <h1 className="flex font-chivo uppercase font-extrabold tracking-tighter !leading-tight text-[64px] -mb-5 sm:text-[120px] sm:-mb-9 xl:text-[160px] xl:-mb-12">
          Parallax<span className="text-[#A1F6D1]">X</span>
        </h1>
      </div>

      <div
        data-pxx-translate="0,0,-100px"
        data-pxx-range="normal cover 100%"
        className="relative w-full py-16 bg-mid flex items-center justify-center z-10"
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
  );
};

export default Header;
