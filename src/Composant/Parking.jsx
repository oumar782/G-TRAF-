import React from 'react';
import HeroPark from '../Parking/heropark';
import Catalogue from '../Parking/Catalogue';
import Feature from '../Parking/Feature';
import Process from '../Parking/Process';
import Testimonial from '../Parking/Testimoniale';

const Parking = () => {
  return (
    <div id="Nos-flottes">
      <HeroPark />
      <Catalogue />
      <Feature />
      <Process />
      <Testimonial />
    </div>
  );
};

export default Parking;
