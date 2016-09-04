import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../public/components/App';

describe('Testing this bad boy', function() {
  
  it ('should run this test', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div className="hi" />)).toBe(true);
  });

  it ('should have three divs', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.person').length).toBe(2);
  });
})