const path = require('path');
// 导入插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 导入vueLoader
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack配置
// var config = {
//     // 入口
//     entry: {
//         // 配置的单入口
//         main: path.resolve(__dirname, '../src/index.js')
//     },
//     // 出口(打包后的文件会存储为demo/dist/main.js 文件)
//     output: {
//         // 选项用来存放打包后文件的输出目录(必填项)
//         // path: path.join(__dirname, '../dist'),
//         path: path.resolve(__dirname, '../dist'),
//         // filename: '[name].[hash].js'
//         // 指定资文件引用的目录
//         publicPath: '/dist/',
//         // 指定输出文件的名称
//         filename: 'index.js'
//     }
// }
// // 等同于exprot default {},只因这里还没有es6
// module.exports = config

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      // host: 'localhost',
      port: 9000,
      open:true // 自动打开浏览器
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          // use: [
          //     'style-loader',
          //     'css-loader'
          // ]
          use: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'style-loader'
          })
        }      
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html')
      }),
      // 重新命名提取后css文件
      new ExtractTextPlugin("main.css"),
      new VueLoaderPlugin()
    ]
};