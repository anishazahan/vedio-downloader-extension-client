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
        primary: "#5036E1",

        secondary: "#000000",

        accent: "#37CDBE",

        neutral: "#3D4451",
      },
    },
  },
  plugins: [],
};
export default config;
