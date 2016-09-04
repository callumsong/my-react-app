var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'public/components/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['es2015']
            }
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
        ]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],


    babelPreprocessor: {
      options: {
        presets: ['es2015']
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
};