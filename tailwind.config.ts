import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0A0A0F",
        "dark-surface": "#111118",
        "dark-card": "#16161E",
        "dark-border": "rgba(108, 99, 255, 0.15)",
        "light-bg": "#F5F7FA",
        "light-surface": "#FFFFFF",
        "light-card": "#FFFFFF",
        "light-border": "rgba(108, 99, 255, 0.1)",
        "accent-violet": "#6366F1",
        "accent-cyan": "#06B6D4",
        "accent-glow": "rgba(99, 102, 241, 0.15)",
        "text-primary-dark": "#F9FAFB",
        "text-muted-dark": "#9CA3AF",
        "text-primary-light": "#111827",
        "text-muted-light": "#4B5563",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
