const path = require('path');

// This is how a require() actually pulls in something from a package
module.exports = {

  // Are we in development or production?
  mode: 'development',

  // Where are the source files to build(transpile) ?
  entry: './src',

  // Where to put the transpiled output files:
  output: {
    path: path.join(__dirname, 'build'),  // cross-platform path
    filename: 'bundle.js'
  },

  // How to actually build/transpile the source files:
  module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['transform-react-jsx'],
              ['transform-class-properties']
            ]
          }
        },
        {
          test: /\.css$/,  // 'import "mystyles.css";'
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }

}; // module.exports
