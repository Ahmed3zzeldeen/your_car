import './Sponsors.css';

import Sponsor_01 from './../../assets/sponsor/sponsor-01.png';
import Sponsor_02 from './../../assets/sponsor/sponsor-02.png';
import Sponsor_03 from './../../assets/sponsor/sponsor-03.png';
import Sponsor_04 from './../../assets/sponsor/sponsor-04.png';
import Sponsor_05 from './../../assets/sponsor/sponsor-05.png';
import Sponsor_06 from './../../assets/sponsor/sponsor-06.png';
import Sponsor_07 from './../../assets/sponsor/sponsor-07.png';

const Sponsors = () => {
  return (
    <section className="Sponsors container">
      <img className="sponsors-img" src={Sponsor_01} alt="sponsorImageIcon" />
      <img className="sponsors-img" src={Sponsor_02} alt="sponsorImageIcon" />
      <img className="sponsors-img" src={Sponsor_03} alt="sponsorImageIcon" />
      <img className="sponsors-img" src={Sponsor_04} alt="sponsorImageIcon" />
      <img className="sponsors-img" src={Sponsor_05} alt="sponsorImageIcon" />
      <img className="sponsors-img" src={Sponsor_06} alt="sponsorImageIcon" />
      <img className="sponsors-img" src={Sponsor_07} alt="sponsorImageIcon" />
    </section>
  )
}

export default Sponsors