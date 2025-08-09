import React, { useEffect, useRef, useState } from 'react';
import '../Style/Stat.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    experience: 0,
    employees: 0,
    countries: 0,
    revenue: 0,
    satisfaction: 0
  });
  const ref = useRef(null);

  const finalStats = {
    projects: 1000,
    clients: 98,
    awards: 25,
    experience: 30,
    employees: 150,
    countries: 8,
    revenue: 120,
    satisfaction: 99
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2500;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = Math.min(currentStep / steps, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          projects: Math.round(finalStats.projects * easeOutQuart),
          clients: Math.round(finalStats.clients * easeOutQuart),
          awards: Math.round(finalStats.awards * easeOutQuart),
          experience: Math.round(finalStats.experience * easeOutQuart),
          employees: Math.round(finalStats.employees * easeOutQuart),
          countries: Math.round(finalStats.countries * easeOutQuart),
          revenue: Math.round(finalStats.revenue * easeOutQuart),
          satisfaction: Math.round(finalStats.satisfaction * easeOutQuart)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  // SVG Icons as components
  const Building2Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21L5 19.82"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21l4.03 1.61"></path>
      <path d="M12 2v3"></path>
    </svg>
  );

  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M12 2v4"></path>
      <path d="m12 18v4"></path>
      <path d="m2 12h4"></path>
      <path d="m18 12h4"></path>
    </svg>
  );

  const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );

  const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );

  const mainStats = [
    {
      icon: Building2Icon,
      value: counts.projects,
      suffix: '+',
      label: 'Projets Réalisés',
      description: 'Constructions d\'exception livrées',
      color: 'blue',
      bgColor: 'blue'
    },
    {
      icon: UsersIcon,
      value: counts.clients,
      suffix: '%',
      label: 'Clients Satisfaits',
      description: 'Taux de satisfaction exceptionnel',
      color: 'emerald',
      bgColor: 'emerald'
    },
    {
      icon: TrophyIcon,
      value: counts.awards,
      suffix: '',
      label: 'Prix & Distinctions',
      description: 'Récompenses pour notre excellence',
      color: 'amber',
      bgColor: 'amber'
    },
    {
      icon: ClockIcon,
      value: counts.experience,
      suffix: '+',
      label: 'Années d\'Expérience',
      description: 'Décennies de savoir-faire',
      color: 'purple',
      bgColor: 'purple'
    }
  ];

  const secondaryStats = [
    {
      icon: TargetIcon,
      value: counts.employees,
      suffix: '+',
      label: 'Collaborateurs',
      color: 'rose'
    },
    {
      icon: GlobeIcon,
      value: counts.countries,
      suffix: '',
      label: 'Pays d\'intervention',
      color: 'indigo'
    },
    {
      icon: ZapIcon,
      value: counts.revenue,
      suffix: 'M€',
      label: 'CA annuel',
      color: 'orange'
    },
    {
      icon: AwardIcon,
      value: counts.satisfaction,
      suffix: '%',
      label: 'Recommandations',
      color: 'teal'
    }
  ];

  return (
    <section className={`stats-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="stats-container">
        {/* Header */}
        <div className={`stats-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="stats-badge">
            <TrophyIcon />
            <span>CHIFFRES CLÉS</span>
          </div>
          <h2 className="stats-title">
            L'Excellence <span className="highlight">Mesurée</span>
          </h2>
          <p className="stats-description">
            Trois décennies d'expertise se reflètent dans ces chiffres qui témoignent 
            de notre engagement constant vers l'excellence et l'innovation.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="stats-grid-main">
          {mainStats.map((stat, index) => (
            <div
              key={index}
              className={`stats-card-main stats-${stat.color} ${isVisible ? 'fade-in' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="stats-card-icon">
                <stat.icon />
              </div>
              <div className="stats-card-value">
                {stat.value}<span className="stats-suffix">{stat.suffix}</span>
              </div>
              <h3 className="stats-card-label">{stat.label}</h3>
              <p className="stats-card-desc">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Secondary Stats */}
        <div className={`stats-grid-secondary ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '800ms' }}>
          {secondaryStats.map((stat, index) => (
            <div key={index} className={`stats-card-secondary stats-${stat.color}`}>
              <div className="stats-secondary-icon">
                <stat.icon />
              </div>
              <div className="stats-secondary-value">
                {stat.value}<span className="stats-suffix">{stat.suffix}</span>
              </div>
              <div className="stats-secondary-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`stats-certifications ${isVisible ? 'fade-in' : ''}`} style={{ transitionDelay: '1000ms' }}>
          <div className="stats-cert-container">
            <div className="stats-cert-item">
              <div className="stats-cert-value">ISO 9001</div>
              <div className="stats-cert-label">Qualité Certifiée</div>
            </div>
            <div className="stats-cert-divider"></div>
            <div className="stats-cert-item">
              <div className="stats-cert-value">Qualibat</div>
              <div className="stats-cert-label">Excellence BTP</div>
            </div>
            <div className="stats-cert-divider"></div>
            <div className="stats-cert-item">
              <div className="stats-cert-value">RGE</div>
              <div className="stats-cert-label">Éco-Responsable</div>
            </div>
            <div className="stats-cert-divider"></div>
            <div className="stats-cert-item">
              <div className="stats-cert-value">OPPBTP</div>
              <div className="stats-cert-label">Sécurité Maximale</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="stats-bg-effects">
        <div className="stats-bg-circle-1"></div>
        <div className="stats-bg-circle-2"></div>
      </div>

      {/* Floating particles */}
      <div className="stats-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="stats-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Stats;