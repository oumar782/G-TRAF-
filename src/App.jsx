import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RevolutionaryHeader from './Composant/Header.jsx';
import Hero from './Composant/Hero.jsx';
import Timeline from './Composant/Timeline.jsx';
import Histoire from './Composant/Histoire.jsx';
import Portfolio from './Composant/Portfolio.jsx';
import Expertise from './Composant/Expertise.jsx';
import Stat from './Composant/Stat.jsx';
import Certif from './Composant/Certificat.jsx';
import Contact from './Composant/Contact.jsx';
import Footer from './Composant/Footer.jsx';

const GA_TRACKING_ID = "G-ELTZL6VJ5L";

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <RevolutionaryHeader />

      <Routes>
        <Route path="/" element={
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
        } />
        
        <Route path="/A-propos" element={<Hero />} />
        <Route path="/Notre-Mission" element={<Histoire />} />
        <Route path="/Nos-Réalisations" element={<Portfolio />} />
        <Route path="/Nos-expertises" element={<Expertise />} />
        <Route path="/Nos-parcourt" element={<Timeline />} />
        <Route path="/ Nous-contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
