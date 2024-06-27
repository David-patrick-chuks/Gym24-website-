/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pbold: ['PoppinsBlack', "sans-serif"],
        pmedium: ['PoppinsMedium', "sans-serif"],
        plight: ['PoppinsThin', "sans-serif"],
        pregular: ['PoppinsRegular', "sans-serif"],
      }
    },
  },
  plugins: [],
}

