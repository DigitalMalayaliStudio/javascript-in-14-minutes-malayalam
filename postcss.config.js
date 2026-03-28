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
      safelist: [
        'is-mobile',
        'is-tablet',
        'case-mobile',
        'case-tablet',
        'case-desktop',
        'case-brave',
        'case-chrome',
        'case-firefox',
        'case-safari',
        'case-edge',
        'case-opera',
        'case-windows',
        'case-mac',
        'case-linux'
      ],
      variables: true,
    }),
    cssnano(),
  ],
}