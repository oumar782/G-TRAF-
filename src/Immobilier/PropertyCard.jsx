import React, { useState } from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price, currency) => {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formattedPrice} ${currency}`;
  };

  const getStatusBadgeClass = (status) => {
    return status === 'À vendre' ? 'status-sale' : 'status-rent';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <article className="property-card" onClick={() => onClick(property)}>
      <div className="property-image-container">
        {!imageLoaded && !imageError && (
          <div className="image-skeleton">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>
        )}
        
        {imageError ? (
          <div className="image-error">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>Image non disponible</span>
          </div>
        ) : (
          <img 
            src={property.mainImage} 
            alt={property.title}
            className={`property-image ${imageLoaded ? 'loaded' : ''}`}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        
        <div className="property-badges">
          <div className={`property-status ${getStatusBadgeClass(property.status)}`}>
            {property.status}
          </div>
          <div className="property-type-badge">
            {property.type}
          </div>
        </div>

        <div className="property-overlay">
          <div className="overlay-content">
            <span className="view-details-text">Voir les détails</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        
        <div className="property-location">
          <svg className="location-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{property.location.neighborhood}, {property.location.city}</span>
        </div>
        
        <div className="property-price">
          {formatPrice(property.price, property.currency)}
        </div>
        
        <div className="property-specs">
          <div className="spec-item">
            <div className="spec-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <rect x="9" y="9" width="6" height="6"/>
              </svg>
            </div>
            <div className="spec-content">
              <span className="spec-value">{property.surface}</span>
              <span className="spec-label">m²</span>
            </div>
          </div>
          
          <div className="spec-item">
            <div className="spec-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
                <line x1="9" y1="7" x2="9" y2="2"/>
                <line x1="15" y1="7" x2="15" y2="2"/>
              </svg>
            </div>
            <div className="spec-content">
              <span className="spec-value">{property.bedrooms}</span>
              <span className="spec-label">chambres</span>
            </div>
          </div>

          <div className="spec-item">
            <div className="spec-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className="spec-content">
              <span className="spec-value">{property.bathrooms}</span>
              <span className="spec-label">sdb</span>
            </div>
          </div>
        </div>
        
        <button className="property-cta">
          <span>Explorer cette propriété</span>
          <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default PropertyCard;