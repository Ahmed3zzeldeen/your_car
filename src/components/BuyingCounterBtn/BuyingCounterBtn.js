import './BuyingCounterBtn.css';
import * as ShoppingCardDataAll from "./../../Data/shoppingCardData";

import { useState } from "react";;

const BuyingCounterBtn = (props) => {

  // props.itemId = has id of item to catch data in to it;

  // Get InitialValueOfNumberOfCars
  let TempD = -1;
  ShoppingCardDataAll.ShoppingListData.forEach(element => {
    if (element.id === props.itemId) {
      TempD = element;
    }
  });
  let InitNumberOfCars = (TempD !== -1) ? TempD.numberOfCars : 0;

  const [counter, setCounter] = useState(InitNumberOfCars); // TODO: Change init value if has itemId

  function countUp() {
    setCounter(counter + 1);
    ShoppingCardDataAll.updateNumberOfCarsToShoppingList(counter, props.itemId);
  }

  function countDown() {
    if (counter > 0) {
      setCounter(counter - 1);
      ShoppingCardDataAll.updateNumberOfCarsToShoppingList(counter, props.itemId);
    }
  }

  return (
    <div className="Buying-Counter">
      <button className="btn decrement-btn" onClick={countDown}>-</button>
      <h5 className="Number-Of-Cars">{counter}</h5>
      <button className="btn increment-btn" onClick={countUp}>+</button>
    </div>
  );
}

export default BuyingCounterBtn;