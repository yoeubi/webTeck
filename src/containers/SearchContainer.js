import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Search from '../components/Search';
import axios from 'axios';

@inject(stores => ({
  keyword: stores.keywordStore.keyword,
  insertKeyword: stores.keywordStore.insertKeyword,
  insertGitList: stores.gifListStore.insertGitList,
  gifList: stores.gifListStore.gifList,
}))
@observer
class SearchContainer extends Component {
  onSubmit = e => {
    e.preventDefault();
    const { keyword } = this.props;
    const res = axios({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      params: {
        api_key: 'BfmB0JOT7JOaRjSsHk1mE48EkrYuBqbM',
        q: keyword,
        limit: 20,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.then(({ data: { data, pagination } }) => {
      const { insertGitList } = this.props;
      insertGitList({
        newGitList: data,
        newTotalCount: pagination.total_count,
        newCount: pagination.count,
      });
    });
  };
  render() {
    const { keyword, insertKeyword } = this.props;
    return (
      <Search
        val={keyword}
        onChange={e => insertKeyword(e.target.value)}
        onSubmit={this.onSubmit}
      />
    );
  }

}

export default SearchContainer;
