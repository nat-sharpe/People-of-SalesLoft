import React, {Component} from 'react';
import { connect } from 'react-redux';

class FrequencyScreen extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Frequency</th>
            <th>Title</th>
          </tr>
        </thead>
      </table>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  };
};

export default connect(mapStateToProps)(FrequencyScreen);
