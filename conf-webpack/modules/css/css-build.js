
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: { sourceMap: false }
            }, 
            {
              loader: 'postcss-loader',
              options: { sourceMap: false, config: { path: `./postcss.config.js` } }
            }
          ]
        }
      ]
    }
  }
}