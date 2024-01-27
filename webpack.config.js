// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    navbar : './navbar.js',
    home : './home.js',
  },
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './navbar.html',
      filename: 'navbar.html',
      chunks: ['navbar'],
    }),
    new HtmlWebpackPlugin({
      template: './home.html',
      filename: 'home.html',
      chunks: ['home'],
    }),
    // Add more HtmlWebpackPlugin instances for other HTML files
  ],
};
