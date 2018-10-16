import React, {Component} from 'react';

class Table extends Component {
  render() {
    return (
      <table className="Table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kyle Porter</td>
            <td>kyle.porter@salesloft.com</td>
            <td>CEO</td>
          </tr>
          <tr>
            <td>Nora Ignatius</td>
            <td>nora.ignatius@salesloft.com</td>
            <td>Corporate Recruiter</td>
          </tr>
          <tr>
            <td>Nat Sharpe</td>
            <td>nat.sharpe@salesloft.com</td>
            <td>Support Software Engineer</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;