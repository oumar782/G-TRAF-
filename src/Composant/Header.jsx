import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/Image/gt.png';
import '../Style/Header.css';

export const RevolutionaryHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '#A-propos' },
    { name: 'Nos réalisations', href: '#Nos-Réalisations' },
    { name: 'Nos Expertises', href: '#Nos-expertises' },
    { name: 'Notre parcours', href: '#Nos-parcours' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`revolutionary-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo avec image PNG */}
          <div className="logo-container">
            <div className="logo-icon-container">
              <img 
                src={logo} 
                alt="G-TRAF+ Logo" 
                className="logo-image"
              />
              <div className="logo-glow-effect"></div>
            </div>
            <div className="logo-text">
              <h1 className="logo-title">G-TRAF+</h1>
              <p className="logo-subtitle">Guinéenne des travaux et fournitures</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="nav-link-underline"></span>
                <span className="nav-link-hover-bg"></span>
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="contact-cta-container">
            <div className="contact-info">
              <a href="tel:+224621015699" className="contact-link">
                <Phone className="contact-icon" />
                <span className="contact-text">+224 621015699</span>
              </a>
              <a href="mailto:Contact@gtrafplus.com" className="contact-link">
                <Mail className="contact-icon" />
                <span className="contact-text">Email</span>
              </a>
            </div>
            <button className="cta-button">
              <svg className="cta-icon" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67C2.97 7.17 2.2 9.04 2 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M2 12c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4 12H2m5 6.37l-1.39 1.37C7.18 20.98 9.04 21.79 11 22v-2a8.002 8.002 0 0 1-4-1.63m4 1.63v2c1.95-.2 3.8-.97 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.42-3.89 1.64"/>
              </svg>
              <span className="cta-text">Devis gratuit</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
            aria-label="Menu mobile"
          >
            {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mobile-contact-container">
                <a href="tel:+224621015699" className="mobile-contact-link">
                  <Phone className="mobile-contact-icon" />
                  <span>+224 621015699</span>
                </a>
                <a href="mailto:contact@gtrafplus.com" className="mobile-contact-link">
                  <Mail className="mobile-contact-icon" />
                  <span>Contact</span>
                </a>
                <button className="mobile-cta-button">
                  <svg className="mobile-cta-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67C2.97 7.17 2.2 9.04 2 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M2 12c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4 12H2m5 6.37l-1.39 1.37C7.18 20.98 9.04 21.79 11 22v-2a8.002 8.002 0 0 1-4-1.63m4 1.63v2c1.95-.2 3.8-.97 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.42-3.89 1.64"/>
                  </svg>
                  Projet Premium
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Ambient Light Effect */}
      <div className="ambient-light"></div>
    </header>
  );
};

export default RevolutionaryHeader;