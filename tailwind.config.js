// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333",
        secondary: "#1E1E1E",
        tertiary: "#F5F5F5",
        yellow: {
          light: "#fefcbf",
          DEFAULT: "#fef08a",
          dark: "#fde047",
        },
      },
    },
  },
  plugins: [],
};
