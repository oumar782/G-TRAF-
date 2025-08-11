// Composant/pages/Accueil.jsx
import React from 'react';
import Hero from '../Composant/Hero.jsx';
import Timeline from '../Composant/Timeline.jsx';
import Histoire from '../Composant/Histoire.jsx';
import Portfolio from '../Composant/Portfolio.jsx';
import Expertise from '../Composant/Expertise.jsx';
import Stat from '../Composant/Stat.jsx';
import Certif from '../Composant/Certificat.jsx';
import Contact from '../Composant/Contact.jsx';


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