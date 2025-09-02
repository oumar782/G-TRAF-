import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = ({ properties, onPropertyClick, isFiltered }) => {
  if (properties.length === 0) {
    return (
      <section className="property-list">
        <div className="container">
          <div className="no-results">
            <svg className="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <h3>Aucun bien trouvé</h3>
            <p>Essayez de modifier vos critères de recherche pour voir plus de résultats.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="property-list">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {isFiltered ? 'Résultats de votre recherche' : 'Nos biens d\'exception'}
          </h2>
          <p className="section-subtitle">
            {isFiltered 
              ? `${properties.length} bien${properties.length > 1 ? 's' : ''} correspond${properties.length > 1 ? 'ent' : ''} à vos critères`
              : 'Découvrez notre sélection de propriétés de prestige à Conakry'
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
      </div>
    </section>
  );
};

export default PropertyList;