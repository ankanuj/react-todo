import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from './components/home-component/home-page';
import Header from './components/header/header.component';
import ToDo from './components/todo-components/todo-component';
import MarkDown from './components/markdown-components/markdown-component';

import './App.css';

function App() {
  return (
    <div className="App">

      <Header />
      
        <Switch>
          <Route exact path = "/" component = {HomePage} />
          <Route exact path = "/todo" component = {ToDo} />
          <Route exact path = "/markdown" component = {MarkDown} />
        </Switch>

    </div>
  );
}

export default App;
