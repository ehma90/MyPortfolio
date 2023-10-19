/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
    fontSize: {
      xs: ["0.75rem"],
      sm: ["0.875rem"],
      base: ["0.95rem"],
      lg: ["1.125rem"],
      xl: ["1.25rem"],
      "2xl": ["1.5rem"],
      "3xl": ["1.875rem"],
      "4xl": ["2.25rem"],
      "5xl": ["3rem"],
    },
  },
  plugins: [],
};
