const { colors } = require('./colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing: {
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      96: '96px',
    },
    borderRadius: {
      none: '0',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      full: '9999px',
    },
    borderWidth: {
      0: '0',
      DEFAULT: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      8: '8px',
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      green: colors.green,
      violet: colors.violet,
      orange: colors.orange,
      red: colors.red,
      gray: {
        DEFAULT: colors.gray['500'],
        ...colors.gray,
      },
      blue: {
        DEFAULT: colors.blue['500'],
        ...colors.blue,
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      11: ['11px', { letterSpacing: '0px', lineHeight: '15px' }],
      12: ['12px', { letterSpacing: '0px', lineHeight: '16px' }],
      14: ['14px', { letterSpacing: '0px', lineHeight: '20px' }],
      16: ['16px', { letterSpacing: '0px', lineHeight: '24px' }],
      18: ['18px', { letterSpacing: '0px', lineHeight: '26px' }],
      20: ['20px', { letterSpacing: '0px', lineHeight: '30px' }],
      32: ['32px', { letterSpacing: '0px', lineHeight: '40px' }],
      40: ['32px', { letterSpacing: '0px', lineHeight: '56px' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
    },
    lineHeight: {
      12: '12px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      32: '32px',
      34: '34px',
      62: '62px',
      none: 1,
    },
  },
  plugins: [
    plugin(({ addUtilities, config }) => {
      const squareClasses = Object.entries(config('theme.spacing')).reduce((acc, [key, value]) => {
        acc[`.square-${key}`] = {
          height: value,
          width: value,
          minHeight: value,
          minWidth: value,
        }
        return acc
      }, {})
      addUtilities(squareClasses, ['responsive'])
    }),
  ],
}
