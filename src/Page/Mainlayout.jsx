// Composant/MainLayout.jsx
import React from 'react';
import RevolutionaryHeader from '../Composant/Header.jsx';
import Footer from '../Composant/Footer.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <RevolutionaryHeader />
      <main>
        <Outlet /> {/* C'est ici que les pages s'affichent */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;