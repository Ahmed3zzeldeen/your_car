import './ShoppingCard.css'

import { useState } from "react";

import { ShoppingListMenu } from './../index'

import { TiShoppingCart } from "react-icons/ti";
import { useShoppingCart } from "./../../contexts/ShoppingCartContext";

const ShoppingCard = () => {
  const { cartItems } = useShoppingCart();
  const [classValue, setClassValue] = useState("");

  let numberOfElements = cartItems.length;
  const hasElement = (numberOfElements > 0);

  function setOpenClass() {
    if (classValue.includes("open")) {
      setClassValue("");
    } else {
      setClassValue("open");
    }
  }

  return (
    <>
      <span className={`btn shopping-icon ${classValue} ${(hasElement) ? "hasElement" : ""}`}>
        <TiShoppingCart onClick={setOpenClass} />
        <span className="numberOfElements">{numberOfElements}</span>
      </span>
      <>
        {(hasElement) ? <ShoppingListMenu /> : <ShoppingListMenu msg="There is no Items In Cart yet" />}
      </>
    </>
  )
}

export default ShoppingCard;