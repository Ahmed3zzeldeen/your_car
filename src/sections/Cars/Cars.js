import './Cars.css';

// import Slider from "react-slick";
import { SectionHeading } from "../../components/index";
import Data from "./../../Data/data.json";
import carImageExample from './../../assets/Cars/car-1.png';

const carsData = Data.cars;
console.log(carsData)

const Cars = () => {
  return (
    <section className="" id="Cars">
      <SectionHeading
        mainTitle="CARS"
        subTitle="Cars"
        subColor="primary"
        subPosition="center" />
      <div className="Cars-Slider">
        <div className="Cars-Cart">
          <img className="Car-Image" src={carImageExample} alt="carImage" />
          <h4 className="Car-Name">FIRST CLASS</h4>
          <p className="Car-Model">Mercedes maybach s600</p>
          <p className="Car-Description">
            The Porsche 911 is a true icon in the sports car world,
            known for its sleek design, impressive performance,
            and superior handling. It s a two-door, two-seat coupe
            that s perfect for those who love to feel the wind in
            their hair and the road beneath their wheels.
          </p>
          <div className="Car-Buying-Description-Box">
            <div className="Car-Features-Box">
              <span className="Car-Feature">
                <i className="Car-Feature-Icon">Icon</i>
                4 Seats
              </span>
              <span className="Car-Feature">
                <i className="Car-Feature-Icon">Icon</i>
                2 Luggage
              </span>
            </div>
            <div className="Buying-Counter">
              <button className="btn decrement-btn">-</button>
              <h3 className="Number-Of-Cars">7</h3>
              <button className="btn increment-btn">+</button>
            </div>
          </div>
        </div>
        <div className="Cars-Cart">
          <img className="Car-Image" src={carImageExample} alt="carImage" />
          <h4 className="Car-Name">FIRST CLASS</h4>
          <p className="Car-Model">Mercedes maybach s600</p>
          <p className="Car-Description">
            The Porsche 911 is a true icon in the sports car world,
            known for its sleek design, impressive performance,
            and superior handling. It s a two-door, two-seat coupe
            that s perfect for those who love to feel the wind in
            their hair and the road beneath their wheels.
          </p>
          <div className="Car-Buying-Description-Box">
            <div className="Car-Features-Box">
              <span className="Car-Feature">
                <i className="Car-Feature-Icon">Icon</i>
                4 Seats
              </span>
              <span className="Car-Feature">
                <i className="Car-Feature-Icon">Icon</i>
                2 Luggage
              </span>
            </div>
            <div className="Buying-Counter">
              <button className="btn decrement-btn">-</button>
              <h3 className="Number-Of-Cars">7</h3>
              <button className="btn increment-btn">+</button>
            </div>
          </div>
        </div>
        <div className="Cars-Cart">
          <img className="Car-Image" src={carImageExample} alt="carImage" />
          <h4 className="Car-Name">FIRST CLASS</h4>
          <p className="Car-Model">Mercedes maybach s600</p>
          <p className="Car-Description">
            The Porsche 911 is a true icon in the sports car world,
            known for its sleek design, impressive performance,
            and superior handling. It s a two-door, two-seat coupe
            that s perfect for those who love to feel the wind in
            their hair and the road beneath their wheels.
          </p>
          <div className="Car-Buying-Description-Box">
            <div className="Car-Features-Box">
              <span className="Car-Feature">
                <i className="Car-Feature-Icon">Icon</i>
                4 Seats
              </span>
              <span className="Car-Feature">
                <i className="Car-Feature-Icon">Icon</i>
                2 Luggage
              </span>
            </div>
            <div className="Buying-Counter">
              <button className="btn decrement-btn">-</button>
              <h3 className="Number-Of-Cars">7</h3>
              <button className="btn increment-btn">+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cars