import React, {Component} from 'react';
import DupesTable from './DupesTable';
import '../App.css';

class DupeScreen extends Component {

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
        <DupesTable />
      </table>
    );
  };
};

export default DupeScreen;