import React, { Component } from 'react';
import './App.css';
import { squaresDifference } from './utils/calculations';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      solution: 0,
      networkRequests: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  async onSend() {
    const solution = await squaresDifference(parseFloat(this.state.inputValue));
    this.setState({ solution });
  }

  render() {
    return (
      <div className="App">
        <input value = {this.state.inputValue || ''} type="number" onChange={this.handleInputChange} />
        <button onClick={this.onSend}>Send</button>
        Solution: {this.state.solution}
      </div>
    );
  }
}

export default App;
