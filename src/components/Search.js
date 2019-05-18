import React, { Component } from 'react';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
