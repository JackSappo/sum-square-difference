import React, { Component } from 'react';
import '../assets/stylesheets/App.css';
import { UserInput } from './UserInput';
import { NetworkRequests } from './NetworkRequests';
import HttpClient from '../utils/HttpClient';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      loading: false,
      solutionValue: 0,
      networkRequests: []
    };

    this.httpClient = new HttpClient();

    this.onInputChange = this.onInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  onInputChange(e) {
    const inputValue = e.target.value;
    if (!inputValue.match(/^[0-9]*$/)) {
      return;
    }

    this.setState({ inputValue });
  }

  async calculate() {
    const { inputValue } = this.state;
    if (!inputValue && inputValue !== 0) {
      this.setState({ solutionValue: 0 });
      return;
    }

    this.setState({ loading: true });

    const response = await this.httpClient.post('/api/calculate', {
      inputValue
    });
    this.setState({
      loading: false,
      solutionValue: response.value,
      networkRequests: [response, ...this.state.networkRequests]
    });
  }

  render() {
    const { inputValue, loading, networkRequests, solutionValue } = this.state;

    return (
      <div className="App">
        <div id="main">
          <UserInput
            inputValue={inputValue}
            loading={loading}
            onInputChange={this.onInputChange}
            calculate={this.calculate}
            solutionValue={solutionValue}
          />
        </div>
        <NetworkRequests networkRequests={networkRequests} />
      </div>
    );
  }
}

export default App;
