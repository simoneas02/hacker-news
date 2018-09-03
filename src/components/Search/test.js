import React from 'react';
import ReactDOM from 'react-dom';
import renderer from'react-test-renderer';

import Search from '.';

describe('Search', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create( <Search /> );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
