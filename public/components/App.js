import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import VisiblePeopleList from '../containers/VisiblePeopleList';
import reducer from '../reducers';
import * as request from 'superagent';

var initialData;

request
  .get('http://jsonplaceholder.typicode.com/users')
  .end(function (err, res) {
    initialData = res.body;
    console.log(initialData);
  });

var store = createStore(reducer, {people: initialData});

const App = () => (
  <Provider store={store}>
    <div>
      <div className="hi"/>
      Oh Hai There Friend!
      <VisiblePeopleList />
    </div>
  </Provider>
);

export default App;