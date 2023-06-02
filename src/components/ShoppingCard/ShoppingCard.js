import './ShoppingCard.css'

import { useState } from "react";

import { ShoppingListMenu } from './../index'


import { BsCart4 } from 'react-icons/bs';

import { useShoppingCart } from "./../../contexts/ShoppingCartContext";

const ShoppingCard = () => {
  const { cartItems } = useShoppingCart();
  const [cartClasses, setCartClasses] = useState("");

  let numberOfElements = cartItems.length;
  const hasElement = (numberOfElements > 0);

  function setOpenClass() {
    if (cartClasses.includes("open")) {
      setCartClasses("");
    } else {
      setCartClasses("open");
    }
  }

  document.onkeyup = function (e) {
    if (e.key === "Escape") {
      if (cartClasses.includes("open")) {
        setOpenClass()
      }
    }
  };

  return (
    <>
      <span className={`btn shopping-icon ${cartClasses} ${(hasElement) ? "hasElement" : ""}`} onClick={setOpenClass}>
        <BsCart4 className="shop_icon" />
        <span className="numberOfElements" >{numberOfElements}</span>
      </span>
      <>
        {(hasElement) ? <ShoppingListMenu /> : <ShoppingListMenu msg="There is no Items In Cart yet" />}
      </>
    </>
  )
}

export default ShoppingCard;