/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#CAF0F8",
        "brand":"#03045E",
        "secondary":"#0077B6",
        "dark-text":"#000000",
        "light-text":"#CAF0F8",
        
      }
    },
  },
  plugins: [],
}