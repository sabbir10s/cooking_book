/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fffaeb',
          '100': '#fef1c7',
          '200': '#fde38a',
          '300': '#fcce4d',
          '400': '#fbb924',
          DEFAULT: '#f5980c',
          '500': '#f5980c',
          '600': '#d97106',
          '700': '#b44e09',
          '800': '#923c0e',
          '900': '#78320f',
        },
        secondary: {
          '25': '#FCFCFD',
          '50': '#F9FAFB',
          '100': '#F2F4F7',
          '200': '#EAECF0',
          '300': '#D0D5DD',
          '400': '#98A2B3',
          '500': '#667085',
          '600': '#475467',
          '700': '#344054',
          '800': '#1D2939',
          DEFAULT: '#101828',
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'pageTitle': "url('/src/Assets/Images/page-title.jpg')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },
  plugins: [],
}

