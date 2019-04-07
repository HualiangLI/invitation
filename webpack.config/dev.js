/**
 * Created by 李华良 on 2019/4/6
 *
 * webpack configuration for development
 */
const Merge = require('webpack-merge')

const getBaseConfig = require('./base')

module.exports = Merge(
  getBaseConfig('development'),
  {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: '0.0.0.0'
    }
  }
)
