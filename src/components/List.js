import React from 'react';
import style from './List.scss'
export default function List({ gif, idx }) {
  return (
    <li className={style.list}>
      <img src={gif.images['480w_still'].url} />
    </li>
  );
}
