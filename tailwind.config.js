module.exports = {
  purge: {
    content: ['./src/**/*.svelte', './public/*.html'],
    safelist: ['text-gray-900'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
