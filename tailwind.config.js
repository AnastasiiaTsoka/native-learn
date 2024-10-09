/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // background: '#1A1A31',
        background: '#0D0E1C',
        // secondary: '#0dd392',
        // secondary: '#b400ff',
        secondary: '#E46000',
        // mainText: '#ADADAD',
        mainText: '#EBEBE4',
        // secondaryText:'#c2b8b2'
        secondaryText:'#99857D'
      },
    },
  },
  plugins: [],
}

