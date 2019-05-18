import React from 'react';
import './Search.scss';

const Search = ({ val, onChange, onSubmit }) => {
  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={val} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
