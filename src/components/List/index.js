import React, { Component } from "react";
import { sortBy } from "lodash";

import ListItem from "../ListItem";
import Sort from "../Sort";
import { withLoadingIndicator, withNull, withEmpty } from "../../utils";

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, "title"),
  AUTHOR: list => sortBy(list, "author"),
  COMMENTS: list => sortBy(list, "num_comments").reverse(),
  POINTS: list => sortBy(list, "points").reverse()
};

class List extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sortKey: 'NONE',
      isSortReverse: false,
    };
    this.onSort = this.onSort.bind(this);
}
  onSort(sortKey) {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }

  render () {
   const { list, onDimiss } = this.props;
   const { sortKey, isSortReverse } = this.state;
   
   const sortedList = SORTS[sortKey](list);
   const reverseSortedList = isSortReverse
     ? sortedList.reverse()
     : sortedList;

  return (
    <ul>
      <div className="table-header">
        <span>
          <Sort sortKey={"TITLE"} onSort={this.onSort} activeSortKey={sortKey}>
            {" "}
            Title
          </Sort>
        </span>
        <span>
          <Sort sortKey={"AUTHOR"} onSort={this.onSort} activeSortKey={sortKey}>
            {" "}
            Author
          </Sort>
        </span>
        <span>
          <Sort sortKey={"COMMENTS"} onSort={this.onSort} activeSortKey={sortKey}>
            {" "}
            Comments
          </Sort>
        </span>
        <span>
          <Sort sortKey={"POINTS"} onSort={this.onSort} activeSortKey={sortKey}>
            {" "}
            Points
          </Sort>
        </span>
        <span>Archive</span>
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
};
}

const ListWithConditionalRendering = withLoadingIndicator(
  withNull(withEmpty(List))
);

export default ListWithConditionalRendering;
