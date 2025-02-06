import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'pdf-controls': {
          bg: "var(--background)",
          text: "var(--foreground)",
          button: {
            DEFAULT: "var(--foreground)",
            disabled: "var(--background)",
          }
        }
      },
      maxHeight: {
        'pdf-container': 'calc(100vh - 8rem)',
      }
    },
  },
  plugins: [],
} satisfies Config;