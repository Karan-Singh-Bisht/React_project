/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "loader-blue":"#3498db",
        "loader-grey":"#f3f3f3"
      }
    },
  },
  plugins: [],
}