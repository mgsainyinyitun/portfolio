const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      //filename:'template.html',
      template: './src/template.html',
      favicon: './src/assets/favicon.png'
    }),
    new HtmlWebpackPlugin({
      filename:'resume.html',
      template: './src/resume.html',
      chunks:[]
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader'
        ] //1. Turns sass into css
      }
    ]
  }
});
