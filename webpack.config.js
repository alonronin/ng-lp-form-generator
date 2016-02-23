var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var config = module.exports = {
  entry: {
    app: ['./index.js']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/'
  },

  context: path.resolve(__dirname, 'src'),

  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.json$/, loader: 'json'},
      {test: require.resolve('jquery'), loader: 'expose?$'},
      {test: require.resolve('jquery'), loader: 'expose?jQuery'}
    ],

    noParse: [
      /^jquery(\-.*)?$/,
      /^bootstrap(\-.*)?$/,
      /^lodash$/,
      /^angular(\-.*)?$/,
      /^ng(\-.*)?$/
    ]
  },

  plugins: [
    new ngAnnotatePlugin({
      add: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
      }
    })
  ]
};
