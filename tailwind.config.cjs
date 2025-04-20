/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        'violet-gradient': 'linear-gradient(90deg, #915EFF 0%, #7B4AFF 100%)',
        'green-pink-gradient': 'linear-gradient(90deg, #00dbde 0%, #fc00ff 100%)',
        'blue-text-gradient': 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)',
      },
    },
  },
  plugins: [],
};
