import React from "react";
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

const List = ({ list, onDimiss, sortKey, isSortReverse, onSort }) => {
  const sortedList = SORTS[sortKey](list);
  const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

  return (
    <ul>
      <div className="table-header">
        <span>
          <Sort sortKey={"TITLE"} onSort={onSort} activeSortKey={sortKey}>
            {" "}
            Title
          </Sort>
        </span>
        <span>
          <Sort sortKey={"AUTHOR"} onSort={onSort} activeSortKey={sortKey}>
            {" "}
            Author
          </Sort>
        </span>
        <span>
          <Sort sortKey={"COMMENTS"} onSort={onSort} activeSortKey={sortKey}>
            {" "}
            Comments
          </Sort>
        </span>
        <span>
          <Sort sortKey={"POINTS"} onSort={onSort} activeSortKey={sortKey}>
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
          onSort={onSort}
        />
      ))}
    </ul>
  );
};

const ListWithConditionalRendering = withLoadingIndicator(
  withNull(withEmpty(List))
);

export default ListWithConditionalRendering;
