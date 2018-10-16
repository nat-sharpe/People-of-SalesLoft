import React, {Component} from 'react';
import TableBody from './TableBody';

class PeopleTable extends Component {
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
        <TableBody />
      </table>
    );
  };
};

export default PeopleTable;