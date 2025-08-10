import React, { useState, useEffect, useRef } from 'react';
import '../Style/Hero.css';

// Import des images
import bg1 from '../assets/Image/P1035980.jpg';
import bg2 from '../assets/Image/P1035799.jpg';
import bg3 from '../assets/Image/P1035800.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const typingTimeoutRef = useRef(null);

  const backgroundImages = [bg1, bg2, bg3];

  // Textes pour l'effet machine à écrire
  const textsToType = [
    "Travaux de génie civil et rural",
    "Aménagement de pistes, routes et voiries",
    "Terrassement et assainissement",
    "Aménagement hydro-agricole",
    "Fourniture et location de matériel professionnel"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentText = textsToType[currentTextIndex];

  const stats = [
    { label: 'Projets réalisés', value: '500+' },
    { label: 'Années expérience', value: '25+' },
    { label: 'Satisfaction client', value: '99%' },
  ];

  // Effet machine à écrire optimisé
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const fullText = currentText;

      if (isDeleting) {
        setDisplayText(fullText.substring(0, currentIndex - 1));
        currentIndex--;
      } else {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      }

      let speed = isDeleting ? 50 : 100;
      if (!isDeleting && currentIndex === fullText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentTextIndex((prev) => (prev + 1) % textsToType.length);
      }

      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, 800);
    typingTimeoutRef.current = timeout;

    return () => clearTimeout(timeout);
  }, [currentText]);

  // Slideshow optimisé
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [backgroundImages.length]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="btp-hero" id="A-propos">
      {/* Background optimisé */}
      <div className="btp-hero__bg">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`btp-hero__slide ${index === currentSlide ? 'btp-hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="btp-hero__overlay" />
      </div>

      {/* Contenu principal */}
      <div className="btp-hero__main">
        <div className="btp-hero__container">
          <div className={`btp-hero__content ${isVisible ? 'btp-hero__content--visible' : ''}`}>
            <div className="btp-hero__tag">
              <span className="btp-hero__tag-icon">🔷</span>
              <span>G-TRAF+ | Expertise pluridisciplinaire</span>
            </div>

            <h1 className="btp-hero__heading">
              <span className="btp-hero__heading-line">Nous réalisons</span>
              <span className="btp-hero__typed">
                {displayText}
                <span className="btp-hero__caret">|</span>
              </span>
              <span className="btp-hero__heading-line btp-hero__highlight">avec excellence</span>
            </h1>

            <p className="btp-hero__subheading">
              G-TRAF+ est une entreprise dynamique spécialisée dans la{' '}
              <span className="btp-hero__highlighted">construction, l'aménagement d'infrastructures et la fourniture de matériel professionnel</span>.
              Nous accompagnons collectivités, entreprises et particuliers de la conception à la réalisation.
            </p>

            <div className="btp-hero__actions">
              <button
                className="btp-hero__btn btp-hero__btn--primary"
                onClick={() => scrollToSection('Notre-mission')}
              >
                Nous Découvrir
                <span className="btp-hero__icon btp-hero__icon--arrow"></span>
              </button>
            </div>

            <div className="btp-hero__metrics">
              {stats.map((stat, index) => (
                <div key={index} className="btp-hero__metric">
                  <div className="btp-hero__metric-value">{stat.value}</div>
                  <div className="btp-hero__metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cartes flottantes optimisées */}
          <div className={`btp-hero__cards ${isVisible ? 'btp-hero__cards--visible' : ''}`}>
            <div className="btp-hero__card btp-hero__card--mission">
              <div className="btp-hero__card-header">
                <span className="btp-hero__indicator"></span>
                <span>MISSION</span>
              </div>
              <p className="btp-hero__card-desc">
                Accompagner nos clients avec rigueur et professionnalisme, en garantissant des résultats durables et de haute qualité.
              </p>
            </div>

            <div className="btp-hero__card btp-hero__card--vision">
              <div className="btp-hero__card-title">VISION</div>
              <p className="btp-hero__card-desc">
                Construire une Guinée moderne et durable, grâce à des projets structurants et respectueux des normes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;