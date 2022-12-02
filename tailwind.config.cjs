/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        white: 'hsl(0, 0%, 100%)',
        'white-75': 'hsla(0, 0%, 100%, 0.75)',
        'white-60': 'hsla(0, 0%, 100%, 0.6)',
      },
    },
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    fontSize: {
      // Desktop
      'heading-desktop': [
        '2.25rem',
        {
          lineHeight: '2.25rem',
          fontWeight: 'bold',
        },
      ],
      //  Mobile
      'heading-mobile': [
        '1.75rem',
        {
          lineHeight: '2rem',
          fontWeight: 'bold',
        },
      ],
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      lexendDeca: ['"Lexend Deca"', 'sans-serif'],
    },
  },
  plugins: [],
}
