const PATHS = require('./myPATHS') 

module.exports = function () {
  return {
    devServer: {
      
    contentBase: PATHS.dist,
      // contentBase: baseWebpackConfig.externals.paths.dist,
      port: 8081,
      overlay: {
        warnings: true,
        errors: true
      }
    }
  }
}