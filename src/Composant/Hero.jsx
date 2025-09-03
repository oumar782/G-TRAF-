import React, { useState, useEffect, useRef } from 'react';
import '../Style/Hero.css';

// Import des images
import bg1 from '../assets/Image/equipe.webp';
import bg2 from '../assets/Image/P1035799.webp';
import bg3 from '../assets/Image/projet.webp';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const typingTimeoutRef = useRef(null);
  const heroRef = useRef(null);

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
    { label: 'Projets réalisés', value: '5+' },
    { label: 'Années expérience', value: '10+' },
    { label: 'Satisfaction client', value: '99%' },
  ];

  // Détection de la taille d'écran
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Effet machine à écrire optimisé avec adaptation responsive
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

      // Vitesse adaptée selon la taille d'écran
      let speed = isDeleting ? (isMobile ? 30 : 50) : (isMobile ? 80 : 100);
      
      if (!isDeleting && currentIndex === fullText.length) {
        speed = isMobile ? 1500 : 2000;
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
  }, [currentText, isMobile]);

  // Slideshow et intersection observer avec adaptation responsive
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: isMobile ? 0.05 : 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    // Interval adapté selon le device
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, isMobile ? 8000 : 6000);

    return () => {
      observer.disconnect();
      clearInterval(slideInterval);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [backgroundImages.length, isMobile]);

  // Navigation vers les sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = isMobile ? -80 : -100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Navigation vers d'autres pages (à adapter selon votre router)
  const navigateTo = (path) => {
    // Pour React Router
    // navigate(path);
    
    // Pour navigation simple
    window.location.href = path;
  };

  // Gestion des événements tactiles pour mobile
  const handleTouchStart = (e) => {
    if (isMobile) {
      e.currentTarget.style.transform = 'scale(0.98)';
    }
  };

  const handleTouchEnd = (e) => {
    if (isMobile) {
      setTimeout(() => {
        e.currentTarget.style.transform = '';
      }, 150);
    }
  };

  return (
    <section className="btp-hero" id="A-propos" ref={heroRef}>
      {/* Background optimisé avec parallax */}
      <div className="btp-hero__bg">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`btp-hero__slide ${index === currentSlide ? 'btp-hero__slide--active' : ''}`}
            style={{ 
              backgroundImage: `url(${img})`,
              // Optimisation des images selon la taille d'écran
              backgroundSize: isMobile ? 'cover' : 'cover',
              backgroundPosition: isMobile ? 'center center' : 'center'
            }}
            aria-hidden={index !== currentSlide}
          />
        ))}
        <div className="btp-hero__overlay" />
      </div>

      {/* Contenu principal */}
      <div className="btp-hero__main">
        <div className="btp-hero__container">
          <div className={`btp-hero__content ${isVisible ? 'btp-hero__content--visible' : ''}`}>
            <div 
              className="btp-hero__tag"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <span className="btp-hero__tag-icon">🔷</span>
              <span>G-TraF+ | Expertise pluridisciplinaire</span>
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
              <span className="btp-hero__highlighted">G-TRAF+ (Guinéenne Des Travaux et Fournitures)</span> est une entreprise dynamique spécialisée dans la{' '}
              <span className="btp-hero__highlighted">construction, l'aménagement d'infrastructures et la fourniture de matériel professionnel</span>.
              Nous accompagnons collectivités, entreprises et particuliers de la conception à la réalisation.
            </p>

            <div className="btp-hero__actions">
              <button
                className="btp-hero__btn btp-hero__btn--primary"
                onClick={() => scrollToSection('Notre-mission')}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                aria-label="Découvrir nos services"
              >
                Nous Découvrir
                <span className="btp-hero__icon btp-hero__icon--arrow"></span>
              </button>
            </div>

            {/* Métriques avec gestion responsive améliorée */}
            <div className="btp-hero__metrics">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="btp-hero__metric"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="btp-hero__metric-value">{stat.value}</div>
                  <div className="btp-hero__metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cartes flottantes avec navigation */}
          <div className={`btp-hero__cards ${isVisible ? 'btp-hero__cards--visible' : ''}`}>
            <div 
              className="btp-hero__card btp-hero__card--mission"
              onClick={() => scrollToSection('Notre-mission')}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection('Notre-mission');
                }
              }}
            >
              <div className="btp-hero__card-header">
                <span className="btp-hero__indicator"></span>
                <span>MISSION</span>
              </div>
              <p className="btp-hero__card-desc">
                Accompagner nos clients avec rigueur et professionnalisme, en garantissant des résultats durables et de haute qualité.
              </p>
            </div>

            <div 
              className="btp-hero__card btp-hero__card--vision"
              onClick={() => scrollToSection('Vision')}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection('Vision');
                }
              }}
            >
              <div className="btp-hero__card-header">
                <span className="btp-hero__indicator"></span>
                <span>VISION</span>
              </div>
              <p className="btp-hero__card-desc">
                Construire une Guinée moderne et durable, grâce à des projets structurants et respectueux des normes.
              </p>
            </div>
          </div>

          {/* Navigation rapide (optionnelle) */}
          <div className="btp-hero__quick-nav" style={{ display: 'none' }}>
            <button 
              onClick={() => scrollToSection('services')}
              className="btp-hero__nav-btn"
              aria-label="Aller aux services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projets')}
              className="btp-hero__nav-btn"
              aria-label="Voir nos projets"
            >
              Projets
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btp-hero__nav-btn"
              aria-label="Nous contacter"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Indicateurs de slides pour mobile */}
      {isMobile && (
        <div className="btp-hero__slide-indicators">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`btp-hero__slide-indicator ${index === currentSlide ? 'btp-hero__slide-indicator--active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Bouton scroll vers le bas pour mobile */}
      {isMobile && (
        <button
          className="btp-hero__scroll-down"
          onClick={() => scrollToSection('Notre-mission')}
          aria-label="Défiler vers le bas"
        >
          <span className="btp-hero__scroll-arrow">↓</span>
        </button>
      )}
    </section>
  );
};

export default HeroSection;