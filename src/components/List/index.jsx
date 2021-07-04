import React from 'react';

import './List.scss';

const List = ({items}) => {
  return (
    <ui className="list">
      {items.map(item => (
        <li className={item.active ? 'active' : ''}>
          <i>{item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}</i>
          <span>{item.name}</span>
        </li>
        ))}
    </ui>
  );
};

export default List;