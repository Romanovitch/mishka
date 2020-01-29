const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { VueLoaderPlugin } = require('vue-loader')
const merge = require('webpack-merge')

const PATHS = require('./myPATHS') 
const jsMod = require('./modules/js/js') 
const fontsMod = require('./modules/fonts/fonts') 
const imagesMod = require('./modules/images/images') 
const scssMod = require('./modules/scss/scss') 
const cssMod = require('./modules/css/css') 
const htmlMod = require('./modules/html/html') 


// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
const PAGES_DIR = PATHS.src
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith('.html'))

module.exports = merge([
  { // externals
    externals: {
      paths: PATHS
    }
  },
  { // entry
    entry: {
      app: PATHS.src,
      // index: './src/index',
      // about: './src/about',
      // module: `${PATHS.src}/third.js`,
    }
  },
  { // output
    output: {
      path: PATHS.dist,
      filename: `${PATHS.assets}js/[name].js`,
      // filename: `${PATHS.assets}js/[name].[hash].js`, // +hash к имени файла
      // library: `${PATHS.assets}js/[name]`, // из-за этой ху-ни не перегружаются страницы в режиме дэв !!!
      publicPath: '/'
    }
  },
  { // optimization
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  jsMod(),
  fontsMod(),
  imagesMod(),
  scssMod(),
  cssMod(),
  htmlMod(),
  // {
  //   module: {
  //     rules: [{

  //     }]
  //   }
  // },
  { // resolve
    resolve: {
      alias: {
        '~': PATHS.src,
        // 'vue$': 'vue/dist/vue.js',
      }
    }
  },
  { // plugins
    plugins: [
      // new VueLoaderPlugin(),

      new MiniCssExtractPlugin({
        filename: `${PATHS.assets}css/[name].css`,
        // filename: `${PATHS.assets}css/[name].[hash].css`,
      }),

      new CopyWebpackPlugin([
        // { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
        // { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
        { from: `${PATHS.src}/static`, to: '' },
      ]),

      new HtmlWebpackPlugin({
        // title: 'Тут можно задать тайтл для этой страницы', //он не работает если есть template: '...'
        // filename: `${PATHS.src}/index.html`, // этот путь меняет index.html в src
        // template: `${PATHS.src}/index.html`,
        template: './src/index.html',
        inject: true
      }),
  
      // Automatic creation any html pages (Don't forget to RERUN dev server)
      // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
      // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
      ...PAGES.map(page => new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page}`
      })),

      // ...anyPAGES.map(page => new HtmlWebpackPlugin({
      //   template: `${PAGES_DIR}/${page}`,
      //   filename: `./${page}`
      // })),

      new CleanWebpackPlugin(),
      // new CleanWebpackPlugin(['../dist/*']), //! чегото не работает
      
    ]
  }
])

