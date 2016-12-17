import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Badge from '../src';

describe('<Badge /> component', function() {

  it('should badge exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Badge />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
