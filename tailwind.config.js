/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "100%",
        lg: "1200px"
      }
    },
    extend: {},
  },
  plugins: [],
}