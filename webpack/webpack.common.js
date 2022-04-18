const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');

// 参考：https://webpack.docschina.org/guides/output-management/
const srcPath = path.resolve(__dirname, '../src');
const publicPath = path.resolve(__dirname, '../public');
const outputPath = path.resolve(__dirname, '../dist');
const dir = {
  js: `${srcPath}/index.js`,
};
const publicDir = {
  html: `${publicPath}/index.html`,
  ico: `${publicPath}/favicon.ico`,
};
// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
  entry: {
    index: dir.js,
  }, //项目唯一入口文件
  output: {
    publicPath: '/', //打包生成的`index.html`文件里面引用资源的前缀,注意看source
    filename: '[name].[hash].js',
    path: outputPath,
  },
  plugins: [
    // 进度条
    new WebpackBar(),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../'),
      verbose: true, //实际表示的意义是Write logs to console，即是否要往终端上输出log。
    }), // 每次构建清理dist文件夹
    new HtmlWebpackPlugin({
      template: publicDir.html,
      favicon: publicDir.ico,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
  resolve: {
    // 要解析的文件的扩展名
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    //  loader 引入任何其他类型的文件
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
};
