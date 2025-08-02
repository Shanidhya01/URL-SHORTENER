export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Explicitly avoid -ms-high-contrast prefixes
      flexbox: 'no-2009',
      grid: 'autoplace',
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not ie 11',
        'not ie_mob 11',
        'not op_mini all',
        'not dead'
      ],
      // Disable specific features that generate deprecated prefixes
      remove: true,
      add: true,
      supports: false,
      cascade: true
    },
  },
}
