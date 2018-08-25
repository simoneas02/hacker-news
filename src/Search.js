import React from 'react';

const Search = ({ value, onChange, children }) =>
    <form>
        { children }
        <input 
            type='text'
            onChange={ onChange }
            value={ value }
        />
    </form>

export default Search;