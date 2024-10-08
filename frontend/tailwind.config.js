/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'light-black': {
          DEFAULT: '#1A1919',
        },
        accent: {
          DEFAULT: '#FFB54D',
        },
        'faded-text': {
          DEFAULT: '#424242',
          light: '#7B7B7B',
        },
        placeholder: {
          light: '#F8F8F8',
          DEFAULT: '#D9D9D9',
        },
      },
      fontFamily: {
        sans: ['Gilroy', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'druk-wide': ['Druk Wide Cyr', 'Gilroy', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      screens: {
        'tablet': '834px',
        'small-tablet': '700px',
      },
    },
  },
  content: [
      './**/*.{html,js,ts,vue}'
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

