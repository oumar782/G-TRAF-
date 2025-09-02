import React, { useState } from 'react';
import { propertyTypes, neighborhoods } from '../data/properties';
import './FilterBar.css';

const FilterBar = ({ onFilterChange, filters }) => {
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
    <section className="filter-section">
      <div className="container">
        <div className="filter-header">
          <h2 className="filter-title">Trouvez votre bien idéal</h2>
          <p className="filter-subtitle">Recherchez parmi nos propriétés exclusives</p>
        </div>
        
        <form className="filter-bar" onSubmit={handleSubmit}>
          <button 
            type="button" 
            className="mobile-toggle"
            onClick={toggleExpand}
            aria-expanded={isExpanded}
          >
            <span>Filtres</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d={isExpanded ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
            </svg>
          </button>

          <div className={`filter-content ${isExpanded ? 'expanded' : ''}`}>
            <div className="filter-group">
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
                </svg>
                <select 
                  className="filter-select"
                  value={localFilters.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="filter-group">
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <select 
                  className="filter-select"
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

            <div className="filter-group price-group">
              <div className="price-inputs">
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Prix min"
                    className="filter-input price-input"
                    value={localFilters.minPrice}
                    onChange={(e) => handleInputChange('minPrice', e.target.value)}
                  />
                </div>
                <span className="price-separator">—</span>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Prix max"
                    className="filter-input price-input"
                    value={localFilters.maxPrice}
                    onChange={(e) => handleInputChange('maxPrice', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="filter-actions">
              <button type="submit" className="btn btn-primary filter-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                Appliquer les filtres
              </button>
              <button type="button" className="btn btn-secondary reset-btn" onClick={handleReset}>
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

export default FilterBar;