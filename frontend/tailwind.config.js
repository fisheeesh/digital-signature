/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#DA2204',
        secondary: '#044EDA',
        lightBlue: '#EDECFC',
        darkPurple: '#4F46E5',
        lightGrey: '#F2F2F2',
        lightBrown: '#756464',
      }
    },
  },
  plugins: [],
};
