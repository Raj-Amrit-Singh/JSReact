import React from 'react';

export class Form1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    answer : null,
  }
  this.addNumber = this.addNumber.bind(this);
}

  addNumber(event) {
    event.preventDefault();
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    if(num1 != num1 || num2 != num2){
      this.setState({
        answer : 'Please Enter a Number',
      })
      return;
    }
    this.setState({
      answer: num1 + num2,
    });
  }
  
  render() {
    return (
      <form>
        <div>
          <label>ADD Function</label><br />
          <input  id="num1" type="text" /><br /><br />
          <input id="num2" type="text" /><br /><br />
          <button onClick={this.addNumber}>Add</button><br/>
          <label>{this.state.answer}</label>
        </div>
      </form>
    );
  };
}