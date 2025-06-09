/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dgrees-bg': '#1B1F27',
        'dgrees-primary': '#FF5900',
        'dgrees-secondary': '#00C0E0',
        'dgrees-text': '#FFFFFF',
        'dgrees-muted': '#CCCCCC',
      },
    },
  },
  plugins: [],
};