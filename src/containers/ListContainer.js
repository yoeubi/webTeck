import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import List from '../components/List';
import style from './ListContainer.scss';
import {getList} from '../service';


@inject(stores => ({
  keyword: stores.keywordStore.keyword,
  insertKeyword: stores.keywordStore.insertKeyword,
  insertGitList: stores.gifListStore.insertGitList,
  gifList: stores.gifListStore.gifList,
  offset: stores.gifListStore.offset,
}))
@observer

export default class ListContainer extends Component{
  constructor(props){
    super();
    window.addEventListener('scroll', this.onScrollDown);
  }

  onScrollDown = (e) => {
    let curH = document.body.clientHeight;
    let scorllTop = window.scrollY;
    
    console.log(curH, scorllTop);
    console.log((curH - window.innerHeight) * 0.7);
    console.log(scorllTop);
    if((curH - window.innerHeight) * 0.7 < scorllTop){
      getList(this.props.keyword, this.props.offset)
      .then(({ data: { data, pagination } }) => {
       const { insertGitList } = this.props;
       insertGitList({
         newGitList: data,
         newTotalCount: pagination.total_count,
         newCount: pagination.count,
       });
     });
    };
  }


  creatList(gifList){
    return gifList.map((gif, idx)=>{
      return <List key={gif.id} gif={gif} idx={idx} />
    })
  }

  render() {
    const {gifList} = this.props;
    const List = this.creatList(gifList);

    return (
      <ul className ={style.listWrap}>
        {List}
      </ul>
    )
  }
};
