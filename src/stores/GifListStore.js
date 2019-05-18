import { observable, action } from 'mobx';

export default class GifListStore {
  @observable gifList = [];
  @observable totalCount = 0;
  @observable count = 0;
  @observable offset = 0;

  @action insertGitList = ({ newGitList, newTotalCount, newCount }) => {
    console.log(newGitList, newTotalCount, newCount);

    this.gifList = this.gifList.concat(newGitList);
    this.totalCount = newTotalCount;
    this.count = newCount;
    this.offset = this.offset+10;

  };
  @action resetGitList = () => {
    this.gifList = [];
  }
}
