import React, { Component } from 'react';
import { sortBy } from 'lodash';

import ListItem from '../ListItem';
import Sort from '../Sort';
import { withLoadingIndicator, withNull, withEmpty } from '../../utils';

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse()
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortKey: 'NONE',
      isSortReverse: false
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    const isSortReverse =
      this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }

  render() {
    const { list, onDimiss } = this.props;
    const { sortKey, isSortReverse } = this.state;

    const sortName = ['Title', 'Author', 'Comments', 'Points'];
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

    return (
      <ul>
        <div>
          {sortName.map(name => (
            <Sort
              key={name}
              sortKey={name.toUpperCase()}
              onSort={() => this.onSort(name.toUpperCase())}
              activeSortKey={sortKey}
            >
              {name}
            </Sort>
          ))}
        </div>

        {reverseSortedList.map(item => (
          <ListItem
            key={item.objectID}
            item={item}
            onDimiss={onDimiss}
            onSort={this.onSort}
          />
        ))}
      </ul>
    );
  }
}

const ListWithConditionalRendering = withLoadingIndicator(
  withNull(withEmpty(List))
);

export default ListWithConditionalRendering;
