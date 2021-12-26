module.exports = {
  content: ['./layouts/*.html'],
  theme: {
    extend: {
      colors: {
        'vdMagenta': 'hsl(300, 43%, 22%)',
        'sPink': 'hsl(333, 80%, 67%)',

        'dgMagenta': 'hsl(303, 10%, 53%)',
        'lgMagenta': 'hsl(300, 24%, 96%)',
        'whiteCust': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'spartan': ['Spartan', 'sans-serif']
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}
