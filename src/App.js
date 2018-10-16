import React, {Component} from 'react';
import './App.css';
import PeopleTable from './PeopleTable';

class App extends Component {
  render() {
    const people = [
      {
        "display_name": "Kyle Porter",
        "email_address": "kyle.porter@salesloft.com",
        "title": "CEO"
      },
      {
        "display_name": "Nora Ignatius",
        "email_address": "nora.ignatius@salesloft.com",
        "title": "Corporate Recruiter"
      },
      {
        "display_name": "Nat Sharpe",
        "email_address": "nat.sharpe@salesloft.com",
        "title": "Support Software Engineer"
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          People of SalesLoft
        </header>
        <PeopleTable peopleData={people}/>
      </div>
    );
  };
};

export default App;