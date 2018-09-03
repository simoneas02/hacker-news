import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onChange, onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    {children}
    <input type="text" onChange={onChange} value={value} />
    <button type="submit">{children}</button>
  </form>
);

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

export default Search;
