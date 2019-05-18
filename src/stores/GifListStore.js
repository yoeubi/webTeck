import { observable, action } from 'mobx';

export default class GifListStore {
  @observable gifList = [];

  // @action insertKeyword = e => {
  //   this.keyword = e.target.value;
  // };
  // @action resetKeyworkd = () => {
  //   this.keyword = '';
  // };
}
