import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <nav className='navbar bg-dark'>
          <h1>
            <Link to='/'>
              <i className='fas fa-code'></i> TrustConnector
            </Link>
          </h1>
          <ul>
            <li>
              <Link to='/shareinformation'>
                <i className='fas fa-users'></i>
                <span className='hide-sm'> Share Information</span>
              </Link>
            </li>
            <li>
              <Link to='/getinformation'>
                <i className='fas fa-user'></i>
                <span className='hide-sm'> Get Information</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar;
