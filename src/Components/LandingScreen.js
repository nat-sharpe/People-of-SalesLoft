import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

class LandingScreen extends Component {

  render() {
    return (
      <div className="landing-body">
        <h1 className="landing-header">People of SalesLoft</h1>
        <p>An application for accessing and managing People data from SalesLoft's API. Built by Nat Sharpe using React.js.
        </p>
        <h3><Link to="/people" style={{ textDecoration: 'none', color:'#1F85C0'}}>People Records</Link></h3>
        <p>
          Shows a list of People records that are available via the API.  Displays each Person’s name, email address, and job title.
        </p>
        <h3><Link to="/frequency" style={{ textDecoration: 'none', color:'#1F85C0'}}>Frequency Count</Link></h3>
        <p>
          Displays a frequency count of all the unique characters in all the email addresses, sorted by descending frequency count.
        </p>
        <h3><Link to="/dupes" style={{ textDecoration: 'none', color:'#1F85C0'}}>Possible Duplicates</Link></h3>
        <p>
          Shows a list of suggested possible duplicate People. 
        </p>
      </div>
    );
  };
};

export default LandingScreen;