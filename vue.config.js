module.exports = {
  configureWebpack: {
    rules: [
      { test: /\.xlsx$/, loader: 'webpack-xlsx-loader' }
    ]
  }
}
