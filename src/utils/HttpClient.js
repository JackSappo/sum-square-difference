import { squaresDifference } from './calculations';

class HttpClient {
  constructor() {
    this.calls = {};
  }

  get(url) {}

  post(url, payload) {
    const endpoint = url.replace('/api/', '');
    const { inputValue } = payload;

    // (This is where we would normally do the actual call to server)

    switch (endpoint) {
      case 'calculate':
        return this._calculate(inputValue);
      default:
        return null;
    }
  }

  _calculate(inputValue) {
    const parsedValue = parseInt(inputValue)
    const cachedResponse = this.calls[parsedValue];

    const response = cachedResponse ? 
      {
        value: cachedResponse.value,
        last_datetime: cachedResponse['last_datetime'],
        occurrences: cachedResponse.occurrences + 1
      } : {
        value: squaresDifference(parsedValue),
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
    }
  }
}

export default HttpClient;