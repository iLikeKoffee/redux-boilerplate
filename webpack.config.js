var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry  : [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/js/index.js'
  ],
  output : {
    path      : __dirname + '/static/',
    publicPath: '/static/',
    filename  : 'bundle.js',
    hot       : true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin
  ],
  module : {
    loaders: [
      {
        test   : /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test  : /\.(less|css)$/,
        loader: 'style!css!less!autoprefixer-loader?browsers=last 2 versions'
      },
      {
        test   : /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /.*font.*\.(otf|eot|svg|ttf|woff|woff2)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
