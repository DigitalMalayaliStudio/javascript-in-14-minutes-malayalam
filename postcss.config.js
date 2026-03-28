const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    purgecss({
      content: [
        'index.html',
        './**/*.html',
        './**/*.js',
      ],
      variables: true,
    }),
    cssnano(),
  ],
}