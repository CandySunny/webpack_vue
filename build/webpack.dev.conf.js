const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',//开启控制台输出错误信息具体在哪行
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 9000,
    open: true,//自动打开浏览器
    // hot:true,//热加载
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      rewrites: [{
          from: /.*/g,
          to: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
      }]
    }
  }
});
