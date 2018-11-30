const path = require('path')
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
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
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader', 
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
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css")
  ]
})