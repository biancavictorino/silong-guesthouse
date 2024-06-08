/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "#FF7A00",
        'secondary-color': "#FFFF",
        'tertiary-color': "#FFF7CB",
        'text-color': "#7C7C7C",
      }

    },
  },
  plugins: [],
}

