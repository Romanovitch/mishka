
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
              // options: { modules: true, sourceMap: true } // такие имена классов - ._1P_FZnkywHleo9-jyrgWQK
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