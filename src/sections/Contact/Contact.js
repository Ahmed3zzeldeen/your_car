import './Contact.css'
import { PrimaryBtn } from './../../components/index';

import carImage_01 from './../../assets/contact-cars/Car-01.png';
import carImage_02 from './../../assets/contact-cars/Car-02.png';
import carImage_03 from './../../assets/contact-cars/Car-03.png';
import carImage_04 from './../../assets/contact-cars/Car-04.png';
import carImage_05 from './../../assets/contact-cars/Car-05.png';
import carImage_06 from './../../assets/contact-cars/Car-06.png';
import carImage_07 from './../../assets/contact-cars/Car-07.png';
import carImage_08 from './../../assets/contact-cars/Car-08.png';
import carImage_09 from './../../assets/contact-cars/Car-09.png';



const Contact = () => {
  return (
    <section className="" id="Contact-us">
      <div className="CRT-Car-card">
        <img src={carImage_01} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>
      <div className="CRT-Car-card active">
        <img src={carImage_02} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>
      <div className="CRT-Car-card ">
        <img src={carImage_03} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>

      <div className="CRT-Car-card">
        <img src={carImage_04} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>
      <div className="CRT-Car-card active">
        <img src={carImage_05} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>
      <div className="CRT-Car-card">
        <img src={carImage_06} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>

      <div className="CRT-Car-card">
        <img src={carImage_07} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>
      <div className="CRT-Car-card active">
        <img src={carImage_08} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>
      <div className="CRT-Car-card">
        <img src={carImage_09} alt="carImage" />
        <div className="text-box">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <PrimaryBtn link="#" >Contact</PrimaryBtn>
        </div>
      </div>
    </section>
  )
}

export default Contact;