import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,Container} from 'react-bootstrap';

import './homePage.style.css';
const HomePage = () => {
  return (
    <Container>
      <Jumbotron className="mt-5 pt-2">
        <h1>A Simple Application </h1>
        <hr />
        <Container>
          <ul className="app-items">
            <li><h3 className="text-dark"><Link to="/todo">Todo</Link></h3></li>
            <li><h3><Link to="/markdown">Markdown</Link></h3></li>
          </ul>
        </Container>
      </Jumbotron>
    </Container>
    
  );
}

export default HomePage;