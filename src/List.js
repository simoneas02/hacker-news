import React from 'react';

import Button from './Button';

const isSearchTerm = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

const List = ({ list, pattern, onDimiss }) => 
    list.filter( isSearchTerm ( pattern ) ).map( item =>
        <div key={ item.objectID }>
            <h2><a href={ item.url } target='_blank'>{ item.title }</a></h2>
            <p>{ item.author }</p>
            <p>{ item.comments }</p>
            <span>{ item.points }</span>
            <Button onClick={ () => onDimiss( item.objectID ) } >
                Dimiss
            </Button>
        </div>  
)

export default List;