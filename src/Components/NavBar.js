import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="main-header">
        <header>People of SalesLoft</header>
        <button><Link to="/">Home</Link></button> 
        <button><Link to="/frequency">Frequency Count</Link></button>
        <button><Link to="/dupes">Possible Duplicates</Link></button>
    </nav>
  )
}

export default NavBar;