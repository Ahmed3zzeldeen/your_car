import './Testimonials.css';
import { SectionHeading } from "../../components/index";
import starIcon from './../../assets/icons/Star-Icon.png'
const Testimonials = () => {
  return (
    <section className="Testimonials container" >
      <SectionHeading
        mainTitle="TESTIMONIALS"
        mainTitleOpacity="0.1"
        subTitle="Testimonials"
        subColor="white"
        subPosition="center" />
      <div className="Testimonials-Slider">
        <div className="Testimonials-Card">
          <p className="Testimonials-Description">
            I recently bought a car through YourCar and I was blown
            away by their exceptional service. The staff were friendly
            and knowledgeable, and they helped me find the perfect car
            for my needs. I highly recommend YourCar to anyone looking
            for a luxury car buying experience.
          </p>
          <div className="Rating-Cont">
            <img src={starIcon} alt="star-Icon" />
            <img src={starIcon} alt="star-Icon" />
            <img src={starIcon} alt="star-Icon" />
            <img src={starIcon} alt="star-Icon" />
            <img src={starIcon} alt="star-Icon" />
          </div>
          <div className="Testimonials-Info">
            <h4 className="Testimonials-Name">Annie Rudy</h4>
            <p className="Testimonials-City">Las vegas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials