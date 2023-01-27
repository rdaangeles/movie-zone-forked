/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-primary": "#171717",
        "c-secondary": "#444444",
        "c-tertiary": "#DA0037",
        "c-quarternary": "#EDEDED",
      },
      fontFamily: {
        "f-primary": "'Unbounded', cursive;",
        "f-secondary": "Raleway', sans-serif;",
      },
    },
  },
  plugins: [],
};
