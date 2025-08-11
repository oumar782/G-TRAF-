import React from 'react';
import HeroPark from '../Parking/heropark'; // Majuscule cohérente
import Catalogue from '../Parking/Catalogue'; // Majuscule cohérente
import Feature from '../Parking/Feature'; // Majuscule cohérente
import Process from '../Parking/Process'; // Majuscule cohérente
import Testimonial from '../Parking/Testimoniale'; // Majuscule cohérente

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
