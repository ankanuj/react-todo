import React , {Component} from 'react';

import './markdown.css';

class MarkDownComponent extends Component {   
  constructor() {
    super();
    this.state= {
      inputText: "",
      markDownText: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange=(e)=> {
    this.setState({
      inputText: e.target.value,
    });
  };
  makeBold=()=> {
    const {inputText} = this.state;
    let boldStr= "";
    let inputCopy= inputText;
    let hashtag= "";
    let mentionText= "";
    let bgColor= "red";
    let color= "blue";
    let textColor="white";
    let strikeText= "";
    let italicText= "";
    inputCopy.split(" ").forEach((str) => {
      const strLen = str.length;
      if(
        str.substring(0, 2) === "**" &&
        str.substring(strLen-2, strLen) === "**" &&
        str.length>2
      ){
        console.log(str);
        boldStr = str.substring(2, strLen-2);
        inputCopy = inputCopy.replace(str,"<b>"+boldStr +"</b>");
      }
      else if('#' === str.substring(0,1) && strLen>1){
        console.log(str);
        hashtag = str.substring(1,strLen);
        inputCopy = inputCopy.replace(str,('<span style="color:'+color+';">'+hashtag+'</span>'))
      }
      else if('@' === str.substring(0,1) && strLen>1){
        mentionText= str.substring(1,strLen);
        inputCopy= inputCopy.replace(str,('<span style="background-color:'+bgColor+'; color:'+textColor+';">@'+mentionText+'</span>'))
      }
      else if('~' === str.substring(0,1) && strLen>1){
        strikeText= str.substring(1,strLen);
        inputCopy= inputCopy.replace(str,('<strike>'+strikeText+'</strike>'))
      }
      else if('*' === str.substring(0,1) && '*' === str.substring(strLen-1,strLen) ){
        italicText= str.substring(1,strLen-1);
        inputCopy= inputCopy.replace(str,('<i>'+italicText+'</i>'))
      }
    });
    this.setState({markDownText: inputCopy});
  };
  render() {
    const { inputText, markDownText} = this.state;
    return (
      <div className="markdown-block">
        <h1 className="markdown-heading">MarkDown Application</h1>
        <textarea onChange={this.handleChange} value={inputText} />
        <button onClick={this.makeBold}>See output</button>
        <h1 className="output-header">Output area </h1>
        <p dangerouslySetInnerHTML={{ __html: markDownText }}></p>
      </div>
    );
  }
};
export default MarkDownComponent;