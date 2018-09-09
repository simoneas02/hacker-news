import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Button from '../Button';
import ListWithConditionalRendering from '../List';
import { Loading } from '../Loading';
import Search from '../Search';
import { updateSearchTopStoriesState } from '../../utils';

import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from '../../constants';

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      title: 'My Title',
      results: null,
      searchTerm: DEFAULT_QUERY,
      searchKey: ' ',
      error: null,
      isLoading: false,
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    this.setState({ isLoading: true });
    axios
      .get(
        `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`,
      )
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({ error }));
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    event.preventDefault();
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    this.setState(updateSearchTopStoriesState(hits, page));
  }

  onDimiss(id) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page },
      },
    });
  }

  render() {
    const {
      title,
      searchTerm,
      results,
      searchKey,
      error,
      isLoading,
    } = this.state;

    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;

    const list =
      (results && results[searchKey] && results[searchKey].hits) || [];

    return (
      <div>
        <h1>{title}</h1>

        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        >
          Search
        </Search>

        {error ? (
          <p>Something went wrong.</p>
        ) : (
          results && (
            <ListWithConditionalRendering
              list={list}
              onDimiss={this.onDimiss}
            />
          )
        )}

        <div className="interactions">
          {isLoading ? (
            <Loading />
          ) : (
            <Button
              onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
            >
              More
            </Button>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  results: PropTypes.array,
  searchTerm: PropTypes.string,
  searchKey: PropTypes.string,
  error: PropTypes.element,
  isLoading: PropTypes.bool,
};

export default App;
