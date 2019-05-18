import React from 'react';
import './Search.scss';

const Search = ({ val, onChange }) => {
  return (
    <div>
      <form>
        <input type="text" onChange={onChange} value={val} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
