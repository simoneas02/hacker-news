import React from "react";

import Button from "../Button";

const List = ({ list, onDimiss }) => {
  if (!list) return null;

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return list.map(item => (
      <div key={item.objectID}>
        <h2>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </h2>
        <p>{item.author}</p>
        <p>{item.comments}</p>
        <span>{item.points}</span>
        <Button onClick={() => onDimiss(item.objectID)}>Dimiss</Button>
      </div>
    ));
  }
};

export default List;
