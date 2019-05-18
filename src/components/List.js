import React from 'react';
import style from './List.scss';


export default function List({gif, idx}){
  // console.log(props);
  return (
    <li className={style.listWrap}>
      <div className={style.test}> {gif} / {idx} </div>
    </li>
  )
};
