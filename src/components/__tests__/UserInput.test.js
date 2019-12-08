import React from 'react';
import { shallow } from 'enzyme';
import { UserInput } from '../UserInput';
import Loader from 'react-loader-spinner';

describe('<UserInput />', () => {
  describe('when not loading', () => {
    [
      {
        element: 'input (enabled)',
        selector: '.user-input > input:not([disabled])'
      },
      {
        element: 'button (enabled)',
        selector: '.user-input > button:not([disabled])'
      },
      {
        element: 'solution label',
        selector: '.solution'
      }
    ].forEach(({ element, selector }) => {
      it(`renders a(n) ${element} element`, () => {
        const wrapper = shallow(<UserInput />);
        expect(wrapper.find(selector)).toHaveLength(1);
      });
    });
  });

  describe('when loading', () => {
    [
      {
        element: 'input (disabled)',
        selector: '.user-input > input[disabled]'
      },
      {
        element: 'button (disabled)',
        selector: '.user-input > button[disabled]'
      },
      {
        element: 'loading indicator',
        selector: Loader
      }
    ].forEach(({ element, selector }) => {
      it(`renders a ${element} element`, () => {
        const wrapper = shallow(<UserInput loading />);
        expect(wrapper.find(selector)).toHaveLength(1);
      });
    });
  })
});
