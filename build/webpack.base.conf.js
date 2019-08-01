const path = require('path');//path 模块提供了一些工具函数，用于处理文件与目录的路径
// 导入插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');//构建html文件
// 导入vueLoader
const VueLoaderPlugin = require('vue-loader/lib/plugin');// vue-loader 编译vue文件
module.exports = {
  // context: path.resolve(__dirname, '../'),  //绝对路径。__dirname为当前目录。
    //基础目录用于从配置中解析入口起点。因为webpack配置在build下，所以传入 '../'
  entry: {
    bundle: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
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
        /* 排除模块安装目录的文件 */
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html', //文件名
      title:'my-vue-cli', //title
    }),
    // 重新命名提取后css文件
    new ExtractTextPlugin("main.css"),
    new VueLoaderPlugin()
  ],
  resolve:{
    //引入路径是不用写对应的后缀名
    extensions: ['.js', '.vue', '.json'],
    alias:{
        //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
        'vue$':'vue/dist/vue.esm.js',
        //用@直接指引到src目录下
        '@': path.resolve(__dirname,'./src'),
    }
  }
};
