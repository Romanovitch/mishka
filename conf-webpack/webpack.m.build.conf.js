const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.m.common.conf')

const PATHS = require('./modules/myPATHS') 
const scssModule = require('./modules/scss') 

const buildWebpackConfig = merge([
  baseWebpackConfig, 
  scssModule(),
  {
    // BUILD config
    // mode: 'production',
    mode: 'development',
    plugins: []
  }
])

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
