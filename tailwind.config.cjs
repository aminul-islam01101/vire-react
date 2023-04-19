/* eslint-disable import/no-extraneous-dependencies */

const Form = require('@tailwindcss/forms');
const daisyui = require('daisyui');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
        30: '30%',
      },
      maxWidth: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
      minHeight: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
        '95v': '95vh',
        '90v': '90vh',
        '50v': '50vh',
      },
      screens: {
        xs: '320px',
        'xs-plus': '375px',
        'sm-minus': '490px',
        '5xl': '1700px',
        '20xl': '2000px',
        'lg-plus': '1100px',
        'xl-minus': '1175px',
        'xl-plus': '1360px',
        '2xl-minus': '1440px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  daisyui: {
    themes: [
      {
        dataSavvy: {
          info: '#0F3242',
          primary: '#11475B',
          checkbox: '#296143',
          secondary: '#1D5063',
          accent: '#F1F1F2',
          error: '#ddd',
          neutral: '#70909C',
          'base-100': '#B6B6B6',
          'base-200': '#FAFAFA',
          success: '#468162',
        },
      },
      // {
      //   dark: {
      //     info: '#ECE8DD',
      //     primary: '#183847',
      //     secondary: '#ff781f',
      //     accent: '#ddd',
      //     error: '#215066',
      //     neutral: '#212121',
      //     'base-100': '#000000',
      //     'base-200': '#215066',
      //   },
      // },
    ],
  },
  plugins: [daisyui, Form],
};
