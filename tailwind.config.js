module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "0.1": "1px"
      },
      backgroundImage: {
        "mobile-app": "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)"
      },
      colors: theme => ({
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "second-brand-color": "#7849f7",

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
