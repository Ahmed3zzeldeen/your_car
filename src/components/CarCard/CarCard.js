import './CarCard.css';

import { BuyingCounterBtn } from "./../index";
import { BsPeopleFill, BsFillBagFill } from 'react-icons/bs'

const CarCard = (props) => {
  return (
    /*
      carImage,    = have car scr 
      carName,     = have car name         : string
      carClass,    = have car Model        : string
      carDes,      = have car Description  : string
      carSeats,    = have car seats
      carLuggage,  = have car luggage
      carId        = has car id 
    */
    <div className="Car-Card">
      <img className="Car-Image" src={props.carImage} alt="carImage" />
      <h5 className="Car-Name">{props.carName}</h5>
      <p className="Car-Class">{props.carClass}</p>
      <p className="Car-Description">{props.carDes}</p>
      <div className="Car-Buying-Description-Box">
        <div className="Car-Features-Box">
          <span className="Car-Feature">
            <BsPeopleFill className="Car-Feature-Icon" />
            <p className="Car-Feature-text">{props.carSeats} Seats</p>
          </span>
          <span className="Car-Feature">
            <BsFillBagFill className="Car-Feature-Icon" />
            <p className="Car-Feature-text">{props.carLuggage} Luggage</p>
          </span>
        </div>
        <BuyingCounterBtn itemId={props.carId} />
      </div>
    </div>
  )
}

export default CarCard;