import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '.';

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
    const element = shallow(<App />);
    expect(element.state().title).toContain('My Title');
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
