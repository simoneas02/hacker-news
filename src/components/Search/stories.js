import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Search from '.';

storiesOf('Search', module).add('Basic search', () => {
  const children = text('children', 'Search');
  const value = text('text', 'redux');
  const onSearchChange = action('search');
  const onSearchSubmit = action('search');

  return (
    <Search
      value={value}
      children={children}
      onChange={onSearchChange}
      onSubmit={onSearchSubmit}
    />
  );
});
