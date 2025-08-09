import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Construction sur mesure',
    'Rénovation haut de gamme',
    'Extensions architecturales',
    'Aménagements professionnels',
    'Expertise & conseil technique'
  ];

  const quickLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Nos réalisations', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'Conditions générales', href: '#' },
    { name: 'Gestion des cookies', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'LinkedIn', icon: 'LinkedIn', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' }
  ];

  // Nouveau logo SVG premium
  const LogoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" rx="12" fill="#1A1A1A"/>
      <path d="M12 46L32 14L52 46H42L32 30L22 46H12Z" fill="#FFD700"/>
      <path d="M24 46H40V50H24V46Z" fill="#FFD700"/>
    </svg>
  );

  // Icônes modernisées
  const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2C11.4 21.1 3 12.6 2.08 4.18A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.7c.17 1.25.5 2.5 1 3.7a2 2 0 0 1-.45 2.1l-1.3 1.3c1.5 2.5 3.7 4.7 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.45c1.2.5 2.45.83 3.7 1a2 2 0 0 1 1.7 2z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <polyline points="3,5 12,13 21,5"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22 3a4.48 4.48 0 0 1-7.86 3v1C7 7 3 4 3 4s-4 9 5 13a11.6 11.6 0 0 1-7 2c9 5 20 0 20-11.5 0-.3 0-.6-.08-.87A7.7 7.7 0 0 0 23 3z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <circle cx="17.5" cy="6.5" r="1"/>
    </svg>
  );

  const renderIcon = (iconName) => {
    const icons = {
      MapPin: MapPinIcon,
      Phone: PhoneIcon,
      Mail: MailIcon,
      Facebook: FacebookIcon,
      Twitter: TwitterIcon,
      LinkedIn: LinkedInIcon,
      Instagram: InstagramIcon
    };
    const Icon = icons[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <LogoIcon />
              <div>
                <h3 className="footer-logo-title">ConstructLux</h3>
                <p className="footer-logo-subtitle">Excellence & Innovation</p>
              </div>
            </div>

            <p className="footer-description">
              Depuis 1999, ConstructLux réalise des projets d’exception alliant savoir-faire artisanal,
              innovation technologique et respect des délais, pour une clientèle exigeante.
            </p>

            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPinIcon />
                <span>123 Avenue de la Grande Armée, 75017 Paris</span>
              </div>
              <div className="footer-contact-item">
                <PhoneIcon />
                <span>01 23 45 67 89</span>
              </div>
              <div className="footer-contact-item">
                <MailIcon />
                <span>contact@constructlux.fr</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Nos Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="footer-link">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Suivez-nous</h4>
            <p className="footer-social-desc">
              Découvrez nos dernières réalisations et inspirations.
            </p>
            <div className="footer-social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  {renderIcon(social.icon)}
                </a>
              ))}
            </div>

          
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © {currentYear} ConstructLux. Tous droits réservés. | 
              <span> Certifié RGE & Qualibat</span>
            </div>
            <div className="footer-legal-links">
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer-legal-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-additional-info">
            <div className="footer-info-item">
              <strong>SIRET:</strong> 123 456 789 00012
            </div>
            <div className="footer-info-item">
              <strong>Assurance décennale:</strong> AXA Pro BTP
            </div>
            <div className="footer-info-item">
              <strong>Garantie financière:</strong> BNP Paribas
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
