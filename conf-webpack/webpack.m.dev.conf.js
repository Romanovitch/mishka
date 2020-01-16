const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.m.common.conf')

const PATHS = require('./myPATHS') 
const scssModule = require('./modules/scss/scss-dev') 
const cssModule = require('./modules/css/css-dev')

// const NODE_ENV = process.env.NODE_ENV || 'development' // тут ее нет

// const devConf = {
//     // DEV config
//     mode: 'development',
//     devtool: 'cheap-module-eval-source-map',
// }

// const devServer = {
//   mode: 'development',
//   devtool: 'cheap-module-eval-source-map',
//   devServer: {
//     contentBase: baseWebpackConfig.externals.paths.dist,
//     port: 8081,
//     overlay: {
//       warnings: true,
//       errors: true
//     }
//   }
// }

// const devPlugins = {
//   plugins: [
//     new webpack.SourceMapDevToolPlugin({
//       filename: '[file].map'
//     })
//   ]
// }

// const devWebpackConfig = merge([
//   baseWebpackConfig,
//   // scssModule(),
//   // cssModule(),
//   devServer,
//   // devConf,
//   devPlugins
// ])



const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8082,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})


module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})


// module.exports = env => {
//   return new Promise((resolve, reject) => {
//     resolve(devWebpackConfig)
//   })
// }
