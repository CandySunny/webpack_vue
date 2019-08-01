const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 清理构建目录下的文件
const path = require('path');
const baseConfig = require('./webpack.base.conf');
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});
