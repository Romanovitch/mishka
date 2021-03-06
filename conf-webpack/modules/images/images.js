const PATHS = require('../../myPATHS')

module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `${PATHS.assets}img/[name].[ext]`,
                // name: '[path][name].[ext]'
              }
            } 
          ]
        }
      ]
    }
  }
}