import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Router from './Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  };
};

export default App;

