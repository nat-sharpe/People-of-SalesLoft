import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import PeopleTable from './PeopleTable';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.salesloft.com/v2/people.json';
    const apiKey = process.env.REACT_APP_API_KEY;
    const getPeople = async () => {
      await fetch((proxyurl + url), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${apiKey}`
        }
      })
        .then(result => {
          const jsonResult = result.json();
          jsonResult.then(people => {
            console.log(people.data)
          });
        })
        .catch(err => console.log(err));
    };
    getPeople();
  };

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