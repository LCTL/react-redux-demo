const
  path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'jquery',
    './node_modules/semantic-ui-css/semantic.js',
    './node_modules/semantic-ui-css/semantic.css',
    './src/js/app.jsx',
    './src/css/app.css'
  ],
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: 'bundle.[hash].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json', 'node'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        compact: false,
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('bundle.[hash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NoErrorsPlugin()
  ],
  postcss: function (webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-nested'),
      require('postcss-cssnext')()
    ];
  }
};
