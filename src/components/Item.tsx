import React from 'react'
import { NavLink } from 'react-router-dom';

export type TItem = {
  id: number;
  name: string;
  price: number;
  content?: string;
}

export interface IItem {
  item: TItem;
}

export const Item: React.FC<IItem> = (props) => {
  return (
    <tr className='list__item'>
      <td className='list__item-name'>
        <NavLink to={`/${props.item.id}/details`}>{props.item.name}</NavLink>
      </td>
      <td className='list__item-price'>{props.item.price}</td>
    </tr>
  )
}
