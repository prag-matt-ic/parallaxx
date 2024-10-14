import React, { type ReactNode, type FC } from "react";
import { twJoin } from "tailwind-merge";
import { HORIZONTAL_PADDING } from "./styles";

const boxClasses =
  "relative flex size-24 items-center rounded text-sm font-medium select-none justify-center bg-light-grey p-1 uppercase";

const controlLineClasses = "absolute h-1 w-full bg-light-grey/10 rounded-r-md";

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
        "relative grid grid-rows-1 grid-cols-[auto_1fr] w-full py-24"
      )}
    >
      <div className="bg-light-grey/10 space-y-2 p-8 *:block rounded-md">
        <h2 className="text-3xl font-extrabold text-white">{heading}</h2>

        {description}
        {examples.map(({ displayAttributes: codeAttributes }, index) => (
          <code key={index} className="text-sm text-light-grey">
            {`<div ${codeAttributes} />`}
          </code>
        ))}
      </div>

      <div className="relative flex items-center justify-center gap-6">
        <div className={controlLineClasses} />
        {examples.map(({ attributes, label }, index) => (
          <div key={index} className={boxClasses} {...attributes}>
            {label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConfigSection;
