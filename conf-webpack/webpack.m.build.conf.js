const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.m.common.conf')

// const PATHS = require('./modules/PATHS/myPATHS') 
const scssModule = require('./modules/scss/scss-dev') 
// const scssModule = require('./modules/scss/scss-build') 
const cssModule = require('./modules/css/css-build')

// const NODE_ENV = process.env.NODE_ENV // || 'development' // 'production' 

// console.log('NODE_ENV - build', env.NODE_ENV) //! ReferenceError: env is not defined

const buildConfig = {
    // BUILD config
    // mode: 'production',
    mode: 'development',
    plugins: []
}

// const constPlugin = {
//   plugins: [
//     new webpack.DefinePlugin({
//       NODE_ENV: JSON.stringify(NODE_ENV),
//       LANG: JSON.stringify('ru')
//     })
//   ]
// }

const buildWebpackConfig = merge([
  baseWebpackConfig,
  // scssModule(),
  // cssModule(),
  buildConfig,
 
])


module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})

// module.exports = (env) => { 
//   return new Promise((resolve, reject) => {
//     resolve(buildWebpackConfig)
//   })
// } 
