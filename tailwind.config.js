/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/hoc/**/*.{js,ts,jsx,tsx}',
    './lib/layout/**/*.{js,ts,jsx,tsx}',
    './lib/hooks/**/*.{js,ts,jsx,tsx}',
    './lib/utils/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs-mini': '280px',
      xs: '360px',
      ...defaultTheme.screens,
      '1xl': '1440px',
      '1.5xl': '1500px',
      '3xl': '1700px',
    },
    extend: {
      colors: {
        primary: '#18D8C8',
        background: '#F3F4FF',
        applyBlue: '#538FB7',
        applyYellow: '#F6BD2A',
        applyText: '#1F2430',
        footer: '#2D4776',
        secondaryColor: 'var(--color-secondaryColor)',
        primaryText: 'var(--color-primaryText)',
        secondaryText: 'var(--color-secondaryText)',
        primaryBtn: 'var(--color-primaryBtn)',
        secondaryBtn: 'var(--color-secondaryBtn)',
        backgroundSecondary: 'var(--color-backgroundSecondary)',
        sky: colors.sky,
        cyan: colors.cyan,
      },

      spacing: {
        25: '6.25rem',
        98: '24.5 rem',
        100: '25rem',
        104: '26rem',
        106: '28rem',
        108: '30rem',
        110: '34rem',
      },
      // screens: {
      //   '1xl': '1440px',
      //   '1.5xl': '1500px',
      //   '3xl': '1700px',
      // },
    },
    fontFamily: {
      theme: "'Circular', sans-serif",
      Theme: 'Circular, sans-serif',
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide')],
};
