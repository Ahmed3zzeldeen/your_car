import './ShoppingListMenu.css';

import { FaTrash } from 'react-icons/fa';

import { ShoppingCardItem } from './../index';

import { useShoppingCart } from "./../../contexts/ShoppingCartContext";

import Data from './../../Data/data.json';
const allCarsInData = Data.cars;

const ShoppingListMenu = ({ msg }) => {
  const { cartItems, removeAllItemsFromCart } = useShoppingCart();
  return (
    <div className="shopping-list-menu">
      {(msg) ? <div>{msg}</div> :
        <>
          <div className="list-of-shopping-items">
            {cartItems.map((item) => {
              const itemFromData = allCarsInData.find(x => x.id === item.id);
              return (<ShoppingCardItem
                key={item.id}
                itemHeading={itemFromData.name}
                itemClass={itemFromData.class}
                itemId={itemFromData.id}
                itemImage={itemFromData.image}
              />);
            })
            }
          </div>
          <button className="btn delete-all-btn" onClick={() => { removeAllItemsFromCart() }} >Delete All <FaTrash /></button>
        </>
      }
    </div >
  )
}

export default ShoppingListMenu