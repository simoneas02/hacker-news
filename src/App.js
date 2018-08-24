import React, { Component } from 'react';

const list = [
    {
      title : 'Keep and going',
      url: 'dsdaad',
      author: 'dsds',
      comments: 4,
      points: 3,
      objectId: 0
    },
    {
      title : 'Keep and wqwqw',
      url: 'dsdaad',
      author: 'dsds',
      comments: 2,
      points: 5,
      objectId: 1
    }
];

const isSearchTerm = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor ( props ) {
    super(props);
    this.state = {
      title: 'My Title',
      list,
      searchTerm: ''
    };

    this.onDimiss = this.onDimiss.bind(this);
    this.onDimiss = this.onSearchChange.bind(this);
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
    return (
      <div>
        <h1>{ this.state.title }</h1>

        <form>
          <input 
            type='text'
            onChange={ this.onSearchChange }
            value={ this.state.searchTerm }
          />
        </form>

        {this.state.list.filter( isSearchTerm ( this.state.searchTerm ) ).map( item =>
          <div key={ item.objectId }>
            <h2><a href={ item.url }>{ item.title }</a></h2>
            <p>{ item.author }</p>
            <p>{ item.comments }</p>
            <span>{ item.points }</span>
            <button 
              onClick={ () => this.onDimiss( item.objectId ) } 
              type='button'
            >
              Dimiss
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
