// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {},
      screens:{
        'md': {'max': '767px'},
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
      addCommonColors:true,
      themes: {
      light: {
        colors: {
          background: '#FFC0CB',
          primary: {
            DEFAULT:"#12A150",
          }
        },
      },
    }}
  )]
}
