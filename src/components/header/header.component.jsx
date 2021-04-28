import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';


import '../header/header.style.css';

const Header = () => {
return (
  <Nav className = 'navbar header bg-dark pb-5 '>
    <p className = " brand-title"> <Link to='/'>Anuj</Link></p>
    <ul className = 'header-items text-white mr-auto'>
      <li><Link to = '/todo' > Todo </Link></li>
        <li><Link to = '/markdown' >Markdown </Link></li>
      </ul>
  </Nav>
)
};

export default Header;