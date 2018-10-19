import React, {Component} from 'react';
import PeopleTable from './PeopleTable';
import '../App.css';

class PeopleScreen extends Component {

  render() {
    return (
      <table classname="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
          </tr>
        </thead>
        <PeopleTable />
      </table>
    );
  };
};

export default PeopleScreen;