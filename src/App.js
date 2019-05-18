import React from 'react';
import SearchContainer from './containers/SearchContainer';
import ListContainer from './containers/ListContainer';
import styles from './App.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <SearchContainer />
      <ListContainer />
    </div>
  );
};

export default App;
