import { useState, useRef, useEffect } from 'react';
import '../Style/Timeline.css';

const InteractiveTimeline = () => {
  const [activeYear, setActiveYear] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  const events = [
    {
      year: '1999',
      title: 'Fondation Visionnaire',
      description: 'Naissance de TechnoConstruct avec une vision révolutionnaire : intégrer la technologie de pointe dans le BTP traditionnel.',
      achievement: 'Premier projet IoT dans la construction',
      icon: 'rocket',
      color: 'primary'
    },
    {
      year: '2005',
      title: 'Innovation Breakthrough',
      description: 'Développement de notre première solution de construction assistée par IA, révolutionnant les méthodes traditionnelles.',
      achievement: 'Brevet international déposé',
      icon: 'zap',
      color: 'electric'
    },
    {
      year: '2012',
      title: 'Expansion Technologique',
      description: 'Lancement de notre division robotique pour automatiser les processus de construction et améliorer la précision.',
      achievement: '50 projets automatisés',
      icon: 'building',
      color: 'neon'
    },
    {
      year: '2018',
      title: 'Reconnaissance Mondiale',
      description: 'Prix international d\'innovation architecturale pour notre approche révolutionnaire du BTP durable.',
      achievement: 'Prix Global Architecture Innovation',
      icon: 'trophy',
      color: 'accent'
    },
    {
      year: '2024',
      title: 'Futur Architectural',
      description: 'Lancement de notre plateforme de réalité virtuelle pour la construction 4.0 et l\'architecture immersive.',
      achievement: 'Leader technologique BTP Europe',
      icon: 'sparkles',
      color: 'luxury'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      rocket: (
        <svg viewBox="0 0 24 24" fill="none" className="itl-icon">
          <path className="itl-icon-svg" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path className="itl-icon-svg" d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path className="itl-icon-svg" d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path className="itl-icon-svg" d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      zap: (
        <svg viewBox="0 0 24 24" fill="none" className="itl-icon">
          <polygon className="itl-icon-svg" points="13,2 3,14 12,14 11,22 21,10 12,10" />
        </svg>
      ),
      building: (
        <svg viewBox="0 0 24 24" fill="none" className="itl-icon">
          <path className="itl-icon-svg" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path className="itl-icon-svg" d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path className="itl-icon-svg" d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path className="itl-icon-svg" d="M10 6h4" />
          <path className="itl-icon-svg" d="M10 10h4" />
          <path className="itl-icon-svg" d="M10 14h4" />
          <path className="itl-icon-svg" d="M10 18h4" />
        </svg>
      ),
      trophy: (
        <svg viewBox="0 0 24 24" fill="none" className="itl-icon">
          <path className="itl-icon-svg" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path className="itl-icon-svg" d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path className="itl-icon-svg" d="M4 22h16" />
          <path className="itl-icon-svg" d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path className="itl-icon-svg" d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path className="itl-icon-svg" d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
      sparkles: (
        <svg viewBox="0 0 24 24" fill="none" className="itl-icon">
          <path className="itl-icon-svg" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path className="itl-icon-svg" d="M5 3v4" />
          <path className="itl-icon-svg" d="M19 17v4" />
          <path className="itl-icon-svg" d="M3 5h4" />
          <path className="itl-icon-svg" d="M17 19h4" />
        </svg>
      )
    };
    return icons[iconName] || icons.rocket;
  };

  const calendarIcon = (
    <svg className="itl-calendar-icon" viewBox="0 0 24 24" fill="none">
      <path className="itl-icon-svg" d="M8 2v4" />
      <path className="itl-icon-svg" d="M16 2v4" />
      <rect className="itl-icon-svg" width="18" height="18" x="3" y="4" rx="2" />
      <path className="itl-icon-svg" d="M3 10h18" />
    </svg>
  );

  const trophyIcon = (
    <svg className="itl-trophy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );

  const sparklesIcon = (
    <svg className="itl-sparkles-icon" viewBox="0 0 24 24" fill="none">
      <path className="itl-icon-svg" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path className="itl-icon-svg" d="M5 3v4" />
      <path className="itl-icon-svg" d="M19 17v4" />
      <path className="itl-icon-svg" d="M3 5h4" />
      <path className="itl-icon-svg" d="M17 19h4" />
    </svg>
  );

  return (
    <section ref={timelineRef}id='Nos-parcours' className={`itl-timeline-section ${isVisible ? 'itl-visible' : ''}`}>
      <div className="itl-floating-bg itl-bg-1"></div>
      <div className="itl-floating-bg itl-bg-2"></div>
      <div className="itl-floating-bg itl-bg-3"></div>
      
      <div className="itl-container">
        {/* Header */}
        <div className="itl-header">
          <div className={`itl-badge ${isVisible ? 'itl-visible' : ''}`}>
            🚀 NOTRE HISTOIRE RÉVOLUTIONNAIRE
          </div>
          <h2 className={`itl-title ${isVisible ? 'itl-visible' : ''}`}>
            25 ans d'<span className="itl-title-gradient">Innovation</span><br />
            Technologique
          </h2>
          <p className={`itl-description ${isVisible ? 'itl-visible' : ''}`}>
            De startup visionnaire à leader technologique : découvrez les moments clés qui ont façonné 
            l'avenir de l'architecture et de la construction.
          </p>
        </div>

        {/* Timeline */}
        <div className="itl-timeline">
          <div className="itl-timeline-line"></div>

          <div className="itl-timeline-events">
            {events.map((event, index) => {
              const isActive = activeYear === index;

              return (
                <div
                  key={index}
                  className={`itl-timeline-event ${isVisible ? 'itl-visible' : ''}`}
                  style={{ '--index': index }}
                  onMouseEnter={() => setActiveYear(index)}
                >
                  {/* Content Card */}
                  <div className="itl-event-content">
                    <div className={`itl-event-card ${isActive ? 'itl-active' : ''}`}>
                      <div className="itl-year-badge">{event.year}</div>
                      <h3 className="itl-event-title">{event.title}</h3>
                      <p className="itl-event-description">{event.description}</p>
                      <div className="itl-achievement-badge">
                        {trophyIcon}
                        <span>{event.achievement}</span>
                      </div>
                    </div>
                  </div>

                  {/* Central Icon */}
                  <div 
                    className={`itl-timeline-icon ${isActive ? 'itl-active' : ''}`}
                    onClick={() => setActiveYear(index)}
                  >
                    {getIcon(event.icon)}
                  </div>

                  {/* Interactive Details */}
                  <div className={`itl-event-details ${isActive ? 'itl-active' : ''}`}>
                    <div className="itl-detail-card">
                      <div className="itl-detail-header">
                        {calendarIcon}
                        <span className="itl-detail-year">{event.year}</span>
                      </div>
                      <div className="itl-detail-text">
                        Moment décisif dans notre évolution technologique
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="itl-progress-container">
          <div className="itl-progress-dots">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveYear(index)}
                className={`itl-progress-dot ${activeYear === index ? 'itl-active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="itl-cta-container">
          <div className={`itl-cta-card ${isVisible ? 'itl-visible' : ''}`}>
            <h3 className="itl-cta-title">
              Prêt à écrire l'avenir avec nous ?
            </h3>
            <p className="itl-cta-description">
              Rejoignez notre aventure technologique et participez à la révolution de l'architecture moderne.
            </p>
            <button className="itl-cta-button">
              {sparklesIcon}
              Découvrir nos innovations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;


<button className="gtraf-action-btn gtraf-tertiary-action">
<svg className="gtraf-btn-icon" viewBox="0 0 24 24" fill="currentColor">
  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
</svg>
Appeler G-TRAF+
</button>