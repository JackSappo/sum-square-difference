import React, { Component } from 'react';
import '../assets/stylesheets/App.css';
import { NetworkRequests } from './NetworkRequests';
import { squaresDifference } from '../utils/calculations';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      solutionValue: 0,
      networkRequests: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  async onSend() {
    const payload = await squaresDifference(parseFloat(this.state.inputValue));
    this.setState({ 
      solutionValue: payload.value,
      networkRequests: [
        ...this.state.networkRequests,
        payload
      ]
    });
  }

  render() {
    const { inputValue, networkRequests, solutionValue } = this.state

    return (
      <div className="App">
        <div id="main">
          <input value = {inputValue || ''} type="number" onChange={this.handleInputChange} />
          <button onClick={this.onSend}>Send</button>
          Solution: {solutionValue}
        </div>
        <NetworkRequests networkRequests={networkRequests}/>
      </div>
    );
  }
}

export default App;
