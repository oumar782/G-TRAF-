import React, { useState, useEffect, useRef } from 'react';
import '../Style/Hero.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const typingTimeoutRef = useRef(null);

  // Chemins des images (vérifiez qu'elles existent dans public/assets/Image/)
  const backgroundImages = [
    '/assets/Image/P1035980.jpg',
    '/assets/Image/P1035981.jpg',
    '/assets/Image/P1035986.jpg'
  ];

  const stripImages = [
    '/assets/Image/P1035977.jpg',
    '/assets/Image/P1035978.jpg',
    '/assets/Image/P1035988.jpg'
  ];

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

  // Effet machine à écrire + effacement
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
        speed = 2000; // Pause avant effacement
        isDeleting = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentTextIndex((prev) => (prev + 1) % textsToType.length);
      }

      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, 500); // Démarrage après apparition
    typingTimeoutRef.current = timeout;

    return () => clearTimeout(timeout);
  }, [currentText]);

  // Animation d'apparition et parallaxe
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Changement de fond toutes les 6 secondes
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
    <section className="hero-section">
      {/* Arrière-plans animés */}
      <div className="hero-section__background">
        {backgroundImages.map((img, index) => (
          <div
            key={`bg-${index}`}
            className={`hero-section__slide ${
              index === currentSlide ? 'hero-section__slide--active' : ''
            }`}
            style={{
              backgroundImage: `url(${img})`,
              transform: `translate3d(${mousePosition.x * 15}px, ${mousePosition.y * 15}px, 0) scale(1.05)`,
            }}
          />
        ))}
        <div className="hero-section__overlay" />
      </div>

      {/* Éléments flottants décoratifs */}
      <div className="hero-section__floating-elements">
        <div
          className="hero-section__floating-circle hero-section__floating-circle--1"
          style={{
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 10}px, 0)`,
          }}
        />
        <div
          className="hero-section__floating-circle hero-section__floating-circle--2"
          style={{
            transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -20}px, 0)`,
            animationDelay: '2s',
          }}
        />
        <div
          className="hero-section__floating-circle hero-section__floating-circle--3"
          style={{
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * -10}px, 0)`,
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="hero-section__content">
        <div className={`hero-section__wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="hero-section__badge">
            <span className="hero-section__badge-icon">✨</span>
            <span>Leader Technologique BTP - Innovation Depuis 1999</span>
          </div>

          <h1 className="hero-section__title">
            <span className="hero-section__title-line">Créons ensemble</span>
            <span className="hero-section__typed-text">
              {displayText}
              <span className="hero-section__cursor" aria-hidden="true">
                |
              </span>
            </span>
            <span className="hero-section__title-line hero-section__highlight">aujourd'hui</span>
          </h1>

          <p className="hero-section__subtitle">
            Nous révolutionnons l'industrie du BTP avec des technologies d'avant-garde et une{' '}
            <strong className="hero-section__highlight-text">vision architecturale révolutionnaire</strong>{' '}
            pour créer les monuments de demain.
          </p>

          {/* Boutons CTA */}
          <div className="hero-section__ctas">
            <button className="hero-section__cta hero-section__cta--primary">
              <span className="icon sparkles"></span>
              Lancer le projet
              <span className="icon arrow"></span>
            </button>
            <a href="#more" className="hero-section__cta hero-section__cta--secondary">
              Voir plus
              <span className="icon chevron"></span>
            </a>
          </div>

          {/* Stats */}
          <div className="hero-section__stats">
            {stats.map((stat, index) => (
              <div key={`stat-${index}`} className="hero-section__stat">
                <div className="hero-section__stat-icon">
                  <span className={`icon stat-${index}`}></span>
                </div>
                <div className="hero-section__stat-value">
                  {stat.value}<span className="suffix">{stat.suffix}</span>
                </div>
                <div className="hero-section__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cartes flottantes (droite) */}
        <div className={`hero-section__cards ${isVisible ? 'visible' : ''}`}>
          <div
            className="hero-section__card hero-section__card--project"
            style={{
              transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -20}px, 0)`,
            }}
          >
            <div className="hero-section__card-header">
              <span className="hero-section__status-dot"></span>
              <span className="hero-section__status-text">PROJET EN COURS</span>
            </div>
            <p className="hero-section__card-text">Tour Futuriste 250m - La Défense</p>
            <div className="hero-section__progress-bar">
              <div className="hero-section__progress-fill"></div>
            </div>
          </div>

          <div
            className="hero-section__card hero-section__card--innovation"
            style={{
              transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 15}px, 0)`,
            }}
          >
            <div className="hero-section__card-title">INNOVATION</div>
            <p className="hero-section__card-tech">IA • Robotique • Éco-construction</p>
            <div className="hero-section__tech-dots">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
            </div>
          </div>

          <div
            className="hero-section__card hero-section__card--award"
            style={{
              transform: `translate3d(${mousePosition.x * -10}px, ${mousePosition.y * -30}px, 0)`,
            }}
          >
            <div className="hero-section__award-icon"></div>
            <div className="hero-section__award-text">
              <div className="award-title">PRIX ARCHITECTURE</div>
              <div className="award-year">Innovation 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bande d'images (strip) */}
      <div className="hero-section__image-strip">
        {stripImages.map((img, i) => (
          <div
            key={`strip-${i}`}
            className="hero-section__strip-item"
            style={{
              backgroundImage: `url(${img})`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Indicateur de scroll */}
      <a href="#next" className="hero-section__scroll-indicator">
        <span className="scroll-label">Explorer</span>
        <div className="scroll-circle">
          <div className="chevron"></div>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;