import './CarCard.css';

import { BuyingCounterBtn } from "./../index";
import { BsPeopleFill, BsFillBagFill } from 'react-icons/bs'
import { TiShoppingCart } from "react-icons/ti";

import { useShoppingCart } from "./../../contexts/ShoppingCartContext";

const CarCard = ({ carId, carImage, carName, carClass, carDes, carSeats, carLuggage }) => {
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <div className="Car-Card">
      <img className="Car-Image" src={carImage} alt="carImage" />
      <h5 className="Car-Name">{carName}</h5>
      <p className="Car-Class">{carClass}</p>
      <p className="Car-Description">{carDes}</p>
      <div className="Car-Buying-Description-Box">
        <div className="Car-Features-Box">
          <span className="Car-Feature">
            <BsPeopleFill className="Car-Feature-Icon" />
            <p className="Car-Feature-text">{carSeats} Seats</p>
          </span>
          <span className="Car-Feature">
            <BsFillBagFill className="Car-Feature-Icon" />
            <p className="Car-Feature-text">{carLuggage} Luggage</p>
          </span>
        </div>
        <BuyingCounterBtn itemId={carId} />
      </div>
      <button className="Add-To-Cart-Btn btn " onClick={() => increaseCartQuantity(carId)}>Add To Cart <TiShoppingCart /> </button>
    </div>
  )
}

export default CarCard;