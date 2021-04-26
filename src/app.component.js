import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from "./routes";
import Header from './components/header/header.component';
import './App.css';

function AppComponent(params) {
  // other stuff
  return(
    <div className="App">
      <Header />
      {/* app routes */}
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default AppComponent;