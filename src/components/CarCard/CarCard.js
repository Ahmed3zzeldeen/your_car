import './CarCard.css';

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
        <div className="Buying-Counter">
          <button className="btn decrement-btn">-</button>
          <h5 className="Number-Of-Cars">0</h5>
          <button className="btn increment-btn">+</button>
        </div>
      </div>
    </div>
  )
}

export default CarCard;