import './BuyingCounterBtn.css';
import { useShoppingCart } from "./../../contexts/ShoppingCartContext";
const BuyingCounterBtn = ({ itemId }) => {
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  return (
    <div className="Buying-Counter">
      <button className="btn decrement-btn" onClick={() => decreaseCartQuantity(itemId)}>-</button>
      <h5 className="Number-Of-Cars">{getItemsQuantity(itemId)}</h5>
      <button className="btn increment-btn" onClick={() => increaseCartQuantity(itemId)}>+</button>
    </div>
  );
}

export default BuyingCounterBtn;