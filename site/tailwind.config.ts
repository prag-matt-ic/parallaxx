import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F6F6F6",
        green: "#37FFA8",
        cyan: "#37F3FF",
        "off-black": "#1E1B23",
        "light-grey": "#C7C4CC",
        black: "#0A090C",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
export default config;
