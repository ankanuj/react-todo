import React,{Component} from 'react';

import './todo.style.css';

class ToDo extends Component {

    constructor () {
        super();
        this.state = {
            todo:[
                {id:'1',
                text:'anuj'}],
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
    this.setState ({
        todo:{text:this.setState.text,id:Date.now},
        text:''

    });
    alert('todays task added'+ this.state.todo);

}


    render () {
        return (
            <div className = "todo-block">
                <h1 className = "heading" > ToDo Application </h1>
                <hr></hr>
                {
                    this.state.todo.map((elem) => 
                        <li key={elem.id}>{elem.text}</li>)
                }
                <form className="todo-form" onSubmit={this.handleSubmit}>
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