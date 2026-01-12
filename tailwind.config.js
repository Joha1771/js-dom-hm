// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "100%",
      sm: "640px",
      lg: "1172px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'], // Fallback to sans-serif
          },
          boxShadow: {
            'primary': '0px 0px 23px 0px #9494942B',
          }
    },
  },
  plugins: [],
};