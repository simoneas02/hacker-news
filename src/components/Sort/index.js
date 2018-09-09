import React from 'react';

import Button from '../Button';

const Sort = ({ sortKey, onSort, children, className }) => (
  <Button onClick={() => onSort(sortKey)} className={className}>
    {children}
  </Button>
);

export default Sort;
