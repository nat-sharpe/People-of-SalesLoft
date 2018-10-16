import React, {Component} from 'react';

const TableBody = props => {
  return (
    <h1>Hi</h1>
  )
};

class Table extends Component {
  render() {
    const { peopleData } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
          </tr>
        </thead>
        <TableBody peopleData={peopleData} />
      </table>
    );
  };
};

export default Table;