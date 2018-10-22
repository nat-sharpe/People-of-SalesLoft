import React, {Component} from 'react';
import PeopleTable from './PeopleTable';

class PeopleScreen extends Component {

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 className="landing-header">People Records</h2>
        <p>
          A list of all People records that are available via the API. 
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
            </tr>
          </thead>
          <PeopleTable />
        </table>
      </div>
    );
  };
};

export default PeopleScreen;