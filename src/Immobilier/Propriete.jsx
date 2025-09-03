import React, { useState } from 'react';
import './propriete.css';

const PropertyPage = ({ property, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) return null;

  const formatPrice = (price, currency) => {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formattedPrice} ${currency}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const getStatusBadgeClass = (status) => {
    return status === 'À vendre' ? 'status-sale' : 'status-rent';
  };

  return (
    <div className="property-page fade-in">
      <div className="container">
        <button className="back-button" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
          <span>Retour au catalogue</span>
        </button>

        <div className="property-detail">
          <div className="property-images">
            <div className="image-slider">
              <img 
                src={property.images[currentImageIndex]} 
                alt={`${property.title} - Image ${currentImageIndex + 1}`}
                className="main-image"
              />
              
              {property.images.length > 1 && (
                <>
                  <button className="slider-btn prev-btn" onClick={prevImage} aria-label="Image précédente">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="15,18 9,12 15,6"></polyline>
                    </svg>
                  </button>
                  <button className="slider-btn next-btn" onClick={nextImage} aria-label="Image suivante">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </button>
                  
                  <div className="image-counter">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>
                </>
              )}
            </div>
            
            {property.images.length > 1 && (
              <div className="image-thumbnails">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Voir image ${index + 1}`}
                  >
                    <img src={image} alt={`Miniature ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="property-info">
            <div className="property-header">
              <div className="property-badges">
                <div className={`property-status-badge ${getStatusBadgeClass(property.status)}`}>
                  {property.status}
                </div>
                <div className="property-type-badge">{property.type}</div>
              </div>
              
              <h1 className="property-title">{property.title}</h1>
              
              <div className="property-location">
                <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{property.location.neighborhood}, {property.location.city}</span>
              </div>
              
              <div className="property-price">{formatPrice(property.price, property.currency)}</div>
            </div>

            <div className="property-specs">
              <div className="spec">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-value">{property.surface}</span>
                  <span className="spec-label">m² habitables</span>
                </div>
              </div>
              
              <div className="spec">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                    <line x1="9" y1="7" x2="9" y2="2"></line>
                    <line x1="15" y1="7" x2="15" y2="2"></line>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-value">{property.bedrooms}</span>
                  <span className="spec-label">chambres</span>
                </div>
              </div>
              
              <div className="spec">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-value">{property.bathrooms}</span>
                  <span className="spec-label">salles de bain</span>
                </div>
              </div>
            </div>

            <div className="property-description">
              <h3 className="section-title">Description</h3>
              <p className="description-text">{property.description}</p>
            </div>

            <div className="property-features">
              <h3 className="section-title">Caractéristiques</h3>
              <ul className="features-list">
                {property.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <svg className="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="premium-contact-section">
  <div className="premium-contact-card">
    <div className="premium-contact-header">
      <div className="premium-contact-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
      <h3 className="premium-contact-title">Intéressé par cette propriété?</h3>
      <p className="premium-contact-subtitle">Notre conseiller dédié vous accompagne</p>
    </div>
    
    <div className="premium-contact-content">
      <div className="premium-contact-features">
        <div className="premium-contact-feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12,6 12,12 16,14"></polyline>
          </svg>
          <span>Réponse sous 24h</span>
        </div>
        <div className="premium-contact-feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Conseiller dédié</span>
        </div>
        <div className="premium-contact-feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>Visite sur rendez-vous</span>
        </div>
      </div>
      
      <button className="premium-contact-cta">
        <span className="premium-cta-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </span>
        <span className="premium-cta-text">
          <span className="premium-cta-main">Contacter G-Traf+</span>
          <span className="premium-cta-sub">Service Premium</span>
        </span>
        <span className="premium-cta-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </button>
    </div>
    
    <div className="premium-contact-footer">
      <p className="premium-contact-note">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        Notre équipe vous recontactera dans les 24h pour organiser une visite
      </p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;