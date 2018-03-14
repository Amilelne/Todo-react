const { resolve } = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

// Config parameters
const config = require('../config.json');
const port = config.devPort? config.devPort : 4200;

module.exports = merge(common, {
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  devServer: {
    port,
    historyApiFallback: true,
    contentBase: common.output.path
  }
});
