import React from 'react';
import { shallow } from 'enzyme';
import { NetworkRequests } from '../NetworkRequests';
import { NetworkRequest } from '../NetworkRequest';

describe('<NetworkRequests />', () => {
  [0, 1, 5, 10].forEach(n => {
    it(`renders ${n} components for ${n} network requests`, () => {
      const networkRequests = new Array(n).fill(Object.create({}));
      const wrapper = shallow(
        <NetworkRequests networkRequests={networkRequests} />
      );
      expect(wrapper.find(NetworkRequest)).toHaveLength(n);
    })
  })
});