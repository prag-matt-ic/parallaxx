import React, { type ReactNode, type FC } from "react";

const boxClasses =
  "relative flex size-24 items-center rounded text-sm font-medium select-none justify-center bg-light-grey p-1 uppercase";

const controlLineClasses = "absolute h-1 w-full bg-light-grey/10 rounded-r-md";

// TODO: refactor to pass in attributes e.g data-pxx-translate={TranslatePreset.SLOW} and a label for the box e.g Slow
type Example = {
  label: string;
  attributes: Record<string, string>;
};

type Props = {
  heading: ReactNode;
  description: ReactNode;
  examples: Example[];
};

const ConfigSection: FC<Props> = ({ heading, description, examples }) => {
  return (
    <section className="relative px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 grid grid-rows-1 grid-cols-[auto_1fr] w-full py-24">
      <div className="bg-light-grey/10 space-y-2 p-8 *:block rounded-md">
        <h2 className="text-3xl font-extrabold text-white">{heading}</h2>

        <p>{description}</p>
        {examples.map(({ attributes }, index) => (
          <code key={index} className="text-sm text-light-grey">
            {`<div ${Object.entries(attributes)} />`}
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
