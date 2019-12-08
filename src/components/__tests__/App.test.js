import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { UserInput } from '../UserInput';
import { NetworkRequests } from '../NetworkRequests';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a <UserInput /> component', () => {
    expect(wrapper.find(UserInput)).toHaveLength(1);
  });

  it('renders a <NetworkRequests /> component', () => {
    expect(wrapper.find(NetworkRequests)).toHaveLength(1);
  });

  describe('onInputChange', () => {
    it('sets state when value is a number', () => {
      wrapper.instance().onInputChange({ target: { value: '5' } });

      const passedValue = wrapper.find(UserInput).props().inputValue;
      expect(passedValue).toEqual('5');
    });

    it('does not set state when value is not a number', () => {
      ['a', '0.5', '-5'].forEach(value =>
        wrapper.instance().onInputChange({ target: { value } })
      );

      const passedValue = wrapper.find(UserInput).props().inputValue;
      expect(passedValue).toEqual('');
    });
  });

  describe('calculate', () => {
    const mockResponse = {
      number: 10,
      value: 2640
    };

    beforeEach(() => {
      wrapper.instance().httpClient.post = jest.fn(() =>
        Promise.resolve(mockResponse)
      );
    });

    afterEach(() => {
      wrapper.instance().httpClient.post.mockRestore();
    });

    it('calculates solutions and passes to <UserInput />', async () => {
      wrapper.setState({ inputValue: '10' });
      await wrapper.instance().calculate();

      const { inputValue, solutionValue } = wrapper.find(UserInput).props();

      expect(inputValue).toEqual('10');
      expect(solutionValue).toEqual(2640);
    });

    it('tracks multiple responses and passes to <NetworkRequests />', async () => {
      wrapper.setState({ inputValue: '10' });
      await wrapper.instance().calculate();
      await wrapper.instance().calculate();

      const { networkRequests } = wrapper.find(NetworkRequests).props();
      expect(networkRequests).toHaveLength(2);
    });

    it('does not calculate for blank values', async () => {
      wrapper.setState({ inputValue: '' });
      await wrapper.instance().calculate();
      const { inputValue, solutionValue } = wrapper.find(UserInput).props();

      expect(inputValue).toEqual('');
      expect(solutionValue).toEqual(0);
      expect(wrapper.instance().httpClient.post).not.toHaveBeenCalled();
    });
  });
});
