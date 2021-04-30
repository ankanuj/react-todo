import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from './components/home-component/home-page';
import ToDoComponent from './components/todo-components/todo-component';
import MarkDownComponent from './components/markdown-components/markdown-component';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/todo" component = {ToDoComponent} />
      <Route exact path="/markdown" component={MarkDownComponent} />
    </Switch>
  );
}

export default Routes;