const { resolve } = require('path');

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Config parameters
const config = require('../config.json');
const outputDir = config['outputDir']? config['outputDir'] : 'dist';

// Alias format
const alias = require('../alias.json');
Object.keys(alias).forEach(label => alias[label] = resolve(process.cwd(), 'src', alias[label]));

module.exports = {
  entry: {
    styles: resolve(process.cwd(), 'src/styles.scss'),
    main: resolve(process.cwd(), 'src/main.jsx')
  },
  output: {
    path: resolve(process.cwd(), outputDir),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    crossOriginLoading: false
  },

  module: {
    rules: [
      {
        test: /\.(eot|svg|cur)$/,
        loader: "file-loader",
        options: {
          "name": "[name].[hash:20].[ext]",
          "limit": 10000
        }
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        loader: "url-loader",
        options: {
          "name": "[name].[hash:20].[ext]",
          "limit": 10000
        }
      },

      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(sass|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-react-jsx']
        }
      }
    ]
  },

  resolve: {
    alias,
    extensions: ['.jsx', '.js'],
    modules: ['./node_modules']
  },
  resolveLoader: {
    modules: ['./node_modules']
  },

  plugins: [
    new CleanWebpackPlugin([ resolve(process.cwd(), outputDir) ], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: resolve(process.cwd(), "src/index.html"),
      filename: 'index.html',
      inject: true,
      chunks: ['styles', 'vendor', 'main'],
      chunksSortMode: 'manual'
    }),
    new BaseHrefWebpackPlugin({})
  ],

  optimization: {
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          minSize: 1
        }
      }
    }
  }
}