/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        teal: "#68C0AB",
        error: "#E74B4BCC",
        primary: "#EC8965",
        secondary: "#EDEDED",
        gray: {
          100: "#E3E3E3",
          200: "#89898B",
          300: "#828282",
          400: "#C6C6C7"
        },
        placeholder: "#AAAAAC"
      },
    },
  },
  plugins: [],
}

