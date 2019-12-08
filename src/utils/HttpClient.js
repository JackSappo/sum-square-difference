import { squaresDifference } from './calculations';

class HttpClient {
  constructor() {
    this.calls = {};
  }

  async get(url) {}

  async post(url, payload) {
    const endpoint = url.replace('/api/', '');
    const { inputValue } = payload;

    // This is where we would normally do the actual call to server.
    // If this were the case, memoization would need to happen before this step.

    switch (endpoint) {
      case 'calculate':
        return this._calculate(inputValue);
      default:
        return null;
    }
  }

  async _calculate(inputValue) {
    const parsedValue = parseInt(inputValue);
    const cachedResponse = this.calls[parsedValue];

    const response = cachedResponse
      ? {
          value: cachedResponse.value,
          last_datetime: cachedResponse['last_datetime'],
          occurrences: cachedResponse.occurrences + 1
        }
      : {
          value: await this._fakeTimer(
            () => squaresDifference(parsedValue)
          ),
          last_datetime: null,
          occurrences: 1
        };

    response.datetime = new Date().toISOString();
    response.number = parsedValue;

    this._memoize(response);
    return Promise.resolve(response);
  }

  _memoize(response) {
    const { datetime, value, number, occurrences } = response;

    this.calls[number] = {
      value,
      number,
      last_datetime: datetime,
      occurrences
    };
  }

  async _fakeTimer(cb) {
    const ms = Math.random() * 3000;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(cb()) }, ms);
    });
  }
}

export default HttpClient;
