import { observable, action } from 'mobx';

export default class KeywordStore {
  @observable keyword = '';

  @action insertKeyword = e => {
    this.keyword = e.target.value;
  };
  @action resetKeyworkd = () => {
    this.keyword = '';
  };
}
