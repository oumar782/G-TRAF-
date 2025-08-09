import React from 'react';
import RevolutionaryHeader from './Composant/Header.jsx'; // Suppression des accolades
import Hero from './Composant/Hero.jsx'; // Suppression des accolades
import Timeline from './Composant/Timeline.jsx'; // Suppression des accolades
import Histoire from './Composant/Histoire.jsx'; // Suppression des accolades
import Portfolio from './Composant/Portfolio.jsx'; // Suppression des accolades
import Expertise from './Composant/Expertise.jsx'; // Suppression des accolades
import Stat from './Composant/Stat.jsx'; // Suppression des accolades
import Certif from './Composant/Certificat.jsx'; // Suppression des accolades
import Contact from './Composant/Contact.jsx'; // Suppression des accolades

function App() {
  return (
    <>
      <RevolutionaryHeader/>
      <Hero/>
      <Histoire/>
      <Timeline/>
      <Expertise/>
      <Certif/>
      <Stat/>
      <Portfolio/>
      <Contact/>
    </>
  );
}

export default App;