import React, { useState, useEffect, useRef } from 'react';
import '../Style/Hero.css';

// Import des images
import bg1 from '../assets/Image/P1035980.jpg';
import bg2 from '../assets/Image/P1035799.jpg';
import bg3 from '../assets/Image/P1035800.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const typingTimeoutRef = useRef(null);

  // Tableaux d'images importées
  const backgroundImages = [bg1, bg2, bg3];

  const textsToType = [
    "l'architecture du futur",
    "des bâtiments intelligents",
    "votre vision créative"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentText = textsToType[currentTextIndex];

  const stats = [
    { label: 'Projets Premium', value: '500+', suffix: 'M€' },
    { label: 'Technologies', value: '25+', suffix: 'ans' },
    { label: 'Satisfaction', value: '99', suffix: '%' },
  ];

  // Machine à écrire
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

      let speed = 100;
      if (isDeleting) speed = 50;
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

  // Parallaxe + slideshow
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [backgroundImages.length]);

  return (
    <section className="btp-hero">
      {/* Arrière-plans */}
      <div className="btp-hero__bg">
        {backgroundImages.map((img, index) => (
          <div
            key={`bg-${index}`}
            className={`btp-hero__slide ${index === currentSlide ? 'btp-hero__slide--active' : ''}`}
            style={{
              backgroundImage: `url(${img})`,
              transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0) scale(1.05)`
            }}
            aria-label={`Background slide ${index + 1}`}
          />
        ))}
        <div className="btp-hero__overlay" />
      </div>

      {/* Éléments flottants */}
      <div className="btp-hero__floaters">
        <div
          className="btp-hero__floater btp-hero__floater--1"
          style={{ transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 10}px, 0)` }}
        />
        <div
          className="btp-hero__floater btp-hero__floater--2"
          style={{ transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -20}px, 0)` }}
        />
        <div
          className="btp-hero__floater btp-hero__floater--3"
          style={{ transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * -10}px, 0)` }}
        />
      </div>

      {/* Contenu principal */}
      <div className="btp-hero__main">
        <div className="btp-hero__container">
          <div className={`btp-hero__content ${isVisible ? 'btp-hero__content--visible' : ''}`}>
            <div className="btp-hero__tag">
              <span className="btp-hero__tag-icon">✨</span>
              <span>Leader Technologique BTP  Innovation Depuis 1999</span>
            </div>

            <h1 className="btp-hero__heading">
              <span className="btp-hero__heading-line">Créons ensemble</span>
              <span className="btp-hero__typed">
                {displayText}
                <span className="btp-hero__caret">|</span>
              </span>
              <span className="btp-hero__heading-line btp-hero__highlight">aujourd'hui</span>
            </h1>

            <p className="btp-hero__subheading">
              Nous révolutionnons l'industrie du BTP avec des technologies d'avant-garde et une{' '}
              <span className="btp-hero__highlighted">vision architecturale révolutionnaire</span>{' '}
              pour créer les monuments de demain.
            </p>

            <div className="btp-hero__actions">
              <button className="btp-hero__btn btp-hero__btn--primary">
                Lancer le projet
                <span className="btp-hero__icon btp-hero__icon--arrow"></span>
              </button>
            </div>

            <div className="btp-hero__metrics">
              {stats.map((stat, index) => (
                <div key={`stat-${index}`} className="btp-hero__metric">
                  <div className="btp-hero__metric-icon">
                    {index === 0 ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : index === 1 ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 10.92V19.92C16 20.47 15.55 20.92 15 20.92H13C12.45 20.92 12 20.47 12 19.92V10.92C12 10.37 12.45 9.92 13 9.92H15C15.55 9.92 16 10.37 16 10.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 4.92V19.92C10 20.47 9.55 20.92 9 20.92H7C6.45 20.92 6 20.47 6 19.92V4.92C6 4.37 6.45 3.92 7 3.92H9C9.55 3.92 10 4.37 10 4.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="btp-hero__metric-value">
                    {stat.value}<span>{stat.suffix}</span>
                  </div>
                  <div className="btp-hero__metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cartes flottantes */}
          <div className={`btp-hero__cards ${isVisible ? 'btp-hero__cards--visible' : ''}`}>
            <div
              className="btp-hero__card btp-hero__card--project"
              style={{ transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -20}px, 0)` }}
            >
              <div className="btp-hero__card-header">
                <span className="btp-hero__indicator"></span>
                <span>PROJET EN COURS</span>
              </div>
              <p className="btp-hero__card-desc">Tour Futuriste 250m - La Défense</p>
              <div className="btp-hero__progress-container">
                <div className="btp-hero__progress-bar"></div>
              </div>
            </div>

            <div
              className="btp-hero__card btp-hero__card--innovation"
              style={{ transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 15}px, 0)` }}
            >
              <div className="btp-hero__card-title">INNOVATION</div>
              <p className="btp-hero__card-desc">IA • Robotique • Éco-construction</p>
              <div className="btp-hero__tech-icons">
                <span className="btp-hero__tech-icon"></span>
                <span className="btp-hero__tech-icon"></span>
                <span className="btp-hero__tech-icon"></span>
              </div>
            </div>

            <div
              className="btp-hero__card btp-hero__card--award"
              style={{ transform: `translate3d(${mousePosition.x * -10}px, ${mousePosition.y * -30}px, 0)` }}
            >
              <div className="btp-hero__trophy">🏆</div>
              <div className="btp-hero__award-name">PRIX ARCHITECTURE</div>
              <div className="btp-hero__award-year">Innovation 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#next" className="btp-hero__scroll">
        <span>Explorer</span>
        <div className="btp-hero__scroll-circle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;