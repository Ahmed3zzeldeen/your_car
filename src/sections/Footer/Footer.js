import './Footer.css';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="Footer container">
      <div className="first-cont">
        <div className="logo-cont">
          <h4 className="footer-heading"><span>Your</span>Car</h4>
          <p>
            We are known for luxurious and
            premium chaffeur services <br />
            worldwide. We are simply the
            best<br />
            you can find.
          </p>
          <p>
            we are dedicated to providing
            our customers with a first-class
            car buying, selling, and renting
            experience.
          </p>
        </div>
        <div className="news-letter-cont">
          <h4 className="footer-heading">News Letter</h4>
          <p>
            Subscribe to our news letter for
            updates, news and exclusive offers
          </p>
          <form className="input-group">
            <input className="email-input" type="email" tabIndex={3} placeholder="Email" />
            <input className="btn secondary-btn" type="submit" value={"Subscribe"} tabIndex={4} />
          </form>
        </div>
        <div className="contact-cont">
          <h4 className="footer-heading">Contact</h4>
          <ul className="list-of-contact">
            <li>
              <a href="https://www.google.com/maps/place/Centro+Comercial+San+Francisco/" target="_blank" rel="noreferrer">
                <IoLocationSharp />
                2038 2nd Avenue,<br />
                Las Vegas, United States
              </a>
            </li>
            <li>
              <a href="phone:01444773421423" target="_blank" rel="noreferrer" >
                <FaPhoneAlt />
                01444773421423<br />
                01477678449405
              </a>
            </li>
            <li>
              <a href="email:support@appie.com" target="_blank" rel="noreferrer">
                <IoMdMail />
                info@YourCar.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/Ahmed3zzeldeen"> <FaFacebook /> </a>
        <a href="https://www.twitter.com/Ahmed3zzeldeen"> <FaTwitter /> </a>
        <a href="./#"> <FaInstagram /> </a>
      </div>
      <hr />
      <p className="copy-right">
        © Copyright 2023 · <strong>YourCar</strong> All rights reserved
      </p>

    </section>
  );
}

export default Footer;