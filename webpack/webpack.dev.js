const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const port = 8080;
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // 更容易地追踪错误和警告
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    // 实时加载 live-reloading
    contentBase: path.join(__dirname, '../public'),
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        secure: false, //接受运行在 HTTPS 上
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    host: '0.0.0.0',
    open: true, // 自动打开浏览器
    port: port,
    // publicPath: '/test',// 一定要和output设置一样，打包生成的静态文件所在的位置（
    public: `localhost:${port}`,
    historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
  },
});
