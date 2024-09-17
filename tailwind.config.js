/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
    "./snippets/*.liquid",
    "./sections/*.liquid",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
