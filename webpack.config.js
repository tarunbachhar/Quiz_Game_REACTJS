const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry:'./src/index.js',
  devtool:'source-map',
  mode:'production',
  devServer:{
    contentBase:'./dist'
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      inject:'body'
    })
  ],
  output: {
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['babel-preset-env','babel-preset-es2017','babel-preset-react']
          }
        }
      },
      {
        test:/\.(jpg|svg|png|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}


module.exports = config
