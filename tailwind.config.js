/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important:true,
  theme: {
    // colors:{
    //   transparent: 'transparent',
    //   black: '#000',
    //   white: '#fff',
    // },
    fontSize: {
      xxs: '0.525rem',
      xs: '0.65rem',
      sm: '0.875rem',
      base: '1rem',
      xl: '1.125rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

