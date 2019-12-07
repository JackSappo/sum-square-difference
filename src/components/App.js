import React, { Component } from 'react';
import '../assets/stylesheets/App.css';
import { UserInput } from './UserInput';
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

    this.onInputChange = this.onInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  onInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  async calculate() {
    const payload = await squaresDifference(this.state.inputValue);
    this.setState({ 
      solutionValue: payload.value,
      networkRequests: [
        payload,
        ...this.state.networkRequests
      ]
    });
  }

  render() {
    const { inputValue, networkRequests, solutionValue } = this.state

    return (
      <div className="App">
        <div id="main">
          <UserInput
            inputValue={inputValue}
            onInputChange={this.onInputChange}
            calculate={this.calculate}
            solutionValue={solutionValue}
          />
        </div>
        <NetworkRequests networkRequests={networkRequests}/>
      </div>
    );
  }
}

export default App;
