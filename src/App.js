import React, { Component } from 'react';

import List from './List';
import Search from './Search';

const list = [
  {
    title : "You Don't Know JS: Up & Going",
    url: 'https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going',
    author: 'Kyle Simpson',
    comments: 4,
    points: 3,
    objectId: 0
  },
  {
    title : "You Don't Know JS:  Scope & Closures",
    url: 'https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures',
    author: 'Kyle Simpson',
    comments: 2,
    points: 5,
    objectId: 1
  }
];

class App extends Component {
  constructor ( props ) {
    super(props);
    this.state = {
      title: 'My Title',
      list,
      searchTerm: ''
    };

    this.onDimiss = this.onDimiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDimiss ( id ) {
    const isNotId = item => item.objectId !== id;
    const updateList = this.state.list.filter( isNotId );
    this.setState({ list: updateList });
  }

  onSearchChange = ( event ) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { 
      title, 
      list, 
      searchTerm 
    } = this.state;
    
    return (
      <div>
        <h1>{ title }</h1>
        <Search
          value={ searchTerm }
          onChange={ this.onSearchChange }
        >
          Search
        </Search>

        <List
          list={ list }
          pattern={ searchTerm }
          onDimiss={ this.onDimiss }
        />
      </div>
    );
  }
}

export default App;
