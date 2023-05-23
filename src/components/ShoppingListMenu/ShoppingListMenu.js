import './ShoppingListMenu.css';

import { FaTrash } from 'react-icons/fa';

import { ShoppingCardItem } from './../index';

import * as ShoppingCardDataAll from "./../../Data/shoppingCardData";

const ShoppingListMenu = () => {
  return (
    <div className="shopping-list-menu">
      <div className="list-of-shopping-items">
        {ShoppingCardDataAll.ShoppingListData.map((item) => {
          return (<ShoppingCardItem
            key={item.id}
            itemHeading={item.name}
            itemClass={item.class}
            itemId={item.id}
            itemImage={item.image}
          />);
        })
        }
      </div>
      <button className="btn delete-all-btn" >Delete All <FaTrash /></button>
    </div >
  )
}

export default ShoppingListMenu