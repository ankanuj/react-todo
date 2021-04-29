import React from 'react';
import {Link} from 'react-router-dom';


import './homePage.style.css';

const HomePage = () =>{
  return (
    <div className="container">
      <div className="container bg-light mt-5 pt-2 pb-5">
        <h1>A Simple Application</h1>
        <hr/>
        <div className="container">
          <ul className="app-items">
            <li><h3 className="text-dark"><Link to="/todo">Todo</Link></h3></li>
            <li><h3><Link to="/markdown">Markdown</Link></h3></li>
          </ul>
        </div>
      </div>
    </div>   
)};
export default HomePage;