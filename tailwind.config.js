/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": 'hsl(0, 0%, 17%)',
        "dark-gray": 'hsl(0, 0%, 59%)'
      },
      fontSize: {
        "input": '18px'
      },
      fontWeight: {
        "md": 400,
        "lg": 500,
        "xl": 700
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"]
      },
      screens:{
        "md":{"max":"768px"},

      }
    },
  },
  plugins: [],
}

