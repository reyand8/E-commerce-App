import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const constants = {
  green: '#018c63',
  'dark-green': '#01573f',
  'light-green': '#dae7e3',
  black: '#1e1d1d',
  white: '#f1f1f1',
  'light-gray': '#e3e2df',
  red: '#de3637',
  beige: '#9d9589',
  'dark-beige': '#605b57',
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants,
    },
    extend: {
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.725rem',
        '3xl': '2.155rem',
        '4xl': '2.58rem',
        '5xl': '3.45rem',
        '6xl': '4.3rem',
        '7xl': '5.17rem',
        '8xl': '6.9rem',
        '9xl': '9.2rem',
      },
      keyframes: {
        animationOpacity: {
          from: { opacity: '0.2' },
          to: { opacity: '1' },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '50%': {
            opacity: '0.3',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
