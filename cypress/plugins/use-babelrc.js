const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = webpack.defaultOptions

  const jsCodeRule = options.webpackOptions.module.rules[0]
  const jsCodeRuleUses = jsCodeRule.use
  const babelLoaderOptions = jsCodeRuleUses[0].options
  console.log('js code rule', JSON.stringify(jsCodeRule, null, 2))
  console.log('babel %o', babelLoaderOptions)

  // babelLoaderOptions.babelrc = true
  delete babelLoaderOptions.presets

  // why can't we just point at .babelrc file?!
  // babelLoaderOptions.presets.push(
  //   '@babel/preset-env',
  //   "@babel/preset-react",
  //   {
  //     "plugins": ["@babel/plugin-proposal-class-properties"]
  //   },
  //   "@emotion/babel-preset-css-prop"
  // )

  on('file:preprocessor', webpack(options))
}
