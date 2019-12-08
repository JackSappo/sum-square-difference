import React from 'react';
import { shallow } from 'enzyme';
import { UserInput } from '../UserInput';

describe('<UserInput />', () => {
  [
    {
      element: 'input',
      selector: '.user-input > input'
    },
    {
      element: 'button',
      selector: '.user-input > button'
    },
    {
      element: 'solution label',
      selector: '.solution'
    },
  ].forEach(({element, selector}) => {
    it(`renders a(n) ${element} element`, () => {
      const wrapper = shallow(<UserInput />);
      expect(wrapper.find(selector)).toHaveLength(1);
    })
  })
});