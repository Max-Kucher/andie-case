/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'light-black': {
          DEFAULT: '#1A1919',
        },
      },
      fontFamily: {
        sans: ['Gilroy', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      }
    },
  },
  content: [
      './**/*.{html,js,ts,vue}'
  ],
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}

