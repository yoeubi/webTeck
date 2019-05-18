import { observable, action } from 'mobx';

export default class GifListStore {
  @observable gifList = [];
  @observable totalCount = 0;
  @observable count = 0;

  @action insertGitList = ({ newGitList, newTotalCount, newCount }) => {
    console.log(newGitList, newTotalCount, newCount);

    this.gifList = newGitList;
    this.totalCount = newTotalCount;
    this.count = newCount;
  };
}
