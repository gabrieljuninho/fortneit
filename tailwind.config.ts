import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        main: "calc(100% - 15rem)",
      },
      colors: {
        hover: "hsl(210, 40%, 96.1%)",
        accent: "hsl(222.2, 47.4%, 11.2%)",
        "black-500": "#0F172A",
        "white-500": "hsl(210, 40%, 98%)",
      },
    },
  },
  plugins: [],
};

export default config;
