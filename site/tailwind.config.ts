import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        chivo: "var(--font-chivo)",
      },
      colors: {
        white: "#F6F6F6",
        "light-grey": "#D0CFD3",
        green: "#37FFA8",
        red: "#BC3234",
        light: "#7A718E",
        mid: "#2E2A37",
        dark: "#1E1B23",
        black: "#0A090C",
        transparent: "transparent",
      },
      screens: {
        // Extra wide
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
export default config;
