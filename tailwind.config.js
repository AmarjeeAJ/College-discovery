const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, 'app/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, 'components/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, 'lib/**/*.{js,ts,jsx,tsx,mdx}'),
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#079BB5',
          'teal-dark': '#057F95',
          'teal-light': '#EAF8FB',
          'teal-subtle': '#F3FCFD',
          black: '#050505',
          dark: '#111111',
          gray: '#5F6368',
          border: '#DDE5E8',
          white: '#FFFFFF',
        }
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(5, 5, 5, 0.05)',
        card: '0 2px 6px 0 rgba(5, 5, 5, 0.06)',
      }
    },
  },
  plugins: [],
};
