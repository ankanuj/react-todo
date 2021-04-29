import React,{Component} from 'react';

import './todo.style.css';
class ToDoComponent extends Component{
  constructor(){
    super();
    this.state = {
      todo: [],
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({text:event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.text.length === 0){
        return;
    };
    const item = {text: this.state.text, id:Date.now};
    this.setState ({
        todo: this.state.todo.concat(item),
        text: ''
    });
  }
  render(){
    return(
      <div className=" container todo-block">
        <h1 className="heading" > ToDo Application </h1>
          <hr/>
          {this.state.todo.map((elem) => 
            <h4>
              <li
                className="todo-list" 
                key={elem.id}>
                {elem.text}
              </li>
            </h4>
          )}
          <form className="form-group" onSubmit= {this.handleSubmit}>
            <label><h3>What is your today task?</h3></label><br/>
            <input
              className="form-control"
              onChange= {this.handleChange}
              placeholder="write something"
              value= {this.state.text}
            />
            <button className="btn btn-danger mt-2 btn-lg" onClick={this.handleSubmit}>Add</button>
          </form>
      </div>
    );
  }
}
export default ToDoComponent;