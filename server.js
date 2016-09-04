require ('babel-register')({
  presets: ['react']
});

const express = require('express'),
    app = express(),
    request = require('superagent'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    AppComponent = require('./public/components/App'),
    App = React.createFactory(AppComponent);

// var peopleData;

// request
//   .get('http://jsonplaceholder.typicode.com/users')
//   .end(function(err, res) {
//     peopleData = res.body;
//   });

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public/dist'));

app.get('/', (req, res) => {
  res.render('index', {
    pageHtml: ReactDOM.renderToString(
      React.createElement(App)
    )
  });
});

app.listen(3000, () => {
  console.log('listening closely on port 3000...');
});