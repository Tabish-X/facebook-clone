import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        _theme_primary_gray: "#F0F2F5",
        _theme_primary_blue: "#1877F2",
        _theme_secondary_blue: "#3D8CF4",
        _dark: "#1C1E21",
        _green: "#42B72A",
        _green_dark: "#36A420",
        _error_color: "#BE4B49",
        _gray: "#777777",
        black: "#1C1E21",
        "gray-10": "#E4E6EB",
        "gray-20": "#f2f2f2",
        "gray-30": "#606770",
        "gray-40": "#ebedf0",
        "gray-50": "#bec3c9",
        "gray-60": "#65676b"
      },
      fontSize: {
        "2xs": "11px",
        "2.5xl": "28px",
        sm_sm: "15px",
      },
      fontWeight: {
        "500": "500",
      },
      width: {
        "50": "184px",
      },
      boxShadow: {
        "sh-1": "0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.2)",
        "sh-2": "0 2px 12px rgba(0, 0, 0, 0.2)",
        "sh-3":
          "0 0px 4px 0 rgba(0, 0, 0, 0.1), 0 0px 1px 0 rgba(0, 0, 0, 0.2)",
        "sh-input-1": "#1876f233 0 0 0 3px inset",
        "sh-input-2": "0 0 0 2px #e7f3ff",
        "sh-post-wrapper": "0 1px 2px #0003"
      },

    },
    screens: {
      sm: "640px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Roboto: "'Roboto', Arial",
    },
  },
  plugins: [],
};
export default config;
