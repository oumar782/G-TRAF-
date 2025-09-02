import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = ({ properties, onPropertyClick, isFiltered }) => {
  if (properties.length === 0) {
    return (
      <section className="property-list">
        <div className="container">
          <div className="no-results">
            <div className="no-results-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
            </div>
            <h3>Aucun bien ne correspond à votre recherche</h3>
            <p>Modifiez vos critères de filtrage pour découvrir plus de propriétés exclusives.</p>
            <button className="btn btn-secondary" onClick={() => window.location.reload()}>
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="property-list">
      <div className="container">
        <div className="section-header">
          <div className="section-titles">
            <h2 className="section-title">
              {isFiltered ? 'Résultats de votre recherche' : 'Notre collection exclusive'}
            </h2>
            <div className="property-count">
              <span className="count-number">{properties.length}</span>
              <span className="count-label">propriété{properties.length > 1 ? 's' : ''}</span>
            </div>
          </div>
          <p className="section-subtitle">
            {isFiltered 
              ? `Biens correspondant parfaitement à vos critères`
              : 'Découvrez des propriétés d\'exception sélectionnées avec soin'
            }
          </p>
        </div>
        
        <div className="properties-grid">
          {properties.map((property) => (
            <PropertyCard 
              key={property.id}
              property={property}
              onClick={onPropertyClick}
            />
          ))}
        </div>

        {properties.length > 6 && (
          <div className="load-more-section">
            <button className="btn btn-outline">
              <span>Charger plus de propriétés</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyList;