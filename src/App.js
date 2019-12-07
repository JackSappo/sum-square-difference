import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      networkRequests: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  onSend() {
    console.log('Sending', this.state.inputValue);
  }

  render() {
    return (
      <div className="App">
        <input value = {this.state.inputValue || ''} type="number" onChange={this.handleInputChange} />
        <button onClick={this.onSend}>Send</button>
      </div>
    );
  }
}

export default App;
