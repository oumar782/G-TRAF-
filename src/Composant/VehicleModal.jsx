import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function VehicleModal({ vehicle, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (vehicle) {
      setCurrentImageIndex(0);
    }
  }, [vehicle]);

  if (!isOpen || !vehicle) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === vehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>
          <X className="modal-close-icon" />
        </button>

        <div className="modal-content">
          {/* Image Gallery */}
          <div className="modal-gallery">
            <div className="modal-main-image-container">
              <img 
                src={vehicle.images[currentImageIndex]} 
                alt={vehicle.name}
                className="modal-main-image"
              />
              <button 
                className="modal-nav-button prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft className="modal-nav-icon" />
              </button>
              <button 
                className="modal-nav-button next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="modal-nav-icon" />
              </button>
            </div>
            
            <div className="modal-thumbnails">
              {vehicle.images.map((img, index) => (
                <button
                  key={index}
                  className={`modal-thumbnail ${index === currentImageIndex ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail-image"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="modal-details">
            <h2 className="modal-vehicle-title">{vehicle.name}</h2>
            <p className="modal-vehicle-subtitle">
              {vehicle.brand} • {vehicle.model} • {vehicle.year}
            </p>

            <div className="modal-price-container">
              <div className="modal-price-section">
                <span className="modal-price-label">Prix journalier</span>
                <span className="modal-price-value">{vehicle.price.daily}€</span>
              </div>
              <div className="modal-price-section">
                <span className="modal-price-label">Prix hebdomadaire</span>
                <span className="modal-price-value">{vehicle.price.weekly}€</span>
              </div>
              <div className="modal-price-section">
                <span className="modal-price-label">Prix mensuel</span>
                <span className="modal-price-value">{vehicle.price.monthly}€</span>
              </div>
            </div>

            <div className="modal-specs-grid">
              <div className="modal-spec-item">
                <span className="modal-spec-label">Catégorie</span>
                <span className="modal-spec-value">{vehicle.category}</span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-label">Type</span>
                <span className="modal-spec-value">{vehicle.type}</span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-label">Capacité</span>
                <span className="modal-spec-value">{vehicle.capacity}</span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-label">Puissance</span>
                <span className="modal-spec-value">{vehicle.power}</span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-label">Carburant</span>
                <span className="modal-spec-value">{vehicle.fuelType}</span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-label">Disponibilité</span>
                <span className={`modal-spec-value ${vehicle.availability === "available" ? "available" : "unavailable"}`}>
                  {vehicle.availability === "available" ? "Disponible" : "Non disponible"}
                </span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-label">Localisation</span>
                <span className="modal-spec-value">{vehicle.location}</span>
              </div>
            </div>

            <div className="modal-features">
              <h3 className="modal-section-title">Équipements</h3>
              <ul className="modal-features-list">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="modal-feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-description">
              <h3 className="modal-section-title">Description</h3>
              <p>{vehicle.description}</p>
            </div>

            <button className="modal-book-button">
              Réserver ce véhicule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleModal;