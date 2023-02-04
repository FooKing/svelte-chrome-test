module.exports = {
  prefix: 'tw-',
  content: ['./public/index.html', './src/**/*.svelte'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
