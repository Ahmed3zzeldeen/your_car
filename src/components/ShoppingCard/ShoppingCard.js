import './ShoppingCard.css'

import { useState } from "react";

import { ShoppingListMenu } from './../index'

import { TiShoppingCart } from "react-icons/ti";

import * as ShoppingCardDataAll from "./../../Data/shoppingCardData";


const numberOfElements = ShoppingCardDataAll.ShoppingListData.length;
const hasElement = (numberOfElements > 0);

const ShoppingCard = () => {
  const [listMenuClasses, setListMenuClasses] = useState("");

  function handelActiveClass() {
    if (hasElement) {
      if (listMenuClasses.includes("open")) {
        setListMenuClasses("");
      } else {
        setListMenuClasses("open");
      }
    }
  }

  return (
    <>
      <span className={`btn shopping-icon ${listMenuClasses} ${(hasElement) ? "hasElement" : ""}`}>
        <TiShoppingCart onClick={handelActiveClass} />
        <span className="numberOfElements">{numberOfElements}</span>
      </span>
      <>
        {(hasElement) ? <ShoppingListMenu /> : ''}
      </>
    </>
  )
}

export default ShoppingCard;