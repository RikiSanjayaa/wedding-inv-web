/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'web-background': 'FFF3FB',
      },
      fontFamily: {
        'allura': ['Allura', 'cursive'],
        'comfortaa': ['Comfortaa', 'cursive'],
      },
    },
  },
  plugins: [],
}

