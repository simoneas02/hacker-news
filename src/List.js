import React from 'react';

import Button from './Button';

const isSearchTerm = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

const List = ({ list, pattern, onDimiss }) => 
    list.filter( isSearchTerm ( pattern ) ).map( item =>
        <div key={ item.objectId }>
            <h2><a href={ item.url }>{ item.title }</a></h2>
            <p>{ item.author }</p>
            <p>{ item.comments }</p>
            <span>{ item.points }</span>
            <Button onClick={ () => onDimiss( item.objectId ) } >
                Dimiss
            </Button>
        </div>  
)

export default List;