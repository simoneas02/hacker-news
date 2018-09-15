import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

import App from '.';
import Search from '../Search';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const props = {
    title: 'My Title',
    results: null,
    searchTerm: 'redux',
    searchKey: ' ',
    error: null
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('rendered the title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().title).toContain('My Title');
  });

  it('should make request to Api', () => {
    const wrapper = mount(<App />);

    // const search = wrapper.find(<Search />).find('button').simulate('click');
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
