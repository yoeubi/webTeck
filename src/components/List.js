import React, {Component} from "react";

import { observer, inject } from 'mobx-react';
import '../scss';

@inject('gifListStore')
@observer
export default class List extends Component{
  render() {
    return (
      <div className="test">test</div>
    )
  }
};

