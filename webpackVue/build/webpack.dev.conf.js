const path = require('path')
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',  //生成source-map文件 源代码映射
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',  
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("autoprefixer")({
                  browsers : ['last 5 versions']
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',   // 用来将css运行在js中
          'css-loader',  // 是因为有时候css中也有@import 语法 用来解析css
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("autoprefixer")({
                  browsers : ['last 5 versions']
                })
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  }
})