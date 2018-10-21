import React, {Component} from 'react';
import DupesTable from './DupesTable';

class DupeScreen extends Component {

  render() {
    return (
      <table className="table">
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