var config = {
  entry: './client.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/dist'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      }
    ]
  }
};

module.exports = config;