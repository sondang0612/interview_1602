import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "o-color": "#87E43A",
        "x-color": "#F54D62",
      },
      backgroundImage: {
        primary: "linear-gradient(to right, #00D2FF, #3A7BD5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
