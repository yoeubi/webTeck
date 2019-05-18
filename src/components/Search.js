import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('keywordStore')
@observer
class Search extends Component {
  render() {
    const { keywordStore } = this.props;
    console.log(keywordStore.keyword);
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={keywordStore.insertKeyword}
            value={keywordStore.keyword}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
