// App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout
import MainLayout from './Page/Mainlayout.jsx';

// Pages
import Accueil from './Page/Accueil.jsx';

// Composants
import APropos from './Composant/Hero.jsx';
import Realisations from './Composant/Portfolio.jsx';
import Expertises from './Composant/Expertise.jsx';
import Parcours from './Composant/Timeline.jsx';
import Flottes from './Composant/Parking.jsx';
import ContactPage from './Composant/Contact.jsx';

// Google Analytics
const GA_TRACKING_ID = 'G-QWVBXGWGD2';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <TrackPageView />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Accueil />} />
          <Route path="a-propos" element={<APropos />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="expertises" element={<Expertises />} />
          <Route path="parcours" element={<Parcours />} />
          <Route path="flottes" element={<Flottes />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
