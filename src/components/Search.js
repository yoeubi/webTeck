import React from 'react';
import styles from './Search.scss';

const Search = ({ val, onChange, onSubmit }) => {
  return (
    <div className={styles.search}>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={val} />
        <button>검색</button>
      </form>
    </div>
  );
};

export default Search;
