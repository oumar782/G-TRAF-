import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/Image/gt.png';
import '../Style/Header.css';

export const GtrafHeader = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsHeaderScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerNavItems = [
    { name: 'Accueil', to: '/' },
    { name: 'Nos réalisations', to: '/realisations' },
    { name: 'Nos Expertises', to: '/expertises' },
    { name: 'Nos Certifications', to: 'Nos-certifications' },
    { name: 'Flottes & Location', to: '/flottes' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className={`gtraf-header ${isHeaderScrolled ? 'gtraf-header--scrolled' : ''}`}>
      <div className="gtraf-header__container">
        <div className="gtraf-header__content">
          {/* Logo Section */}
          <div className="gtraf-header__brand">
            <div className="gtraf-header__logo-wrapper">
              <img src={logo} alt="G-TRAF+ Logo" className="gtraf-header__logo-img" />
              <div className="gtraf-header__logo-glow"></div>
            </div>
            <div className="gtraf-header__brand-text">
              <h1 className="gtraf-header__brand-title">G-TRAF+</h1>
              <p className="gtraf-header__brand-subtitle">Guinéenne des travaux et fournitures</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="gtraf-header__desktop-nav">
            {headerNavItems.map((item, index) => (
              <Link
                key={`desktop-nav-${item.name}`}
                to={item.to}
                className="gtraf-header__nav-link"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="gtraf-header__nav-underline"></span>
                <span className="gtraf-header__nav-hover-bg"></span>
              </Link>
            ))}
          </nav>

          {/* Contact & CTA Section */}
          <div className="gtraf-header__actions">
            <div className="gtraf-header__contact-info">
              <a href="tel:+224621015699" className="gtraf-header__contact-link">
                <Phone size={18} />
                <span className="gtraf-header__contact-text">+224 621 01 56 99</span>
              </a>
              <a href="mailto:contacts@gtrafplus.com" className="gtraf-header__contact-link">
                <Mail size={18} />
                <span className="gtraf-header__contact-text">Email</span>
              </a>
            </div>
            <button className="gtraf-header__cta-btn">
              <svg className="gtraf-header__cta-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67C2.97 7.17 2.2 9.04 2 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M2 12c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4 12H2m5 6.37l-1.39 1.37C7.18 20.98 9.04 21.79 11 22v-2a8.002 8.002 0 0 1-4-1.63m4 1.63v2c1.95-.2 3.8-.97 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.42-3.89 1.64"/>
              </svg>
              <span className="gtraf-header__cta-text">Devis gratuit</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="gtraf-header__mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileNavOpen && (
          <nav className="gtraf-header__mobile-nav">
            {headerNavItems.map((item, index) => (
              <Link
                key={`mobile-nav-${item.name}`}
                to={item.to}
                className="gtraf-header__mobile-nav-link"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileNavOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="gtraf-header__mobile-contact">
              <a href="tel:+224621015699" className="gtraf-header__mobile-contact-link">
                <Phone size={20} /> +224 621 01 56 99
              </a>
              <a href="mailto:contact@gtrafplus.com" className="gtraf-header__mobile-contact-link">
                <Mail size={20} /> contact@gtrafplus.com
              </a>
              <button className="gtraf-header__mobile-cta">Devis Gratuit</button>
            </div>
          </nav>
        )}
      </div>
      <div className="gtraf-header__ambient-light"></div>
    </header>
  );
};

export default GtrafHeader;