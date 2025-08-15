import React, { useState, useMemo, useEffect } from "react";
import "../Parkstyle/Catalogue.css";

const luxuryFleetData = {
  collections: [
    { id: "sedan", name: "Série Élégance (Berlines)", icon: "" },
    { id: "pickup", name: "Gamme Tout-Terrain", icon: "" },
    { id: "utility", name: "Utilitaires Pro", icon: "" },
    { id: "premium", name: "Collection Prestige", icon: "" },
    { id: "btp", name: "Flotte BTP", icon: "" },
  ],
  destinations: ["Conakry", "Kipé", "Matam", "Kaloum", "Coyah"],
  tarification: [
    { id: "range1", name: "Standard", min: 500000, max: 999999 },
    { id: "range2", name: "Tout-Terrain", min: 1000000, max: 1999999 },
    { id: "range3", name: "Prestige", min: 2000000, max: 5000000 },
    { id: "range4", name: "BTP", min: 2500000, max: 6000000 },
  ],
  luxuryVehicles: [
    {
      id: "lv1",
      designation: "Toyota Corolla 1.8L",
      collection: "sedan",
      famille: "Berline Fiable",
      marque: "Toyota",
      edition: "GLi 2023",
      annee: 2023,
      capacite: "5 personnes",
      performance: "105 ch",
      energie: "Essence",
      tarifs: {
        quotidien: 600000,
        hebdomadaire: 3400000,
        mensuel: 11000000,
      },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Conakry",
      galerie: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800"
      ],
      equipements: [
        "Climatisation",
        "Bluetooth",
        "Caméra de recul",
        "Vitres électriques",
      ],
      caracteristiques: {
        moteur: "1.8L 4 cylindres",
        poids: "1320 kg",
        consommation: "6.6L/100km",
      },
      presentation:
        "Version 2023 du best-seller, avec équipements modernisés pour un confort accru.",
      inclusions: ["Assurance RC", "Livraison", "Assistance 24h"],
    },
    {
      id: "lv2",
      designation: "Toyota Hilux 2.8L Diesel",
      collection: "pickup",
      famille: "Tout-Terrain",
      marque: "Toyota",
      edition: "GR-S 2023",
      annee: 2023,
      capacite: "5 + bac",
      performance: "204 ch",
      energie: "Diesel",
      tarifs: {
        quotidien: 1100000,
        hebdomadaire: 6000000,
        mensuel: 20000000,
      },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Kipé",
      galerie: [
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800"
      ],
      equipements: [
        "4x4 automatique",
        "Suspension renforcée",
        "Toit ouvrant",
        "Système multimédia",
      ],
      caracteristiques: {
        moteur: "2.8L Turbo Diesel",
        charge: "1200 kg",
        empattement: "3.08 m",
      },
      presentation:
        "Le pickup le plus fiable de sa catégorie, idéal pour les terrains difficiles.",
      inclusions: ["Opérateur certifié", "Permis de circulation", "Assurance spéciale"],
    },
    // ... (autres véhicules avec galeries complètes)
  ],
};

const LuxuryFleetGallery = () => {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [recherche, setRecherche] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedTarification, setSelectedTarification] = useState("all");
  const [vehiculeSelectionne, setVehiculeSelectionne] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const { luxuryVehicles, collections, destinations, tarification } = luxuryFleetData;

  const vehiculesFiltres = useMemo(() => {
    return luxuryVehicles.filter((vehicule) => {
      const matchesCollection = selectedCollection === "all" || vehicule.collection === selectedCollection;
      const matchesSearch = !recherche || 
        [vehicule.designation, vehicule.marque, vehicule.famille]
          .some(field => field.toLowerCase().includes(recherche.toLowerCase()));
      const matchesDestination = selectedDestination === "all" || vehicule.destination === selectedDestination;
      
      if (!matchesCollection || !matchesSearch || !matchesDestination) return false;
      
      if (selectedTarification !== "all") {
        const gamme = tarification.find((g) => g.id === selectedTarification);
        if (gamme) {
          const tarif = vehicule.tarifs.quotidien;
          return tarif >= gamme.min && tarif <= gamme.max;
        }
      }
      return true;
    });
  }, [luxuryVehicles, selectedCollection, recherche, selectedDestination, selectedTarification, tarification]);

  // Gestion du carrousel automatique
  useEffect(() => {
    let interval;
    if (isAutoPlaying && modalVisible && vehiculeSelectionne?.galerie.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % vehiculeSelectionne.galerie.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, modalVisible, vehiculeSelectionne]);

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % vehiculeSelectionne.galerie.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + vehiculeSelectionne.galerie.length) % vehiculeSelectionne.galerie.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextImage();
    } else if (touchStart - touchEnd < -50) {
      prevImage();
    }
  };

  const ouvrirModal = (vehicule) => {
    setVehiculeSelectionne(vehicule);
    setCurrentImageIndex(0);
    setModalVisible(true);
    setIsAutoPlaying(true);
  };

  const fermerModal = () => {
    setModalVisible(false);
    setVehiculeSelectionne(null);
    setIsAutoPlaying(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <div className="gtraf-luxury-container">
      {/* Hero Section */}
      <div className="gtraf-hero-content">
        <div className="gtraf-luxury-badge">
          <span className="gtraf-badge-shine"></span>
          <svg className="gtraf-crown-icon" viewBox="0 0 24 24">
            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
          </svg>
          Collection Premium
        </div>
        <h1 className="gtraf-hero-title">Flotte de Luxe & Professionnelle</h1>
        <p className="gtraf-hero-subtitle">
          Découvrez notre sélection exclusive de véhicules haut de gamme disponibles à la location
        </p>
        <div className="gtraf-hero-stats">
          <div className="gtraf-stat-item">
            <strong>{luxuryVehicles.length}+</strong>
            <span>Véhicules</span>
          </div>
          <div className="gtraf-stat-separator"></div>
          <div className="gtraf-stat-item">
            <strong>{collections.length}</strong>
            <span>Collections</span>
          </div>
          <div className="gtraf-stat-separator"></div>
          <div className="gtraf-stat-item">
            <strong>{destinations.length}</strong>
            <span>Destinations</span>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="gtraf-filter-sanctuary">
        <div className="gtraf-filter-header">
          <h2 className="gtraf-filter-title">Trouvez Votre Véhicule Idéal</h2>
          <p className="gtraf-filter-subtitle">Filtrez par collection, destination ou budget</p>
        </div>
        
        <div className="gtraf-filter-grid">
          <div className="gtraf-search-luxury">
            <svg className="gtraf-search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.81 16 11.45 16 10c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7c1.45 0 2.81-.59 3.72-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input
              type="text"
              placeholder="Rechercher par modèle, marque..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="gtraf-search-input"
            />
            <div className="gtraf-input-shimmer"></div>
          </div>

          <div className="gtraf-select-luxury">
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="gtraf-select"
            >
              <option value="all">Toutes les Collections</option>
              {collections.map((col) => (
                <option key={col.id} value={col.id}>{col.name}</option>
              ))}
            </select>
            <svg className="gtraf-select-arrow" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>

          <div className="gtraf-select-luxury">
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="gtraf-select"
            >
              <option value="all">Toutes les Destinations</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
            <svg className="gtraf-select-arrow" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>

          <div className="gtraf-select-luxury">
            <select
              value={selectedTarification}
              onChange={(e) => setSelectedTarification(e.target.value)}
              className="gtraf-select"
            >
              <option value="all">Tous les Prix</option>
              {tarification.map((gamme) => (
                <option key={gamme.id} value={gamme.id}>
                  {gamme.name} ({formatPrice(gamme.min)} - {formatPrice(gamme.max)} GNF)
                </option>
              ))}
            </select>
            <svg className="gtraf-select-arrow" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>

        <div className="gtraf-filter-summary">
          <div className="gtraf-results-count">
            <span className="gtraf-count-number">{vehiculesFiltres.length}</span>
            <span className="gtraf-count-text">
              véhicule{vehiculesFiltres.length > 1 ? "s" : ""} trouvé{vehiculesFiltres.length > 1 ? "s" : ""}
            </span>
          </div>
          <button
            className="gtraf-reset-filters"
            onClick={() => {
              setRecherche("");
              setSelectedDestination("all");
              setSelectedTarification("all");
              setSelectedCollection("all");
            }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
            Réinitialiser
          </button>
        </div>
      </div>

      {/* Collections */}
      <div className="gtraf-collections-showcase">
        <div className="gtraf-collection-header">
          <h2 className="gtraf-collection-title">Nos Collections</h2>
          <div className="gtraf-collection-line"></div>
        </div>
        <div className="gtraf-collection-tabs">
          <button
            className={`gtraf-collection-tab ${selectedCollection === "all" ? "gtraf-active" : ""}`}
            onClick={() => setSelectedCollection("all")}
          >
            <div className="gtraf-tab-content">
              <div className="gtraf-tab-label">Toutes</div>
              <div className="gtraf-tab-count">{luxuryVehicles.length} véhicules</div>
            </div>
          </button>
          {collections.map((collection) => {
            const count = luxuryVehicles.filter((v) => v.collection === collection.id).length;
            return (
              <button
                key={collection.id}
                className={`gtraf-collection-tab ${selectedCollection === collection.id ? "gtraf-active" : ""}`}
                onClick={() => setSelectedCollection(collection.id)}
              >
                <div className="gtraf-tab-icon">{collection.icon}</div>
                <div className="gtraf-tab-content">
                  <div className="gtraf-tab-label">{collection.name}</div>
                  <div className="gtraf-tab-count">
                    {count} véhicule{count > 1 ? "s" : ""}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Galerie de véhicules */}
      <div className="gtraf-vehicles-gallery">
        {vehiculesFiltres.length === 0 ? (
          <div className="gtraf-no-results">
            <div className="gtraf-no-results-icon">
              <svg viewBox="0 0 24 24">
                <path d="M14,10H19V15H14M5,10H10V15H5M14,4H19V9H14M5,4H10V9H5M14,16H19V20H15V16H14M5,16H9V20H5V16M11,20V16H13V20H11M8,4V8H6V4H8M8,16V20H6V16H8M11,4V8H13V4H11Z"/>
              </svg>
            </div>
            <h3 className="gtraf-no-results-title">Aucun véhicule trouvé</h3>
            <p className="gtraf-no-results-text">
              Aucun véhicule ne correspond à vos critères. Veuillez modifier vos filtres.
            </p>
            <button
              className="gtraf-contact-btn"
              onClick={() => {
                setRecherche("");
                setSelectedDestination("all");
                setSelectedTarification("all");
                setSelectedCollection("all");
              }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"/>
              </svg>
              Nous Contacter
            </button>
          </div>
        ) : (
          <div className="gtraf-grid-layout">
            {vehiculesFiltres.map((vehicule) => (
              <div key={vehicule.id} className="gtraf-vehicle-card" onClick={() => ouvrirModal(vehicule)}>
                <div className="gtraf-card-image-container">
                  <img 
                    src={vehicule.galerie[0]} 
                    alt={vehicule.designation} 
                    className="gtraf-card-image" 
                    loading="lazy"
                  />
                  <div className="gtraf-image-overlay-gradient"></div>
                  <div className="gtraf-card-badges">
                    <span className={`gtraf-status-badge ${vehicule.statut === "disponible" ? "gtraf-available" : "gtraf-reserved"}`}>
                      {vehicule.statut === "disponible" ? "Disponible" : "Réservé"}
                    </span>
                    {vehicule.galerie.length > 1 && (
                      <span className="gtraf-gallery-badge">
                        {vehicule.galerie.length} images
                      </span>
                    )}
                  </div>
                </div>
                <div className="gtraf-card-content">
                  <h3 className="gtraf-card-title">{vehicule.designation}</h3>
                  <p className="gtraf-card-subtitle">{vehicule.marque} • {vehicule.annee}</p>
                  <div className="gtraf-vehicle-stats">
                    <div className="gtraf-stat">
                      <strong>{vehicule.capacite}</strong>
                      <span>Capacité</span>
                    </div>
                    <div className="gtraf-stat">
                      <strong>{vehicule.performance}</strong>
                      <span>Puissance</span>
                    </div>
                    <div className="gtraf-stat">
                      <strong>{formatPrice(vehicule.tarifs.quotidien)} GNF</strong>
                      <span>Par jour</span>
                    </div>
                  </div>
                  <div className="gtraf-card-actions">
                    <button className="gtraf-card-btn gtraf-primary">
                      Réserver
                    </button>
                    <button className="gtraf-card-btn gtraf-secondary">
                      <svg viewBox="0 0 24 24" className="gtraf-eye-icon">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalVisible && vehiculeSelectionne && (
        <div className="gtraf-modal-overlay" onClick={fermerModal}>
          <div 
            className="gtraf-modal-container" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button className="gtraf-modal-close" onClick={fermerModal}>
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>

            <div className="gtraf-modal-hero">
              <img
                src={vehiculeSelectionne.galerie[currentImageIndex]}
                alt={`${vehiculeSelectionne.designation} - Image ${currentImageIndex + 1}`}
                className="gtraf-modal-image"
              />
              
              {vehiculeSelectionne.galerie.length > 1 && (
                <>
                  <button className="gtraf-gallery-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                    <svg viewBox="0 0 24 24">
                      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                    </svg>
                  </button>
                  <button className="gtraf-gallery-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                    <svg viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                  
                  <div className="gtraf-gallery-indicators">
                    {vehiculeSelectionne.galerie.map((_, index) => (
                      <button
                        key={index}
                        className={`gtraf-gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); handleThumbnailClick(index); }}
                      />
                    ))}
                  </div>
                  
                  <button 
                    className={`gtraf-autoplay-btn ${isAutoPlaying ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); setIsAutoPlaying(!isAutoPlaying); }}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                    </svg>
                  </button>
                </>
              )}
              
              <div className="gtraf-modal-hero-overlay">
                <div className="gtraf-modal-badge">
                  <span className={`gtraf-status-badge ${vehiculeSelectionne.statut === "disponible" ? "gtraf-available" : "gtraf-reserved"}`}>
                    {vehiculeSelectionne.statut === "disponible" ? "Disponible" : "Réservé"}
                  </span>
                </div>
                <div className="gtraf-modal-hero-content">
                  <h1 className="gtraf-modal-title">{vehiculeSelectionne.designation}</h1>
                  <p className="gtraf-modal-subtitle">
                    {vehiculeSelectionne.marque} • {vehiculeSelectionne.edition} • {vehiculeSelectionne.annee}
                  </p>
                </div>
              </div>
            </div>

            <div className="gtraf-modal-content">
              <div className="gtraf-modal-grid">
                {/* Section Galerie */}
                <div className="gtraf-modal-section gtraf-gallery-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <h3 className="gtraf-section-title">Galerie Photos</h3>
                  </div>
                  <div className="gtraf-gallery-thumbnails">
                    {vehiculeSelectionne.galerie.map((img, index) => (
                      <div 
                        key={index} 
                        className={`gtraf-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); handleThumbnailClick(index); }}
                      >
                        <img 
                          src={img} 
                          alt={`${vehiculeSelectionne.designation} - Miniature ${index + 1}`} 
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Tarification */}
                <div className="gtraf-modal-section gtraf-pricing-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24">
                      <path d="M14,10H19V15H14M5,10H10V15H5M14,4H19V9H14M5,4H10V9H5M14,16H19V20H15V16H14M5,16H9V20H5V16M11,20V16H13V20H11M8,4V8H6V4H8M8,16V20H6V16H8M11,4V8H13V4H11Z"/>
                    </svg>
                    <h3 className="gtraf-section-title">Tarification</h3>
                  </div>
                  <div className="gtraf-pricing-tiers">
                    <div className="gtraf-price-tier">
                      <strong>Quotidien</strong>
                      <span>{formatPrice(vehiculeSelectionne.tarifs.quotidien)} {vehiculeSelectionne.monnaie}</span>
                    </div>
                    <div className="gtraf-price-tier">
                      <strong>Hebdomadaire</strong>
                      <span>{formatPrice(vehiculeSelectionne.tarifs.hebdomadaire)} {vehiculeSelectionne.monnaie}</span>
                    </div>
                    <div className="gtraf-price-tier">
                      <strong>Mensuel</strong>
                      <span>{formatPrice(vehiculeSelectionne.tarifs.mensuel)} {vehiculeSelectionne.monnaie}</span>
                    </div>
                  </div>
                </div>

                {/* Section Caractéristiques */}
                <div className="gtraf-modal-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24">
                      <path d="M14,10H19V15H14M5,10H10V15H5M14,4H19V9H14M5,4H10V9H5M14,16H19V20H15V16H14M5,16H9V20H5V16M11,20V16H13V20H11M8,4V8H6V4H8M8,16V20H6V16H8M11,4V8H13V4H11Z"/>
                    </svg>
                    <h3 className="gtraf-section-title">Caractéristiques</h3>
                  </div>
                  <div className="gtraf-specs-grid">
                    {Object.entries(vehiculeSelectionne.caracteristiques).map(([key, value]) => (
                      <div key={key} className="gtraf-spec-card">
                        <strong>{value}</strong>
                        <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Équipements */}
                <div className="gtraf-modal-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                    </svg>
                    <h3 className="gtraf-section-title">Équipements de Luxe</h3>
                  </div>
                  <div className="gtraf-equipment-grid">
                    {vehiculeSelectionne.equipements.map((equip, idx) => (
                      <div key={idx} className="gtraf-equipment-item">
                        <svg className="gtraf-check-icon" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>{equip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Services */}
                <div className="gtraf-modal-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-2.18L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h3 className="gtraf-section-title">Services Inclus</h3>
                  </div>
                  <div className="gtraf-services-grid">
                    {vehiculeSelectionne.inclusions.map((service, idx) => (
                      <div key={idx} className="gtraf-service-item">
                        <div className="gtraf-service-icon">
                          <svg viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-2.18L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <span className="gtraf-service-text">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section Description */}
                <div className="gtraf-modal-section gtraf-description-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    <h3 className="gtraf-section-title">Présentation</h3>
                  </div>
                  <p>{vehiculeSelectionne.presentation}</p>
                </div>

                {/* Section Infos */}
                <div className="gtraf-modal-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                    </svg>
                    <h3 className="gtraf-section-title">Informations Clés</h3>
                  </div>
                  <div className="gtraf-vehicle-highlights">
                    <div className="gtraf-highlight-item">
                      <span className="gtraf-highlight-label">Édition:</span>
                      <span className="gtraf-highlight-value">{vehiculeSelectionne.edition}</span>
                    </div>
                    <div className="gtraf-highlight-item">
                      <span className="gtraf-highlight-label">Localisation:</span>
                      <span className="gtraf-highlight-value">{vehiculeSelectionne.destination}</span>
                    </div>
                    <div className="gtraf-highlight-item">
                      <span className="gtraf-highlight-label">Énergie:</span>
                      <span className="gtraf-highlight-value">{vehiculeSelectionne.energie}</span>
                    </div>
                    <div className="gtraf-highlight-item">
                      <span className="gtraf-highlight-label">Collection:</span>
                      <span className="gtraf-highlight-value">
                        {collections.find(c => c.id === vehiculeSelectionne.collection)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="gtraf-modal-actions">
              <button
                className={`gtraf-action-btn gtraf-primary-action ${vehiculeSelectionne.statut !== "disponible" ? "gtraf-disabled" : ""}`}
                disabled={vehiculeSelectionne.statut !== "disponible"}
              >
                <svg viewBox="0 0 24 24" className="gtraf-btn-icon">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
                Demander un Devis
              </button>
              <button className="gtraf-action-btn gtraf-secondary-action">
                <svg viewBox="0 0 24 24" className="gtraf-btn-icon">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Appeler G-TRAF+
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LuxuryFleetGallery;