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
        background: "var(--background)", // Using CSS variables
        foreground: "var(--foreground)",
        BlueButton:"rgba(53, 99, 233, 1)",
        DarkGrayText:"rgba(89, 103, 128, 1)",
        GreyText:"rgba(144, 163, 191, 1)",
        LightBlue:"rgba(84, 166, 255, 1)"
      },
      backgroundColor: {
        customBackground: "rgba(246, 247, 249, 1)", // Adding custom background color
      },
    },
  },
  plugins: [],
};

export default config;
