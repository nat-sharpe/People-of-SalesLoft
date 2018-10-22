import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  return (
    <nav className="main-header">
      <header><Link to="/" style={{ textDecoration: 'none', color:'white' }}>People of SalesLoft</Link></header>
      <div>
        <button><Link to="/people" style={styles}>People Records</Link></button> 
        <button><Link to="/frequency" style={styles}>Frequency Count</Link></button>
        <button><Link to="/dupes" style={styles}>Possible Duplicates</Link></button>
      </div>
    </nav>
  )
}

export default NavBar;

const styles = {
  textDecoration: 'none', 
  fontSize: 20, 
  color:'#1F85C0'
}