import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Search from '../components/Search';
import {getList} from '../service';
@inject(stores => ({
  keyword: stores.keywordStore.keyword,
  insertKeyword: stores.keywordStore.insertKeyword,
  insertGitList: stores.gifListStore.insertGitList,
  gifList: stores.gifListStore.gifList,
  offset: stores.gifListStore.offset,
}))
@observer
class SearchContainer extends Component {
  onSubmit = e => {
    e.preventDefault();
    getList(this.props.keyword)
     .then(({ data: { data, pagination } }) => {
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
