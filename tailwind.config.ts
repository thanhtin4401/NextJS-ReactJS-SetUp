import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Custom responsive
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    // Custom container
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      "primary-color": "#6D6CE3",
    },
    fontFamily: {
      body: ["Ubuntu"],
    },
    colors: {
      "bubble-gum": "#ff77e9",
      "primary-color": "#6D6CE3",
      "text-color": "#0C273C",
      "second-color": "#2E3E5C",
      "gray-color": "#282C4B",
      "background-color": "#F7F8F9",
      "blue-color-300": "#0C0F93",
      "dark-blue": "#170F49",
      "black-color-300": "#0C0F9308",
      white: "#FFFFFF",
    },
  },

  plugins: [],
};
export default config;
