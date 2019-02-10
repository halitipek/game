const path = require('path')
const Dotenv = require('dotenv-webpack')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const NodemonPlugin = require( 'nodemon-webpack-plugin' )
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const gameDir = path.resolve(__dirname, 'static')

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    target: 'node',
    externals: [nodeExternals()],
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
      new Dotenv({
        safe: true, 
        systemvars: true, 
        silent: true 
      }),
      new NodemonPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        }
      ]
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
  },
  {
    mode: 'development',
    entry: './game/index.js',
    devtool: 'inline-source-map',
    target: 'node',
    optimization: {
      minimizer: [new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          toplevel: true,
          output: {
            comments: false,
          },
        }
      })],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new WebpackCdnPlugin({
        modules: [
          {
            name: 'pixi.js',
            var: 'PIXI',
            path: 'dist/pixi.min.js'
          },
          {
            name: 'gsap',
            var: 'TweenMax',
            path: 'umd/TweenMax.js'
          }
        ],
        prod: true,
        publicPath: '/node_modules'
      })
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        }
      ]
    },
    output: {
      filename: 'game.js',
      path: gameDir
    }
  }
]