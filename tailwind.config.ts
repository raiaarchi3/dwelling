import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette lifted straight from the design: pale sky-blue hero backdrop,
        // near-black ink for headings/buttons, muted slate for body copy.
        sky: {
          DEFAULT: "#DCEEF6",
          light: "#EAF5FA",
        },
        ink: "#101418",
        slate: {
          DEFAULT: "#5B6470",
          light: "#88919B",
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      // Safely integrated your custom animations into the main theme tree
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;