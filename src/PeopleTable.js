import React, {Component} from 'react';

const TableBody = props => {
  console.log(props)
  const rows = props.peopleData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.display_name}</td>
        <td>{row.email_address}</td>
        <td>{row.title}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
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