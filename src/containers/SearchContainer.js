import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Search from '../components/Search';

@inject('keywordStore')
@observer
class SearchContainer extends Component {
  render() {
    const {
      keywordStore: { keyword, insertKeyword },
    } = this.props;
    return (
      <Search val={keyword} onChange={e => insertKeyword(e.target.value)} />
    );
  }
}

export default SearchContainer;
