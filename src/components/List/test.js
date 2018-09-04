import React from 'react';
import ReactDOM from 'react-dom';
import renderer from'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('List', () => {
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ],
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');    
    ReactDOM.render(<List { ...props }/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create( <List { ...props }/> );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})