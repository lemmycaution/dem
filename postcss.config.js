var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-apply',
    'postcss-custom-properties',
    'postcss-nesting',
    'postcss-calc',
    'postcss-discard-comments',
    'postcss-remove-root',
    'autoprefixer',
    'postcss-merge-rules'
  ],
  input: 'src/dem.css',
  output: 'css/dem.css',
  autoprefixer: {
    browsers: "> 5%"
  }
}
