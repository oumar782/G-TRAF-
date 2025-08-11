// Composant/pages/Accueil.jsx
import React from 'react';
import Hero from './Hero.jsx';
import Timeline from './Timeline.jsx';
import Histoire from './Histoire.jsx';
import Portfolio from './Portfolio.jsx';
import Expertise from './Expertise.jsx';
import Stat from './Stat.jsx';
import Certif from './Certificat.jsx';
import Contact from './Contact.jsx';


const Accueil = () => {
  return (
    <>
      <Hero />
      <Histoire />
      <Timeline />
      <Expertise />
      <Certif />
      <Stat />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Accueil;