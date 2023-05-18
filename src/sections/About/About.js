import './About.css';
import BG_CarImage from './../../assets/About-BG.png';
import CarImage from './../../assets/About-Car.png';

import { SectionHeading } from "../../components/index";

const About = () => {
  return (
    <section className="container" id="About">
      <div className="text-box">
        <SectionHeading mainTitle="ABOUT US" subTitle="About" subColor="primary" subPosition="start" />
        <p>
          YourCar is a luxury car dealership that offers a personalized and
          first-class experience to its clients. Our team of experienced
          professionals is dedicated to providing exceptional service and
          finding the perfect vehicle to match our clients unique
          preferences and requirements. We have an extensive selection
          of high-end vehicles, ranging from sports cars to SUVs, all of
          which are maintained to the highest standards of quality and
          safety.
        </p>
        <p>
          At YourCar, we are committed to creating a stress-free and
          enjoyable car buying experience. We understand that
          purchasing a luxury car can be a significant investment, which is
          why we offer flexible financing options to make the process
          more manageable. Our team is available to answer any
          questions and provide guidance throughout the entire buying
          process. We take pride in our outstanding customer service and
          attention to detail, and we are confident that our clients will be
          satisfied with their experience at YourCar.
        </p>
      </div>
      <div className="img-box">
        <img className="Car-Image" src={CarImage} alt="car_Image" />
        <img className="BG-Image" src={BG_CarImage} alt="BG_Image" />
      </div>
    </section>
  )
}

export default About