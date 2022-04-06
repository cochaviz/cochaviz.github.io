module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['"Source Sans Pro"'],
      'serif': ['"Source Serif Pro"'],
      'mono': ['"Source Code Pro"']
      // 'sans': ['"Fira Sans"'],
      // 'serif': ['"Fira Sans"'],
      // 'mono': ['"Fira Code"']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
