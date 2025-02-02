import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          textHover: "var(--text-hover)",
          buttonActive: "var(--button-active)",
          primaryBorder: "var(--primary-border)",
          universal: "var(--universal-color)",
          reverseUniversal: "var(--reverse-universal-color)",
          tertiary: "var(--tertiary-color)",
          textPrimary: "var(--text-primary)",
          textSecondary: "var(--text-secondary)",
          popup: "var(--popup-color)",
          popupBorder: "var(--popup-border)",
          inputBg: "var(--input-bg)",
          planDescription: "var(--plan-description)",
          planLoader: "var(--plan-loader-color)",
          chatBg: "var(--chat-bg)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
