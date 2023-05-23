import './ShoppingCardItem.css';
import { BuyingCounterBtn } from './../index';

import * as ShoppingCardDataAll from "./../../Data/shoppingCardData";

import { FaTrash } from 'react-icons/fa';


const ShoppingCardItem = (props) => {
  /*
    props.itemHeading
    props.itemClass
    props.itemId
    props.itemImage
  */
  return (
    <div className="shopping-item-cont" >
      <div className="text-box">
        <h4 className="item-heading">{props.itemHeading}</h4>
        <p className="item-class">{props.itemClass}</p>
        <div className="CRT-Item">
          <BuyingCounterBtn itemId={props.itemId} />
          <FaTrash className="btn remove-item-btn" />
        </div>
      </div>
      <img className="image-box" src={props.itemImage} alt="carImage" />
    </div>
  )
}

export default ShoppingCardItem