import React from "react";
import PropTypes from "prop-types";

import pagination from "./pagination";

const Pagination = ({ total, activePage, pageLink, onClick }) => {
  const handleClick = !onClick
    ? null
    : e => {
        e.preventDefault;
        onClick(page);
      };
  return (
    <ul>
      {pagination({ total, activePage }).map((page, index) => (
        <li key={index}>
          {page === "..." ? (
            <span>{page}</span>
          ) : (
            <a href={pageLink.replace("%page%", page)} onClick={handleClick}>
              {page}
            </a>
          )}
          ;
        </li>
      ))}
    </ul>
  );
};

Pagination.defaultProps = {
  pageLink: ""
};

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
};

export default Pagination;
