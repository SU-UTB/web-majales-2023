/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '468px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        dark_blu: '#3724B6',
        light_blu: '#1A64F5',
        pinky: '#FF3358',
        su_orange: '#FFA723',
        dark_blu_txt: '#391F68',
      },
      fontFamily: {
        body: ['BeVietnamRegular'],
        headline: ['BeVietnamBold'],
      },
    },
  },
  plugins: [],
};
