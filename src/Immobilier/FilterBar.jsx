import React, { useState } from 'react';
import { propertyTypes, neighborhoods } from '../data/properties';
import './FilterBar.css';

const PropertyFilter = ({ onFilterChange, filters }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (field, value) => {
    const newFilters = { ...localFilters, [field]: value };
    setLocalFilters(newFilters);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      type: 'Tous les types',
      location: '',
      minPrice: '',
      maxPrice: ''
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="property-filter-section">
      <div className="property-filter-container">
        <div className="property-filter-header">
          <h2 className="property-filter-title">Trouvez votre propriété d'exception</h2>
          <p className="property-filter-subtitle">Parcourez notre sélection de biens prestigieux</p>
        </div>
        
        <form className="property-filter-form" onSubmit={handleSubmit}>
          <button 
            type="button" 
            className="property-filter-mobile-toggle"
            onClick={toggleExpand}
            aria-expanded={isExpanded}
          >
            <span>Options de recherche</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d={isExpanded ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
            </svg>
          </button>

          <div className={`property-filter-content ${isExpanded ? 'is-expanded' : ''}`}>
            <div className="property-filter-group">
              <label className="property-filter-label">Type de bien</label>
              <div className="property-input-wrapper">
                <svg className="property-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
                </svg>
                <select 
                  className="property-filter-select"
                  value={localFilters.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="property-filter-group">
              <label className="property-filter-label">Localisation</label>
              <div className="property-input-wrapper">
                <svg className="property-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <select 
                  className="property-filter-select"
                  value={localFilters.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option value="">Tous les quartiers</option>
                  {neighborhoods.map(neighborhood => (
                    <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="property-filter-group property-price-group">
              <label className="property-filter-label">Budget (€)</label>
              <div className="property-price-inputs">
                <div className="property-input-wrapper">
                  <svg className="property-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Minimum"
                    className="property-filter-input property-price-input"
                    value={localFilters.minPrice}
                    onChange={(e) => handleInputChange('minPrice', e.target.value)}
                  />
                </div>
                <span className="property-price-separator">—</span>
                <div className="property-input-wrapper">
                  <input
                    type="text"
                    placeholder="Maximum"
                    className="property-filter-input property-price-input"
                    value={localFilters.maxPrice}
                    onChange={(e) => handleInputChange('maxPrice', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="property-filter-actions">
              <button type="submit" className="property-btn property-btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                Rechercher
              </button>
              <button type="button" className="property-btn property-btn-secondary" onClick={handleReset}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                Réinitialiser
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PropertyFilter;