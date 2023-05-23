import './Cars.css';

import { SectionHeading } from "../../components/index";
import { CarSlider } from './../../components/index'



const Cars = () => {
  return (
    <section id="Cars">
      <SectionHeading
        mainTitle="CARS"
        subTitle="Cars"
        subColor="primary"
        subPosition="center" />
      <CarSlider />
    </section>
  )
}

export default Cars