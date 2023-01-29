import React from 'react';


function ListItem(props: any) {
  return (
    <li className="list__item" >
      <input type="checkbox" className='list__check' />
      <input
        type="text"
        className='list__text'
        value={'Какой-то текст'}
      />
    </li>
  )
};

export default ListItem;