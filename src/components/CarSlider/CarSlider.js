import './CarSlider.css'

import Slider from "react-slick";

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import CarCard from "../CarCard/CarCard";

import Data from "./../../Data/data.json";
const carsData = Data.cars;

const CarSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <FaAngleRight />,
    prevArrow: <FaAngleLeft />
  }
  return (
    <>
      <Slider {...settings} className="Cars-Slider">

        {carsData.map((Car) => {
          return (<CarCard
            key={Car.id}
            carImage={Car.image}
            carName={Car.name}
            carClass={Car.class}
            carDes={Car.description}
            carSeats={Car.seats}
            carLuggage={Car.luggage}
            carId={Car.id}
          />);
        })}
      </Slider>
    </>
  );
}

export default CarSlider;