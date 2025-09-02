import React from 'react';
import '../Style/Footer.css';
import Logo from '../assets/Image/gt.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Travaux de génie civil et rural',
    'Aménagement de pistes et voiries urbaines',
    'Terrassement et assainissement',
    'Aménagement hydro-agricole',
    'Fourniture de matériel professionnel',
    'Location de matériel BTP et transport minier',
    'Décoration d’intérieur et aménagement d’espaces'
  ];

  // 🔥 Corrigé → utiliser href (pas "to")
  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos réalisations', href: '/realisations' },
    { name: 'Nos Expertises', href: '/expertises' },
    { name: 'Nos Certifications', href: '/nos-certifications' },
    { name: 'Flottes & Location', href: '/flottes' },
    { name: 'Contact', href: '/contact' },
  ];

  // 🔥 Corrigé → mettre des liens valides
  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { name: 'Conditions générales', href: '/conditions-generales' },
    { name: 'Gestion des cookies', href: '/cookies' }
  ];

  // 🔥 Corrigé → mettre des vrais liens réseaux sociaux
  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/gtrafplus' },
    { name: 'LinkedIn', icon: 'LinkedIn', href: 'https://linkedin.com/company/gtrafplus' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/gtrafplus' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/gtrafplus' }
  ];

  // ===== Icônes =====
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
              <img src={Logo} alt="G-TRAF+ Logo" className="logo-img" />
              <div>
                <h3 className="footer-logo-title">G-TRAF+</h3>
                <p className="footer-logo-subtitle">Expertise & Solutions durables</p>
              </div>
            </div>

            <p className="footer-description">
              G-TRAF+ est une entreprise dynamique et pluridisciplinaire spécialisée dans les travaux de construction, 
              l’aménagement d’infrastructures et la fourniture de matériel professionnel. 
              Nous accompagnons collectivités, entreprises et particuliers de la conception à la réalisation, 
              dans le respect des normes, des délais et de l’environnement.
            </p>

            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPinIcon />
                <span>Conakry, Guinée</span>
              </div>
              <div className="footer-contact-item">
                <PhoneIcon />
                <span>+224 621015699</span>
              </div>
              <div className="footer-contact-item">
                <MailIcon />
                <span>Contact@gtrafplus.com</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Nos Domaines</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="/services" className="footer-link">{service}</a>
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
            <p className="footer-social-desc">Suivez nos projets et réalisations.</p>
            <div className="footer-social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="footer-social-link" aria-label={social.name} target="_blank" rel="noopener noreferrer">
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
              © {currentYear} G-TRAF+. Tous droits réservés. | 
              <span> Qualité & Sécurité garanties</span>
            </div>
            <div className="footer-legal-links">
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer-legal-link">{link.name}</a>
              ))}
            </div>
          </div>

          <div className="footer-additional-info">
            <div className="footer-info-item">
              <strong>Mission:</strong> Offrir des solutions durables et efficaces.
            </div>
            <div className="footer-info-item">
              <strong>Vision:</strong> Construire une Guinée moderne et durable.
            </div>
            <div className="footer-info-item">
              <strong>Valeurs:</strong> Fiabilité, Réactivité, Satisfaction client.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
