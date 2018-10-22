import React, {Component} from 'react';
import DupesTable from './DupesTable';

class DupeScreen extends Component {

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 className="landing-header">Possible Duplicates</h2>
        <p>Pairs of people records where the local-parts of both email addresses begin with the same character and have fewer than five non-matching characters.
        </p>
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
      </div>
    );
  };
};

export default DupeScreen;