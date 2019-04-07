/**
 * Created by 李华良 on 2019/4/6
 *
 * webpack common configuration
 */
const path = require('path')
const WebpackHtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')

const resolve = des => path.resolve(__dirname, '../', des)

module.exports = env => {
  const styleLoader = env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'

  return {
    context: resolve('./'),
    entry: './src/index.jsx',
    output: {
      path: resolve('./dist'),
      publicPath: '/',
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          include: resolve('./src'),
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          include: resolve('./src'),
          exclude: /node_modules/,
          use: [styleLoader, 'css-loader', MediaQueryPlugin.loader, 'postcss-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new WebpackHtmlPlugin({
        template: './template/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css'
      }),
      new MediaQueryPlugin({
        include: true,
        queries: {
          'print, screen and (min-width: 75em)': 'desktop'
        }
      })
    ]
  }
}
