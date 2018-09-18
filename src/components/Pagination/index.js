import React from 'react';

import pagination from './pagination';

const Pagination = ({ total, activePage, pageLink }) => (
  <ul>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index}>
        {page === '...' ? (
          <span>{page}</span>
        ) : (
          <a href={pageLink.replace('%page%', page)}>{page}</a>
        )}
        ;
      </li>
    ))}
  </ul>
);

export default Pagination;
