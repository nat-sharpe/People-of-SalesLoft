import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import PeopleScreen from './PeopleScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            People of SalesLoft
          </header>
          <PeopleScreen />
        </div>
      </Provider>
    );
  };
};

export default App;

