import React from 'react';
import { storiesOf } from '@storybook/react';

import Search from '.';

storiesOf('Search', module).add('Basic search', () => (
  <Search value="redux" children="Search" />
));
