import React, {Component} from 'react';
import FrequencyTable from './FrequencyTable';
import './App.css';

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
