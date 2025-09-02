import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property, onClick }) => {
  const formatPrice = (price, currency) => {
    // Format large numbers with spaces for readability
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formattedPrice} ${currency}`;
  };

  const getStatusBadgeClass = (status) => {
    return status === 'À vendre' ? 'status-sale' : 'status-rent';
  };

  return (
    <article className="property-card fade-in" onClick={() => onClick(property)}>
      <div className="property-image-container">
        <img 
          src={property.mainImage} 
          alt={property.title}
          className="property-image"
          loading="lazy"
        />
        <div className={`property-status ${getStatusBadgeClass(property.status)}`}>
          {property.status}
        </div>
        <div className="property-type-badge">
          {property.type}
        </div>
      </div>
      
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        
        <div className="property-location">
          <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{property.location.neighborhood}, {property.location.city}</span>
        </div>
        
        <div className="property-price">
          {formatPrice(property.price, property.currency)}
        </div>
        
        <div className="property-specs">
          <div className="spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
            </svg>
            <span>{property.surface} m²</span>
          </div>
          
          <div className="spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
              <line x1="9" y1="7" x2="9" y2="2"></line>
              <line x1="15" y1="7" x2="15" y2="2"></line>
            </svg>
            <span>{property.bedrooms} ch.</span>
          </div>
        </div>
        
        <button className="property-cta">
          <span>Voir détails</span>
          <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7,7 17,7 17,17"></polyline>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default PropertyCard;