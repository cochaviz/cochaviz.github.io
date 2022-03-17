module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['"Fira Code"'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
