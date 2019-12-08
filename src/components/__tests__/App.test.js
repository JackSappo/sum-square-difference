import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('tests', () => {
  it('does a test', () => {
    const wrapper = shallow(<App />)

    expect(5).toEqual(5);
  })
})