import React from 'react'
import { TItem, Item } from './Item';

export interface IItems {
  items: Array<TItem>;
}

export const Items: React.FC<IItems> = (props) => {
  return (
    <table className='list__items'>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => <Item key={item.id} item={item} />)}
      </tbody>
    </table>
  )
}
