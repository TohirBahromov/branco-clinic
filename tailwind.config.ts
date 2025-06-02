import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": {
        max: "1200px",
      },
      xl: {
        max: "992px",
      },
      lg: {
        max: "768px",
      },
      md: {
        max: "576px",
      },
      sm: {
        max: "458px",
      },
    },
    extend: {
      fontSize: {
        hero: [`80px`, { lineHeight: "1.2em" }],
        xs: ["14px", { lineHeight: "28px" }],
        sm: ["16px", { lineHeight: "1.8em" }],
        md: ["20px", { lineHeight: "1.2em" }],
        lg: ["24px", { lineHeight: "1.2em" }],
        xl: ["32px", { lineHeight: "1.2em" }],
        "1xl": ["38px", { lineHeight: "1.2em" }],
        "2xl": ["46px", { lineHeight: "1.2em" }],
        "3xl": ["62px", { lineHeight: "1.2em" }],
        button: ["16px", { lineHeight: "1.2em", fontWeight: "700" }],
        title: [
          "14px",
          { lineHeight: "1.2em", fontWeight: "700", letterSpacing: "0.2em" },
        ],
      },
      transitionDuration: {
        "700": "700ms",
        "800": "800ms",
        "900": "900ms",
        "2000": "2000ms",
        "3000": "3000ms",
        "4000": "4000ms",
        "5000": "5000ms",
        "6000": "6000ms",
        "7000": "7000ms",
        "8000": "8000ms",
        "9000": "9000ms",
        "10000": "10000ms",
      },
      colors: {
        primary: "#0B0B38",
        secondary: "#F8F8FF",
        textColor: "#555574",
        accent: "#5E5EEE",
        divider: "#F0F0FF",
        darkDivider: "#FFFFFF26",
        background: "#fff",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        custom: "0px 10px 30px 0 rgb(0 0 0 / 3%)",
        custom2: "10px 0px 36.8px -4px rgba(0, 0, 0, 0.10196078431372549)",
        custom3: "0px 12px 37.1px 0px rgba(0, 0, 0, 0.050980392156862744)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
