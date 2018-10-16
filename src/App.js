import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import PeopleTable from './PeopleTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            People of SalesLoft
          </header>
          <PeopleTable />
        </div>
      </Provider>
    );
  };
};

export default App;

