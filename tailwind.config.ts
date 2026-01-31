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
        'birb-green': '#4ade80',
        'birb-brown': '#92400e',
        'birb-sky': '#0ea5e9',
      },
    },
  },
  plugins: [],
};

export default config;
