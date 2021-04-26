import React,{Component} from 'react';

import './todo.style.css';

class ToDo extends Component {

    constructor () {
        super();
        this.state = {
            todo:[],
            text:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

handleChange(event) {
    this.setState({
        text:event.target.value,
    });
}

handleSubmit(event) {
    event.preventDefault();
    if(this.state.text.length === 0){
        return;
    };
    const item = {text:this.state.text, id:Date.now};
    this.setState ({
        todo:this.state.todo.concat(item),
        text:''

    });

}


    render () {
        return (
            <div className = "todo-block">
                <h1 className = "heading" > ToDo Application </h1>
                <hr></hr>
                {
                    this.state.todo.map((elem) => 
                        <li className = "todo-list" key={elem.id}>{elem.text}</li>)
                }
                <form className="todo-form" onSubmit={this.handleSubmit}>
                    <label > What is your today task? </label><br/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add 
                    </button>
                    </form>
            </div>
        );
    }
}

export default ToDo;