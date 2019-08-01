const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',//开启控制台输出错误信息具体在哪行
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true
  }
});
