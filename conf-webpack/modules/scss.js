
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              // options: { sourceMap: true }
              options: { modules: true, sourceMap: true }
            }, 
            {
              loader: 'postcss-loader',
              options: { sourceMap: true, config: { path: `./postcss.config.js` } }
            }, 
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
        }
      ]
    }
  } 
}