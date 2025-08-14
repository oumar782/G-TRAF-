import React, { useState, useMemo } from "react";
import "../Parkstyle/Catalogue.css";

// === DONNÉES DU PARC AUTOMOBILE G-TRAF+ (Kipé, Conakry, Guinée) ===
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
    {
      id: "lv3",
      designation: "Hyundai Porter",
      collection: "utility",
      famille: "Utilitaire Compact",
      marque: "Hyundai",
      edition: "2023",
      annee: 2023,
      capacite: "2 + 3 m³",
      performance: "130 ch",
      energie: "Diesel",
      tarifs: {
        quotidien: 750000,
        hebdomadaire: 4200000,
        mensuel: 14000000,
      },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Conakry",
      galerie: [
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
      ],
      equipements: [
        "Portes arrière battantes",
        "Sièges cuir",
        "ABS",
        "Espace de chargement sécurisé",
      ],
      caracteristiques: {
        moteur: "2.5L CRDi",
        charge: "1500 kg",
        longueur: "5.4 m",
      },
      presentation:
        "Fourgon moderne et spacieux, parfait pour les livraisons et services logistiques à Conakry.",
      inclusions: ["Kit de sécurité", "Assurance transport", "Maintenance préventive"],
    },
    {
      id: "lv4",
      designation: "Mercedes-Benz C-Class",
      collection: "premium",
      famille: "Berline Prestige",
      marque: "Mercedes-Benz",
      edition: "Executive 2023",
      annee: 2023,
      capacite: "5 personnes",
      performance: "258 ch",
      energie: "Essence",
      tarifs: {
        quotidien: 2500000,
        hebdomadaire: 14000000,
        mensuel: 45000000,
      },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Kaloum",
      galerie: [
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
      ],
      equipements: [
        "Sièges massants",
        "Toit panoramique",
        "Système audio Burmester",
        "Caméra 360°",
      ],
      caracteristiques: {
        moteur: "2.0L Turbo",
        vitesse: "250 km/h",
        acceleration: "6.4s",
      },
      presentation:
        "Berline haut de gamme pour dirigeants et événements officiels, alliant confort et standing.",
      inclusions: ["Chauffeur privé", "Nettoyage complet", "Service VIP"],
    },
    {
      id: "lv5",
      designation: "Nissan Patrol 4.0L",
      collection: "pickup",
      famille: "SUV Tout-Terrain",
      marque: "Nissan",
      edition: "XE 2022",
      annee: 2022,
      capacite: "7 places",
      performance: "280 ch",
      energie: "Essence",
      tarifs: {
        quotidien: 1200000,
        hebdomadaire: 6500000,
        mensuel: 22000000,
      },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Coyah",
      galerie: [
        "https://images.unsplash.com/photo-1566473965997-3de9c817e88b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
      ],
      equipements: [
        "4x4 Intelligent",
        "Suspension renforcée",
        "Sièges ventilés",
        "Écran tactile",
      ],
      caracteristiques: {
        moteur: "4.0L V6",
        volume: "5.6 m³",
        vitesse: "180 km/h",
      },
      presentation:
        "Le SUV robuste par excellence, conçu pour les terrains exigeants et les déplacements sécurisés.",
      inclusions: ["Protection anti-poussière", "GPS satellite", "Assistance 24/7"],
    },
    {
      id: "lv6",
      designation: "Isuzu D-Max",
      collection: "pickup",
      famille: "Pickup Pro",
      marque: "Isuzu",
      edition: "LS-U 2023",
      annee: 2023,
      capacite: "5 + bac",
      performance: "160 ch",
      energie: "Diesel",
      tarifs: {
        quotidien: 700000,
        hebdomadaire: 4000000,
        mensuel: 13500000,
      },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Kipé",
      galerie: [
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
      ],
      equipements: [
        "Moteur Diesel fiable",
        "Double cabine",
        "Freins à disque",
        "Roues alliage",
      ],
      caracteristiques: {
        moteur: "2.5L Turbo Diesel",
        charge: "1200 kg",
        longueur: "5.2 m",
      },
      presentation:
        "Pickup professionnel robuste, idéal pour les entreprises et les chantiers en Guinée.",
      inclusions: ["Contrôle technique", "Assurance flotte", "Entretien inclus"],
    },
    {
      id: "lv7",
      designation: "Camion Benne MAN TGM",
      collection: "btp",
      famille: "Camion de Chantier",
      marque: "MAN",
      edition: "TGM 24.330 2022",
      annee: 2022,
      capacite: "18 tonnes",
      performance: "330 ch",
      energie: "Diesel",
      tarifs: {
        quotidien: 2800000,
        hebdomadaire: 15000000,
        mensuel: 50000000,
      },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Coyah",
      galerie: [
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb&w=800",
      ],
      equipements: [
        "Benne hydraulique",
        "Cabine confort",
        "Frein moteur",
        "Système de pesée",
      ],
      caracteristiques: {
        moteur: "6.9L 6 cylindres",
        charge: "24 tonnes",
        vitesse: "85 km/h",
      },
      presentation:
        "Camion robuste pour chantiers lourds, équipé pour le transport de matériaux en zone difficile.",
      inclusions: ["Bâche de protection", "Assurance complète", "Formation conducteur"],
    },
  ],
};

// === COMPOSANT PRINCIPAL ===
const LuxuryFleetGallery = () => {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [recherche, setRecherche] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedTarification, setSelectedTarification] = useState("all");
  const [affichage, setAffichage] = useState("galerie");
  const [vehiculeSelectionne, setVehiculeSelectionne] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const luxuryVehicles = luxuryFleetData.luxuryVehicles;
  const collections = luxuryFleetData.collections;
  const destinations = luxuryFleetData.destinations;
  const tarification = luxuryFleetData.tarification;

  // === FILTRAGE OPTIMISÉ AVEC useMemo ===
  const vehiculesFiltres = useMemo(() => {
    return luxuryVehicles.filter((vehicule) => {
      if (selectedCollection !== "all" && vehicule.collection !== selectedCollection) {
        return false;
      }
      if (
        recherche &&
        !vehicule.designation.toLowerCase().includes(recherche.toLowerCase()) &&
        !vehicule.marque.toLowerCase().includes(recherche.toLowerCase()) &&
        !vehicule.famille.toLowerCase().includes(recherche.toLowerCase())
      ) {
        return false;
      }
      if (selectedDestination !== "all" && vehicule.destination !== selectedDestination) {
        return false;
      }
      if (selectedTarification !== "all") {
        const gamme = tarification.find((g) => g.id === selectedTarification);
        if (gamme) {
          const tarif = vehicule.tarifs.quotidien;
          if (tarif < gamme.min || tarif > gamme.max) {
            return false;
          }
        }
      }
      return true;
    });
  }, [luxuryVehicles, selectedCollection, recherche, selectedDestination, selectedTarification]);

  // === OUVERTURE / FERMETURE MODAL ===
  const ouvrirModal = (vehicule) => {
    setVehiculeSelectionne(vehicule);
    setModalVisible(true);
  };

  const fermerModal = () => {
    setVehiculeSelectionne(null);
    setModalVisible(false);
  };

  return (
    <div className="gtraf-luxury-container" id="nos-catalogue-premium">
      {/* === HERO SECTION ULTRA PREMIUM === */}
      <div className="gtraf-hero-content">
       
        <h1 className="gtraf-hero-title">Flotte de Luxe & Professionnelle</h1>
        <p className="gtraf-hero-subtitle">
          Découvrez notre sélection exclusive de véhicules haut de gamme disponibles à la location à Conakry et Kipé.
        </p>
     
      </div>

      {/* === FILTRES SOPHISTIQUÉS === */}
      <div className="gtraf-filter-sanctuary">
        <div className="gtraf-filter-header">
          <h2 className="gtraf-filter-title">Trouvez Votre Véhicule Idéal</h2>
          <p className="gtraf-filter-subtitle">Filtrez par collection, destination ou budget</p>
        </div>
        <div className="gtraf-filter-grid">
          {/* Recherche */}
          <div className="gtraf-search-luxury">
            <svg className="gtraf-search-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.81 16 11.45 16 10c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7c1.45 0 2.81-.59 3.72-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
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

          {/* Collection */}
          <div className="gtraf-select-luxury">
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="gtraf-select"
            >
              <option value="all">Toutes les Collections</option>
              {collections.map((col) => (
                <option key={col.id} value={col.id}>
                  {col.name}
                </option>
              ))}
            </select>
            <svg className="gtraf-select-arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>

          {/* Destination */}
          <div className="gtraf-select-luxury">
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="gtraf-select"
            >
              <option value="all">Toutes les Destinations</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
            <svg className="gtraf-select-arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>

          {/* Tarification */}
          <div className="gtraf-select-luxury">
            <select
              value={selectedTarification}
              onChange={(e) => setSelectedTarification(e.target.value)}
              className="gtraf-select"
            >
              <option value="all">Tous les Prix</option>
              {tarification.map((gamme) => (
                <option key={gamme.id} value={gamme.id}>
                  {gamme.name} ({gamme.min.toLocaleString()} - {gamme.max.toLocaleString()} GNF)
                </option>
              ))}
            </select>
            <svg className="gtraf-select-arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>

        {/* Résumé et Réinitialisation */}
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
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
            </svg>
            Réinitialiser
          </button>
        </div>
      </div>

      {/* === SHOWCASE DES COLLECTIONS === */}
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

      {/* === GALERIE DE VÉHICULES PREMIUM === */}
      <div className="gtraf-vehicles-gallery">
        {vehiculesFiltres.length === 0 ? (
          <div className="gtraf-no-results">
            <div className="gtraf-no-results-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 7h-4V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-2h4c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 5h4v2H9V5zm8 14h-6V9h6v10zm4-2h-2v-2h2v2zm0-4h-2v-2h2v2z" />
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
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Nous Contacter
            </button>
          </div>
        ) : (
          <div className={`gtraf-grid-layout ${affichage}`}>
            {vehiculesFiltres.map((vehicule) => (
              <div key={vehicule.id} className="gtraf-vehicle-card" onClick={() => ouvrirModal(vehicule)}>
                <div className="gtraf-card-image-container">
                  <img src={vehicule.galerie[0]} alt={vehicule.designation} className="gtraf-card-image" />
                  <div className="gtraf-image-overlay-gradient"></div>
                  <div className="gtraf-card-badges">
                    <span
                      className={`gtraf-status-badge ${
                        vehicule.statut === "disponible" ? "gtraf-available" : "gtraf-reserved"
                      }`}
                    >
                      {vehicule.statut === "disponible" ? "Disponible" : "Réservé"}
                    </span>
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
                      <strong>{vehicule.tarifs.quotidien.toLocaleString()} GNF</strong>
                      <span>Par jour</span>
                    </div>
                  </div>
                  <div className="gtraf-card-actions">
                    <button className="gtraf-card-btn gtraf-primary">
                      Réserver
                    </button>
                    <button className="gtraf-card-btn gtraf-secondary">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="gtraf-eye-icon">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* === MODAL PREMIUM === */}
      {modalVisible && vehiculeSelectionne && (
        <div className="gtraf-modal-overlay" onClick={fermerModal}>
          <div className="gtraf-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="gtraf-modal-close" onClick={fermerModal}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            <div className="gtraf-modal-hero">
              <img
                src={vehiculeSelectionne.galerie[0]}
                alt={vehiculeSelectionne.designation}
                className="gtraf-modal-image"
              />
              <div className="gtraf-modal-hero-overlay">
                <div className="gtraf-modal-badge">
                  <span
                    className={`gtraf-status-badge ${
                      vehiculeSelectionne.statut === "disponible" ? "gtraf-available" : "gtraf-reserved"
                    }`}
                  >
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
                {/* Tarification */}
                <div className="gtraf-modal-section gtraf-pricing-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,10H19V15H14M5,10H10V15H5M14,4H19V9H14M5,4H10V9H5M14,16H19V20H15V16H14M5,16H9V20H5V16M11,20V16H13V20H11M8,4V8H6V4H8M8,16V20H6V16H8M11,4V8H13V4H11Z" />
                    </svg>
                    <h3 className="gtraf-section-title">Tarification</h3>
                  </div>
                  <div className="gtraf-pricing-tiers">
                    <div className="gtraf-price-tier">
                      <strong>Quotidien</strong>
                      <span>{vehiculeSelectionne.tarifs.quotidien.toLocaleString()} {vehiculeSelectionne.monnaie}</span>
                    </div>
                    <div className="gtraf-price-tier">
                      <strong>Hebdomadaire</strong>
                      <span>{vehiculeSelectionne.tarifs.hebdomadaire.toLocaleString()} {vehiculeSelectionne.monnaie}</span>
                    </div>
                    <div className="gtraf-price-tier">
                      <strong>Mensuel</strong>
                      <span>{vehiculeSelectionne.tarifs.mensuel.toLocaleString()} {vehiculeSelectionne.monnaie}</span>
                    </div>
                  </div>
                </div>

                {/* Caractéristiques */}
                <div className="gtraf-modal-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.5 9.5c-1.03 0-2.06-.25-3-.75l-4.5 4.5v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H12l4.5-4.5c.5.95 1.5 1.5 2.5 1.5 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .22.03.43.07.64L15 7.5V10c0 .55.45 1 1 1s1-.45 1-1V8.5l1.93-1.93c.57.4 1.25.64 1.97.64.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
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

                {/* Équipements */}
                <div className="gtraf-modal-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                    </svg>
                    <h3 className="gtraf-section-title">Équipements de Luxe</h3>
                  </div>
                  <div className="gtraf-equipment-grid">
                    {vehiculeSelectionne.equipements.map((equip, idx) => (
                      <div key={idx} className="gtraf-equipment-item">
                        <svg className="gtraf-check-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <span>{equip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="gtraf-modal-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-2.18L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <h3 className="gtraf-section-title">Services Inclus</h3>
                  </div>
                  <div className="gtraf-services-grid">
                    {vehiculeSelectionne.inclusions.map((service, idx) => (
                      <div key={idx} className="gtraf-service-item">
                        <div className="gtraf-service-icon">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-2.18L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <span className="gtraf-service-text">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Présentation */}
                <div className="gtraf-modal-section gtraf-description-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                    </svg>
                    <h3 className="gtraf-section-title">Présentation</h3>
                  </div>
                  <p>{vehiculeSelectionne.presentation}</p>
                </div>

                {/* Infos Rapides */}
                <div className="gtraf-modal-section">
                  <div className="gtraf-section-header">
                    <svg className="gtraf-section-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
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
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="gtraf-modal-actions">
              <button
                className={`gtraf-action-btn gtraf-primary-action ${
                  vehiculeSelectionne.statut !== "disponible" ? "gtraf-disabled" : ""
                }`}
                disabled={vehiculeSelectionne.statut !== "disponible"}
              >
              
                Demander un Devis
              </button>
              <button className="gtraf-action-btn gtraf-tertiary-action">
                
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