module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', "sans-serif", '"Noto Emoji"'],
      serif: ["Lora", "serif", '"Noto Emoji"'],
      mono: ['"Source Code Pro"', "mono", '"Noto Emoji"'],
    },
    extend: {
      colors: {
        background: {
          light: "#f5f5f3",
          dark: "#1c1c1c",
          alt: {
            light: "#e0e0e0",
            dark: "#303030",
          },
          alter: {
            light: "#f0f0f0",
            dark: "#202020",
          },
        },
        border: {
          light: "#808080",
          dark: "#909090",
        },
        code: {
          light: "#f0f0f0",
          dark: "#151515",
          alt: {
            light: "#d8d8d8",
            dark: "#252525",
          },
          alter: {
            light: "#c3c3c3",
            dark: "#323232",
          },
        },
        accent: {
          1: {
            // dark: "#ca8a04",
            dark: "#d29d2e",
            // light: "#16a34a",
            light: "#4aa16c",
          },
          2: {
            // dark: "#16a34a",
            dark: "#4cc078",
            light: "#9f69c0",
          },
          3: {
            // dark: "#3095dd",
            dark: "#4a9eda",
            light: "#4a8fc3",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("autoprefixer")],
};
