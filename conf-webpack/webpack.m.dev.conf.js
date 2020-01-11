const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.m.common.conf')

const PATHS = require('./myPATHS') 
const scssModule = require('./modules/scss/scss-dev') 
const cssModule = require('./modules/css/css-dev')

const NODE_ENV = process.env.NODE_ENV || 'development' 

const devConf = {
    // DEV config
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
}

const devServer = {
  devServer: {
    // contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}

const devPlugins = {
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
}

const devWebpackConfig = merge([
  baseWebpackConfig,
  scssModule(),
  cssModule(),
  devServer,
  devConf,
  devPlugins
])

console.log('NODE_ENV - dev', NODE_ENV)

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
