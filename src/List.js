import React, { Component } from 'react';

const isSearchTerm = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class List extends Component {
    render () {
        const { list, pattern, onDimiss } = this.props;
        return (
            list.filter( isSearchTerm ( pattern ) ).map( item =>
                <div key={ item.objectId }>
                    <h2><a href={ item.url }>{ item.title }</a></h2>
                    <p>{ item.author }</p>
                    <p>{ item.comments }</p>
                    <span>{ item.points }</span>
                    <button 
                        onClick={ () => onDimiss( item.objectId ) } 
                        type='button'
                    >
                        Dimiss
                    </button>
                </div>
            )
        )
    }
}

export default List;