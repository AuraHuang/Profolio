/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['微軟正黑體', 'Arial', 'Helvetica', 'sans-serif']
      }
    },
  },
  // darkMode: 'class',
  plugins: [],
}

