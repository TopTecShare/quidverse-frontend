const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    colors: {
      ...defaultTheme.colors,
      current: 'currentColor',
      'accent1': '#fa2609',
      'accent2': '#ffc122',
      'accent3': '#000046',
      'accent4': '#00008b',
      'accent5': '#ffffff',
    },
    extend: {
      
    },
  },
  variants: {
  },
  plugins: [],
}
