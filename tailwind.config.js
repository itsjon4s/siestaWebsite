/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1e1e2e',
        mantle: '#181825',
        blue: '#89b4fa',
        red: '#f38ba8',
        foreground: '#cdd6f4',
        subtext: '#bac2de'
      }
    },
  },
  plugins: [],
}
