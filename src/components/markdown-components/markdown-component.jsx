import React , {Component} from 'react';

import './markdown.css';

class MarkDownComponent extends Component {
    
    constructor(){
        super();
        
        this.state = {
            markDownText:'hi,**anuj**',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            markDownText:e.target.value
        });
		}
    render(){
    
        return(
            <div className = "markdown-block">
                <h1 className = "markdown-heading">MarkDown Application</h1>
                    <textarea
                    onChange = {this.handleChange}
                    value = {this.state.markDownText}
                    />
                    <h1 className = "output-header">Output area </h1>
                    <div className = "output-block"> {this.state.markDownText}</div>
            </div>

        );
    }
} 

export default MarkDownComponent;