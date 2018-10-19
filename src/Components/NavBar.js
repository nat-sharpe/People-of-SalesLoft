import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <header className="App-header">People of SalesLoft</header>
      <div>
        <button><Link to="/">Home</Link></button> 
        <button><Link to="/frequency">Frequency Count</Link></button>
      </div>
    </nav>
  )
}

export default NavBar;