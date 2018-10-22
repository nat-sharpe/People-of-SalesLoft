import React, {Component} from 'react';

class LoadingScreen extends Component {

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 className="landing-header">Loading Records...</h2>
      </div>
    );
  };
};

export default LoadingScreen;