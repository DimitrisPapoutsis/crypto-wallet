/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        lightPrimary: '#84B5FF',
        darkPrimary: '#0147AE',
        white: '#FFFFFF',
        black: '#1C1B1F',
        gray: '#A3A6AA',
        error: '#FF5733',
      },
      backgroundImage: () => ({
        'gradient-light':
          'linear-gradient(to bottom, #FFFFFF 0%,  #FFFFFF 0%, #0066FF)',
        'gradient-dark': 'linear-gradient(to bottom, #020D1F, #0066FF)',
      }),
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
