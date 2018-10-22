import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="main-header">
      <header><Link to="/">People of SalesLoft</Link></header>
      <div>
        <button><Link to="/people">People Records</Link></button> 
        <button><Link to="/frequency">Frequency Count</Link></button>
        <button><Link to="/dupes">Possible Duplicates</Link></button>
      </div>
    </nav>
  )
}

export default NavBar;