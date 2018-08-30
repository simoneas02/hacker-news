import React, { Component } from 'react';

import List from './List';
import Search from './Search';

const DEFAULT_QUERY='redux';
const PATH_BASE='https://hn.algolia.com/api/v1';
const PATH_SEARCH='/search';
const PARAM_SEARCH='query=';

class App extends Component {
  constructor ( props ) {
    super(props);
    this.state = {
      title: 'My Title',
      result: null,
      searchTerm: DEFAULT_QUERY
    };

    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  onSearchSubmit() {
    const { searchTerm } = this.state; 
    this.fetchSearchTopStories(searchTerm);
  }

  fetchSearchTopStories(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }


  componentDidMount() {
    const { searchTerm } = this.state; 
    this.fetchSearchTopStories(searchTerm);
}

  onDimiss ( id ) {
    const isNotId = item => item.objectID !== id;
    const updateList = this.state.result.hits.filter( isNotId );
    this.setState({ result: { ...this.state.result, hits: updateList } });
  }

  onSearchChange =  event => {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    
  }

  render() {
    const { 
      title, 
      searchTerm,
      result 
    } = this.state;
    
    if (!result) { return null; }

    return (
      <div>
        <h1>{ title }</h1>

        <Search
          value={ searchTerm }
          onChange={ this.onSearchChange }
          onSearchSubmit={ this.onSearchSubmit }
        >
          Search
        </Search>

        { result &&
          <List
            list={ result.hits }
            pattern={ searchTerm }
            onDimiss={ this.onDimiss }
          />
        }
      </div>
    );
  }
}

export default App;
