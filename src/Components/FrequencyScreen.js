import React, {Component} from 'react';
import FrequencyTable from './FrequencyTable';

class FrequencyScreen extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 className="landing-header">Frequency Count</h2>
        <p>
          A frequency count of all the unique characters in the local-parts of the email addresses, sorted in descending order.
        </p>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <FrequencyTable />
        </table>
      </div>
    );
  };
};

export default FrequencyScreen;
