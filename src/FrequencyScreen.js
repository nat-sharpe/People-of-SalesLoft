import React, {Component} from 'react';
import FrequencyTable from './FrequencyTable';

class FrequencyScreen extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <FrequencyTable />
      </table>
    );
  };
};

export default FrequencyScreen;
