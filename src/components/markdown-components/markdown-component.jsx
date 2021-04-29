import React , {Component} from 'react';
import {Container} from 'react-bootstrap';

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
      },() =>{
      this.makeBold(this.state.inputText)
    });
  };
  makeBold=(inputText)=> {
    // const {inputText} = this.state;
    let boldStr= "";
    let inputCopy= inputText;
    let hashtag= "";
    let mentionText= "";
    let bgColor= "red";
    let color= "blue";
    let textColor="white";
    let strikeText= "";
    let italicText= "";
    var regExp = /[a-zA-Z]/g; 
    inputCopy.split("\n").forEach((str) => {
      str.split(" ").forEach(elem =>{
        const strLen = elem.length;
        var firstIndexOfAsterisk = elem.indexOf("*",0);
        var lastIndexAst = elem.lastIndexOf("*",strLen);
        console.log(elem.substring(firstIndexOfAsterisk,firstIndexOfAsterisk+2));
        //checking for ** tag 
        if(
        '**' === elem.substring(firstIndexOfAsterisk,firstIndexOfAsterisk+2) &&
        "**" === elem.substring(lastIndexAst-1, lastIndexAst+1) && strLen>2 ) 
        {
          
        boldStr = elem.substring(firstIndexOfAsterisk+2, lastIndexAst-1);
        if(firstIndexOfAsterisk > 0){
          var beforeAsteriskText = elem.substring(0,firstIndexOfAsterisk);
          var afterAsteriskText = elem.substring(lastIndexAst+1, strLen+1);
          console.log('hi');
          inputCopy = inputCopy.replace(elem,beforeAsteriskText+"<b>"+boldStr +"</b>"+afterAsteriskText);

          }
        else if(regExp.test(boldStr)){
          inputCopy = inputCopy.replace(elem,"<b>"+boldStr +"</b>");
          }
        }
        //checking for single *
        else if(
        '*' === elem.substring(firstIndexOfAsterisk,firstIndexOfAsterisk+1) &&
        "*" === elem.substring(lastIndexAst, lastIndexAst+1) && strLen>2 && regExp.test(elem) )
        {
        italicText= elem.substring(firstIndexOfAsterisk+1, lastIndexAst);
        if(firstIndexOfAsterisk > 0){
          beforeAsteriskText = elem.substring(0,firstIndexOfAsterisk);
          afterAsteriskText = elem.substring(lastIndexAst+1, strLen+1);
          inputCopy = inputCopy.replace(elem,beforeAsteriskText+'<i>'+italicText+'</i>'+afterAsteriskText);
          }
        else{
          inputCopy= inputCopy.replace(elem,('<i>'+italicText+'</i>'))
          }
        }
      //checking for #   
      else if('#' === elem.substring(0,1) && strLen>1){
        hashtag = elem.substring(1,strLen);
        inputCopy = inputCopy.replace(elem,('<span style="color:'+color+';">'+hashtag+'</span>'))
      }
      //checking for @
      else if('@' === elem.substring(0,1) && strLen>1){
        mentionText= elem.substring(1,strLen);
        inputCopy= inputCopy.replace(elem,('<span style="background-color:'+bgColor+'; color:'+textColor+';">@'+mentionText+'</span>'))
      }
      //checking for ~
      else if('~' === elem.substring(0,1) && strLen>1){
        strikeText= elem.substring(1,strLen);
        inputCopy= inputCopy.replace(elem,('<strike>'+strikeText+'</strike>'))
      }
      });
    });
    this.setState({markDownText: inputCopy});
  };

  render() {
    const { inputText, markDownText} = this.state;
    return (
      <Container className="markdown-block">
        <h1 className="markdown-heading mt-4">MarkDown Application</h1> <hr/>
        <textarea 
          className="form-control" 
          onChange={this.handleChange} 
          value={inputText}
          rows="5" />
        <h1 className="output-header">Output Area</h1><hr/>
        <div className="output-text" dangerouslySetInnerHTML={{ __html: markDownText }}></div>
      </Container>
    );
  }
};
export default MarkDownComponent;