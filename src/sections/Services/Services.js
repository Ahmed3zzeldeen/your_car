import './Services.css';

import { SectionHeading } from "../../components/index";

const Services = () => {
  return (
    <section className="container" id="Services">
      <SectionHeading
        mainTitle="SERVICES"
        subTitle="Services"
        subColor="secondary"
        subPosition="center" />
      <div className="services-boxes">
        <div className="service-box">
          <i className="service-icon">Icon</i>
          <h4 className="service-heading">Car sales</h4>
          <p className="service-description">
            At YourCar, we offer a wide
            selection of luxury vehicles for
            sale. Whether you're in the
            market for a sleek sports car or
            a spacious SUV, we have the
            perfect vehicle to fit your needs.
          </p>
        </div>
        <div className="service-box">
          <i className="service-icon">Icon</i>
          <h4 className="service-heading">Car rental</h4>
          <p className="service-description">
            If you're in need of a luxury car
            rental, look no further than
            YourCar. Our fleet of high-end
            vehicles is regularly maintained
            and serviced to ensure that you
            have a safe and comfortable
            driving experience
          </p>
        </div>
        <div className="service-box">
          <i className="service-icon">Icon</i>
          <h4 className="service-heading">Car selling</h4>
          <p className="service-description">
            At YourCar, we make it easy to
            sell your car. Simply bring your
            vehicle in for an appraisal, and
            we'll handle the rest. We offer
            fair prices and a hassle-free
            selling process, so you can get
            your vehicle with minimal effort
          </p>
        </div>
      </div>

    </section>
  )
}

export default Services;