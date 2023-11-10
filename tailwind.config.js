/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'White': 'hsl(0, 0%, 100%)',
        'Lgray': 'hsl(212, 45%, 89%)',
        'Gblue': 'hsl(220, 15%, 55%)',
        'Dblue': 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
}

