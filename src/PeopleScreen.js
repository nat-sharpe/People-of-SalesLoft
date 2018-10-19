import React, {Component} from 'react';
import PeopleTable from './PeopleTable';

class PeopleScreen extends Component {

  render() {
    return (
      <table>
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