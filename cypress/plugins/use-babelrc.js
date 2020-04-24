const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = webpack.defaultOptions

  // console.log(options.webpackOptions)
  // console.log(options.webpackOptions.module.rules[0])
  // console.log(options.webpackOptions.module.rules[0].use[0].options)

  const babelLoaderOptions = options.webpackOptions.module.rules[0].use[0].options

  // why can't we just point at .babelrc file?!
  babelLoaderOptions.presets.push(
    '@babel/preset-env',
    "@babel/preset-react",
    {
      "plugins": ["@babel/plugin-proposal-class-properties"]
    },
    "@emotion/babel-preset-css-prop"
  )

  on('file:preprocessor', webpack(options))
}
