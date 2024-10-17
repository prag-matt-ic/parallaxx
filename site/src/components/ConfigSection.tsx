import React, { type ReactNode, type FC } from "react";
import { twJoin } from "tailwind-merge";
import { HORIZONTAL_PADDING } from "./styles";

type Example = {
  label: string;
  displayAttributes: string;
  attributes: Record<string, string>;
};

type Props = {
  heading: ReactNode;
  description: ReactNode;
  examples: Example[];
};

const ConfigSection: FC<Props> = ({
  heading,
  description = null,
  examples,
}) => {
  return (
    <section
      className={twJoin(
        HORIZONTAL_PADDING,
        "relative grid grid-rows-1 grid-cols-[auto_1fr] py-24 gap-8"
      )}
    >
      {/* info */}
      <div
        className="bg-light-grey/10 space-y-4 p-8 rounded-md text-light-grey"
        data-pxx-opacity="0,1,0.5"
      >
        <h2 className="text-3xl font-extrabold text-white">{heading}</h2>

        {description}

        <div className="*:block">
          {examples.map(({ displayAttributes: codeAttributes }, index) => (
            <code key={index} className="code text-sm text-light-grey">
              {`<div ${codeAttributes} />`}
            </code>
          ))}
        </div>
      </div>
      {/* examples */}
      <div className="relative flex items-center justify-center gap-6">
        <div className="absolute h-1 w-full bg-light-grey/10 rounded-r-md" />
        {examples.map(({ attributes, label }, index) => (
          <div
            key={index}
            className="relative flex h-24 min-w-24 items-center text-black rounded text-xs font-medium select-none justify-center bg-light-grey p-1 uppercase"
            {...attributes}
          >
            {label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConfigSection;
