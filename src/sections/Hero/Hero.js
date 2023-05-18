import './Hero.css';
import { HiArrowUpRight } from "react-icons/hi2";
import PrimaryBtn from './../../components/Buttons/Buttons';

const Hero = () => {
  return (
    <section className="Hero-section container">
      <div className="text-box">
        <h2>Find the perfect car for you at YourCar.</h2>
        <p>We offer a wide range of
          cars that cater to your
          needs and budget. Visit
          us today and drive away
          with your dream car!</p>
        <PrimaryBtn>
          Discover <HiArrowUpRight />
        </PrimaryBtn>
      </div>
    </section >
  );
}

export default Hero;