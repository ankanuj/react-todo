import React from 'react';
import {Link} from 'react-router-dom';

import '../header/header.style.css';

const Header = () =>{
  return(
    <nav className='navbar bg-dark '>
      <Link className="brand-title navbar-brand " to='/'>Anuj</Link>
      <ul className='nav header-items'>
        <li className="nav-item"><Link className="nav-link" to='/todo'>Todo</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/markdown'>Markdown</Link></li>
      </ul>
    </nav>
)};
export default Header;