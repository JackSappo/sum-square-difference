import HttpClient from '../HttpClient';

describe('HttpClient', () => {
  let httpClient;
  const endpoint = '/api/calculate';

  beforeEach(() => {
    httpClient = new HttpClient();
    httpClient._fakeTimer = jest.fn(cb => cb());
  });

  describe('post', () => {
    describe('calculate', () => {
      it('should generate new values', async () => {
        const response = await httpClient.post(endpoint, { inputValue: '10' });
        expect(response.value).toEqual(2640);
        expect(response.last_datetime).toEqual(null);
        expect(response.occurrences).toEqual(1);
        expect(typeof response.datetime).toEqual('string');
        expect(response.number).toEqual(10);
      });

      it('should memoize same values', async () => {
        await httpClient.post(endpoint, { inputValue: '10' });
        const response = await httpClient.post(endpoint, { inputValue: '10' });

        expect(typeof response.last_datetime).toEqual('string');
        expect(response.occurrences).toEqual(2);
      });

      it('should not memoize different values', async () => {
        await httpClient.post(endpoint, { inputValue: '5' });
        const response = await httpClient.post(endpoint, { inputValue: '10' });

        expect(response.last_datetime).toEqual(null);
        expect(response.occurrences).toEqual(1);
      });
    });

    it('should return null for invalid routes', async () => {
      const response = await httpClient.post('/bad/endpoint', {
        inputValue: '10'
      });
      expect(response).toEqual(null);
    });
  });
});
