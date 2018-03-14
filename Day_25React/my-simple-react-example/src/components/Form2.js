import React from 'react'

export class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
    }
  }
  
    subtractNumber(event){
    event.preventDefault();
    let num1 = Number(document.getElementById('num11').value);
    let num2 = Number(document.getElementById('num21').value);
    if(num1 != num1 || num2 != num2){
      this.setState({
        answer : 'Please Enter a Number',
      })
      return;
    }
    this.setState({
      answer: Number(document.getElementById('num11').value) - Number(document.getElementById('num21').value),
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>SUBTRACT Function</label><br />
          <input id="num11" type="text" /><br /><br />
          <input id="num21" type="text" /><br /><br />
          <button onClick={this.subtractNumber.bind(this)}>Subtract</button><br/>
          <label>{this.state.answer}</label>
        </div>
      </form>
    );
  };
}