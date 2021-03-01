import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
<header>        
  <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to='/' className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/project' className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-item">
            <Link to='/resume' className="nav-link">
              Resume
            </Link>
          </li>
      </ul>
  </nav>
</header>
     
    );
}

export default Nav;