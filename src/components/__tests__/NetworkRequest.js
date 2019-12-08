import React from 'react';
import { shallow } from 'enzyme';
import { NetworkRequest } from '../NetworkRequest';

describe('<NetworkRequest />', () => {
  it('renders', () => {
    const wrapper = shallow(<NetworkRequest />);
    expect(wrapper.find('.network-request')).toHaveLength(1);
  })
});