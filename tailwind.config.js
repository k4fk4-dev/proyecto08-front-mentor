/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Verydarkblue': 'hsl(233, 47%, 7%)',
        'Darkdesaturatedblue': 'hsl(244, 38%, 16%)',
        'Softviolet': 'hsl(277, 64%, 61%)',
        'Slightlytransparentwhite': 'hsla(0, 0%, 100%, 0.75)',
        'Slightlytransparentwhite': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily:{
        'Inter':['Inter'],
        'Lexend-Deca':['Lexend-Deca']
      }
    },
  },
  plugins: [],
}

