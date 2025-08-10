import React, { useState, useRef, useEffect } from 'react';
import '../Style/Portfolio.css';

import project1 from '../assets/Image/P1035850.webp';
import project2 from '../assets/Image/P1035851.webp';
import project3 from '../assets/Image/P1035852.webp';

const Project360Gallery = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Neo-Skyscraper Complex',
      category: 'Architecture Futuriste',
      location: 'La Défense, Paris',
      budget: '180M€',
      year: '2024',
      image: project1,
      description: 'Tour révolutionnaire de 300m intégrant IA, énergie solaire avancée et espaces modulables intelligents.',
      technologies: ['IA Structurelle', 'Panneaux Solaires 4.0', 'Verre Intelligent', 'Système IoT'],
      stats: {
        surface: '45,000m²',
        duration: '36 mois',
        team: '200 experts'
      },
      gallery: [project1, project2, project3]
    },
    {
      id: 2,
      title: 'Smart Living Penthouse',
      category: 'Résidentiel Ultra-Premium',
      location: 'Neuilly-sur-Seine',
      budget: '12M€',
      year: '2023',
      image: project2,
      description: 'Penthouse de 800m² avec domotique révolutionnaire, murs végétalisés et technologies immersives.',
      technologies: ['Domotique IA', 'Réalité Augmentée', 'Éco-matériaux', 'Serre Hydroponique'],
      stats: {
        surface: '800m²',
        duration: '18 mois',
        team: '50 specialists'
      },
      gallery: [project2, project1, project3]
    },
    {
      id: 3,
      title: 'Quantum Bridge Infrastructure',
      category: 'Infrastructure Révolutionnaire',
      location: 'Lyon Confluence',
      budget: '95M€',
      year: '2023',
      image: project3,
      description: 'Pont intelligent avec capteurs quantiques, éclairage adaptatif et structure auto-réparante.',
      technologies: ['Matériaux Quantiques', 'Éclairage Adaptatif', 'Auto-Diagnostic', 'Énergie Cinétique'],
      stats: {
        surface: '2,500m',
        duration: '24 mois',
        team: '120 ingénieurs'
      },
      gallery: [project3, project1, project2]
    }
  ];

  const currentProject = projects[activeProject];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, projects.length]);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={sectionRef} className="project360-section" id='Nos-Réalisations'>
      <div className="project360-container">
        {/* Header */}
        <div className={`project360-header ${isVisible ? 'visible' : ''}`}>
          <div className="project360-badge">🌟 PROJETS RÉVOLUTIONNAIRES 360°</div>
          <h2 className="project360-title">
            Portfolio<span> Immersif</span>
          </h2>
          <p className="project360-subtitle">
            Explorez nos réalisations révolutionnaires avec une expérience immersive à 360°. 
            Chaque projet redéfinit les standards de l'architecture moderne.
          </p>
        </div>

        {/* Main Content */}
        <div className="project360-main-content">
          <div className="project360-showcase">
            <div
              className="project360-image-container"
              style={{
                transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 3}deg)`,
              }}
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="project360-main-image"
              />
              <div className="project360-overlay"></div>
              <div className="project360-budget-badge">
                <div className="project360-budget">{currentProject.budget}</div>
                <div className="project360-year">{currentProject.year}</div>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="project360-play-button"
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
            </div>

            <div className="project360-nav-controls">
              <button onClick={prevProject} className="project360-nav-btn">
                ◀
              </button>
              <button onClick={nextProject} className="project360-nav-btn">
                ▶
              </button>
            </div>
          </div>

          <div className={`project360-details ${isVisible ? 'visible' : ''}`}>
            <div className="project360-category">{currentProject.category}</div>
            <h3 className="project360-project-title">{currentProject.title}</h3>
            <p className="project360-location">📍 {currentProject.location}</p>
            <p className="project360-description">{currentProject.description}</p>

            <div className="project360-tech-section">
              <h4>Technologies Révolutionnaires :</h4>
              <div className="project360-tech-list">
                {currentProject.technologies.map((tech, index) => (
                  <span key={index} className="project360-tech-tag">
                    ⚡ {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project360-stats">
              {Object.entries(currentProject.stats).map(([key, value], index) => (
                <div key={index} className="project360-stat-item">
                  <div className="project360-stat-value">{value}</div>
                  <div className="project360-stat-label">{key}</div>
                </div>
              ))}
            </div>


          </div>
        </div>

        {/* Thumbnails */}
        <div className="project360-thumbnails">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`project360-thumb ${activeProject === index ? 'active' : ''}`}
            >
              <img src={project.image} alt={project.title} />
              {activeProject === index && <div className="project360-thumb-overlay"></div>}
            </button>
          ))}
        </div>

        {/* Final CTA */}
        <div className="project360-final-cta">
          <div className="project360-cta-card">
            <h3 className="project360-cta-title">Prêt pour votre projet révolutionnaire ?</h3>
            <p className="project360-cta-desc">
              Transformez votre vision en réalité avec nos technologies d'avant-garde 
              et notre expertise architecturale révolutionnaire.
            </p>
            <div className="project360-cta-buttons">
              <button className="project360-btn-primary">Consultation Gratuite</button>
              <button className="project360-btn-secondary">Portfolio Complet</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project360Gallery;