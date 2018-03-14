import React from 'react'
import {Form1} from './Form1'
import {Form2} from './Form2'

class App extends React.Component {
  render() {
    return (
      <div>
        <Form1 />
        <hr/>
        <Form2 />
      </div>
    );
  }
}
export default App