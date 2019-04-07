/**
 * Created by 李华良 on 2019/4/6
 *
 * webpack configuration for building bundles and chunks
 */
const Merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const getBaseConfig = require('./base')

module.exports = Merge(
  getBaseConfig('production'),
  {
    mode: 'production',
    plugins: [
      new CleanWebpackPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  }
)
