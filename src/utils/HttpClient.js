import { squaresDifference } from './calculations';

class HttpClient {
  constructor() {
    this.calls = {
      /*
      inputValue: {
        value: 0,
        last_datetime: Date,
        occurrences: 0
      }
      */
    }
  }

  get(url) {}

  post(url, payload) {
    const endpoint = url.replace('/api/', '');
    const { inputValue } = payload;

    // This is where we would normally do the actual call to server

    switch (endpoint) {
      case 'calculate':
        const value = squaresDifference(inputValue);
        const response = {
          datetime: new Date().toISOString(),
          value,
          number: inputValue,
          occurrences: 'to-do',
          last_datetime: 'to-do'
        }

        return Promise.resolve(response);
      default:
        return null;
    }
  }
}

export default HttpClient;