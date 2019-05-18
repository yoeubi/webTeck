import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import List from '../components/List';

@inject('gifListStore')
@observer
export default class ListContainer extends Component{

  constructor(props){
    super();
  }

  creatList(gifList){
    return gifList.map((gif, idx)=>{
      return <List key={idx} gif={gif} idx={idx} />
    })
  }

  render() {
    const {gifListStore} = this.props;
    const List = this.creatList(gifListStore.gifList);

    return (
      <ul>
        {List}
      </ul>
    )
  }
};

