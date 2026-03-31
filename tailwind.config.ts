import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        yellowgreenlight: "rgb(var(--accent-soft) / <alpha-value>)",
        yellowgreen: "rgb(var(--accent) / <alpha-value>)",
        yellowgreenselection: "rgb(var(--accent-selection) / <alpha-value>)",
        canvas: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--text) / <alpha-value>)",
        mutedink: "rgb(var(--muted) / <alpha-value>)",
        blackrgba: "rgba(0, 0, 0, 0.1)",
      },
      lineHeight: {
        "semi-tight": "1.15",
        "semi-snug": "1.425",
      },
      fontSize: {
        "1xl": "1.35rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      animation: {
        // "fade-in-down": "fade-in-down 1s ease 0s 1 normal forwards",
        // "fade-in-up": "fade-in-up 1s ease 0s 1 normal forwards",
        // "fade-in-down": "fade-in-down 1s ease var(--fadein-delay, 0) normal forwards",
        // "fade-in-up": "fade-in-up 1s ease var(--fadein-delay, 0) normal forwards",
        "fade-in-down": "fade-in-down 1s ease 0s 1 normal forwards",
        "fade-in-up": "fade-in-up 1s ease 0s 1 normal forwards",
        gradient: "gradient 60s linear infinite",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        gradient: {
          to: { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [
    typography,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
export default config;
