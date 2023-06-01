import './ShoppingCardItem.css';
import { BuyingCounterBtn } from './../index';
import { FaTrash } from 'react-icons/fa';

import { useShoppingCart } from "./../../contexts/ShoppingCartContext";


const ShoppingCardItem = ({ itemId, itemHeading, itemClass, itemImage }) => {
  const { removeItemFromCart } = useShoppingCart();

  return (
    <div className="shopping-item-cont" >
      <div className="text-box">
        <h4 className="item-heading">{itemHeading}</h4>
        <p className="item-class">{itemClass}</p>
        <div className="CRT-Item">
          <BuyingCounterBtn itemId={itemId} />
          <FaTrash className="btn remove-item-btn" onClick={() => removeItemFromCart(itemId)} />
        </div>
      </div>
      <img className="image-box" src={itemImage} alt="carImage" />
    </div>
  )
}

export default ShoppingCardItem