/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#1A1A31',
        // secondary: '#0dd392',
        secondary: '#b400ff',
        mainText: '#ADADAD',
        secondaryText:'#c2b8b2'
      },
    },
  },
  plugins: [],
}

