import React from 'react';
import {Link} from 'react-router-dom';


import '../header/header.style.css';

const Header = () => {
return (
    <div className = 'header'>
        <p className = " brand-title"> <Link to = '/' >Anuj</Link></p>
        <ul className = 'header-items'>
            <li><Link to = '/todo' > ToDo </Link></li>
            <li><Link to = '/markdown' >MarkDown </Link></li>
        </ul>
    </div>
)
};

export default Header;