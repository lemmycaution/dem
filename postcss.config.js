var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-apply',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-discard-comments',
    'postcss-remove-root',
    'autoprefixer',
  ],
  input: 'src/dem.css',
  output: 'css/dem.css',
  autoprefixer: {
    browsers: "> 5%"
  }
}
