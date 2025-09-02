import React, { useState, useMemo } from 'react';
import Hero from '../Immobilier/Heroimm';
import FilterBar from '../Immobilier/FilterBar';
import PropertyList from '../Immobilier/PropertyList';
import PropertyPage from '../Immobilier/Propriete';

import { properties } from '../data/properties';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filters, setFilters] = useState({
    type: 'Tous les types',
    location: '',
    minPrice: '',
    maxPrice: ''
  });

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Filter by type
      if (filters.type !== 'Tous les types' && property.type !== filters.type) {
        return false;
      }

      // Filter by location
      if (filters.location && property.location.neighborhood !== filters.location) {
        return false;
      }

      // Filter by price range
      const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
      
      if (filters.minPrice) {
        const minPrice = parseInt(filters.minPrice.replace(/[^0-9]/g, ''));
        if (propertyPrice < minPrice) return false;
      }
      
      if (filters.maxPrice) {
        const maxPrice = parseInt(filters.maxPrice.replace(/[^0-9]/g, ''));
        if (propertyPrice > maxPrice) return false;
      }

      return true;
    });
  }, [filters]);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedProperty(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const isFiltered = filters.type !== 'Tous les types' || 
                    filters.location !== '' || 
                    filters.minPrice !== '' || 
                    filters.maxPrice !== '';

  return (
    <div className="App">
      
      {selectedProperty ? (
        <PropertyPage 
          property={selectedProperty}
          onBack={handleBackToList}
        />
      ) : (
        <>
          <Hero />
          <FilterBar 
            onFilterChange={handleFilterChange}
            filters={filters}
          />
          <PropertyList 
            properties={filteredProperties}
            onPropertyClick={handlePropertyClick}
            isFiltered={isFiltered}
          />
        </>
      )}
      
    </div>
  );
}

export default App;