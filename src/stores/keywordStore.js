import { observable, action } from 'mobx';

export default class KeywordStore {
  @observable keyword = 'apple';

  @action insertKeyword = val => {
    this.keyword = val;
  };
  @action resetKeyword = () => {
    this.keyword = '';
  };
}
