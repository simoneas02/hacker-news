import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const List = ({ list, onDimiss }) => {
  if (!list) return null;

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return list.map(item => (
      <li key={item.objectID} className="list__item">
        <h2>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </h2>
        <p>{item.author}</p>
        <p>{item.comments}</p>
        <span>{item.points}</span>
        <Button onClick={() => onDimiss(item.objectID)}>Dimiss</Button>
      </li>
    ));
  }
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  onDimiss: PropTypes.func
};

export default List;
