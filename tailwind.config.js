module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#B72530',
        secondary: '#3f434c',
        tertiary: '#222446',
        article_bg_banner: '#f7f7f3',
        accents_0: '#f8f9fa',
        accents_1: '#f1f3f5',
        accents_2: '#e9ecef',
        accents_3: '#dee2e6',
        accents_4: '#ced4da',
        accents_5: '#adb5bd',
        accents_6: '#868e96',
        accents_7: '#495057',
        accents_8: '#343a40',
        accents_9: '#212529',
      },
      fontSize: {
        medium: [
          '0.945rem',
          {
            lineHeight: '1.275rem',
          },
        ],
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      display: ['hover', 'group-hover'],
      borderWidth: ['hover', 'focus'],
      visibility: ['hover', 'group-hover'],
      inset: ['hover', 'group-hover'],
      borderWidth: ['responsive', 'last', 'hover', 'focus'],
      margin: ['last', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['even', 'odd'],
    },
  },
  plugins: [],
}
