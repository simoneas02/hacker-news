import React from 'react';

import ListItem from '../ListItem';
import { withLoadingIndicator, withNull, withEmpty } from '../../utils';

const List = ({ list, onDimiss }) => 
    <ul>
        {list.map( item => 
            <ListItem key={item.objectID} item={ item } onDimiss={ onDimiss }/>
        )}
    </ul>

const ListWithConditionalRendering = withLoadingIndicator( withNull ( withEmpty ( List) ) );

export default ListWithConditionalRendering;
