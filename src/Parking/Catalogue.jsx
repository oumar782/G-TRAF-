import React, { useState, useMemo } from "react";
import "../Parkstyle/Catalogue.css";

// Données de la flotte premium
const eliteFleetData = {
  collections: [
    { id: "construction", name: "Collection Chantier d'Exception" },
    { id: "transport", name: "Collection Transport Prestige" },
    { id: "utility", name: "Collection Utilitaires Élégance" },
    { id: "premium", name: "Collection Signature" }
  ],
  destinations: ["Paris", "Lyon", "Marseille", "Bordeaux", "Lille"],
  tarification: [
    { id: "range1", name: "Accès Privilège", min: 500, max: 1000 },
    { id: "range3", name: "Prestige Absolu", min: 2001, max: 5000 },
    { id: "range4", name: "Collection Privée", min: 5001, max: 10000 }
  ],
  eliteVehicles: [
    {
      id: "ev1",
      designation: "Excavatrice Hydraulique JCB Prestige",
      collection: "construction",
      famille: "Machinerie d'Exception",
      marque: "JCB",
      edition: "220X Platinum",
      annee: 2023,
      capacite: "22 tonnes",
      performance: "110 kW",
      energie: "Diesel Haute Performance",
      tarifs: { quotidien: 950, hebdomadaire: 4800, mensuel: 16500 },
      monnaie: "EUR",
      statut: "disponible",
      destination: "Paris",
      galerie: ["https://images.unsplash.com/photo-1621891337563-62de44f8f421?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
      equipements: [
        "Cabine Executive climatisée",
        "Système de vision nocturne",
        "Stabilisateurs intelligents",
        "Pelle à portée étendue"
      ],
      caracteristiques: {
        moteur: "6.7L Turbo Diesel Exclusive",
        poids: "22000 kg",
        profondeur: "6.5 m"
      },
      presentation: "Excavatrice hydraulique de prestige pour chantiers d'exception, alliant puissance et élégance avec finitions premium.",
      inclusions: ["Manuel d'artisan", "Service Concierge", "Assistance VIP 24/7"]
    },
    {
      id: "ev2",
      designation: "Camion Bennes Volvo Excellence",
      collection: "transport",
      famille: "Transport d'Élite",
      marque: "Volvo",
      edition: "FMX Prestige",
      annee: 2022,
      capacite: "32 tonnes",
      performance: "340 kW",
      energie: "Diesel Haute Performance",
      tarifs: { quotidien: 880, hebdomadaire: 4500, mensuel: 15500 },
      monnaie: "EUR",
      statut: "disponible",
      destination: "Lyon",
      galerie: ["https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
      equipements: [
        "Système de basculement intelligent",
        "Cabine Prestige spacieuse",
        "Freins ABS Avancés",
        "Navigation Exclusive"
      ],
      caracteristiques: {
        moteur: "12.8L D13K Exclusive",
        charge: "32000 kg",
        empattement: "3800 mm"
      },
      presentation: "Camion bennes d'exception pour transport de matériaux haut de gamme avec finitions intérieures luxueuses.",
      inclusions: ["Contrôle Technique Prestige", "Assurance Tout Risque VIP", "Service Prioritaire"]
    },
    {
      id: "ev3",
      designation: "Fourgon Mercedes-Benz Élégance",
      collection: "utility",
      famille: "Utilitaire d'Exception",
      marque: "Mercedes-Benz",
      edition: "Sprinter Executive",
      annee: 2023,
      capacite: "4.5 m³",
      performance: "120 kW",
      energie: "Diesel Haute Performance",
      tarifs: { quotidien: 520, hebdomadaire: 2650, mensuel: 8200 },
      monnaie: "EUR",
      statut: "reserve",
      destination: "Marseille",
      galerie: ["https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
      equipements: [
        "Hayon élévateur automatique",
        "Climatisation Executive",
        "Système de sécurité renforcé",
        "Espace de chargement premium"
      ],
      caracteristiques: {
        moteur: "2.0L BlueTEC Elite",
        charge: "1200 kg",
        longueur: "5.3 m"
      },
      presentation: "Fourgon utilitaire de prestige alliant fonctionnalité et élégance, avec intérieur cuir et finitions métalliques.",
      inclusions: ["Pack Sécurité Exclusive", "Assurance Premium", "Entretien Concierge"]
    },
    {
      id: "ev4",
      designation: "Range Rover Vogue Autobiography",
      collection: "premium",
      famille: "SUV Signature",
      marque: "Land Rover",
      edition: "Range Rover Ultimate",
      annee: 2024,
      capacite: "5 personnes",
      performance: "250 kW",
      energie: "Essence Haute Performance",
      tarifs: { quotidien: 1450, hebdomadaire: 7500, mensuel: 28500 },
      monnaie: "EUR",
      statut: "disponible",
      destination: "Bordeaux",
      galerie: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
      equipements: [
        "Intérieur cuir Nappa personnalisable",
        "Système audio Sur Mesure",
        "Toit panoramique électrochrome",
        "Conduite Autonome Niveau 3"
      ],
      caracteristiques: {
        moteur: "3.0L Turbo Exclusive",
        acceleration: "5.8s 0-100km/h",
        consommation: "9.2L/100km"
      },
      presentation: "SUV ultime offrant un sanctuaire de calme et de raffinement, avec technologies de pointe et artisanat d'exception.",
      inclusions: ["Service Sur Mesure", "Livraison Blanc-Gants", "Personnalisation Exclusive"]
    },
    {
      id: "ev5",
      designation: "Dumper Caterpillar Édition Noire",
      collection: "construction",
      famille: "Machinerie d'Exception",
      marque: "Caterpillar",
      edition: "740 Limited",
      annee: 2023,
      capacite: "40 tonnes",
      performance: "390 kW",
      energie: "Diesel Haute Performance",
      tarifs: { quotidien: 1420, hebdomadaire: 7200, mensuel: 27800 },
      monnaie: "EUR",
      statut: "disponible",
      destination: "Lille",
      galerie: ["https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"],
      equipements: [
        "Suspension pneumatique adaptive",
        "Cabine Silentium insonorisée",
        "Système de pesage intelligent",
        "Éclairage LED Signature"
      ],
      caracteristiques: {
        moteur: "C15 ACERT Exclusive",
        volume: "24.5 m³",
        vitesse: "56 km/h"
      },
      presentation: "Dumper articulé d'exception avec finition Édition Noire exclusive et technologies de pointe pour chantiers prestigieux.",
      inclusions: ["Formation Opérateur VIP", "Maintenance Exclusive", "Assistance Prioritaire"]
    },
    {
      id: "ev6",
      designation: "Camion Plateau MAN Black Edition",
      collection: "transport",
      famille: "Transport d'Élite",
      marque: "MAN",
      edition: "TGX Limited",
      annee: 2023,
      capacite: "25 tonnes",
      performance: "310 kW",
      energie: "Diesel Haute Performance",
      tarifs: { quotidien: 860, hebdomadaire: 4400, mensuel: 15000 },
      monnaie: "EUR",
      statut: "disponible",
      destination: "Paris",
      galerie: ["https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
      equipements: [
        "Plateau extensible automatique",
        "Treuil électrique haute capacité",
        "Éclairage LED Avancé",
        "Bâches sur mesure"
      ],
      caracteristiques: {
        moteur: "D26 Exclusive",
        charge: "25000 kg",
        longueur: "7.5 m"
      },
      presentation: "Camion plateau d'exception avec finition Black Edition exclusive pour transport d'équipements haut de gamme.",
      inclusions: ["Protections Sur Mesure", "Kit Fixation Premium", "Assurance Transport Exclusive"]
    }
  ]
};

const EliteFleetGallery = () => {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [recherche, setRecherche] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedTarification, setSelectedTarification] = useState("all");
  const [affichage, setAffichage] = useState('galerie');
  const [vehiculeSelectionne, setVehiculeSelectionne] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const eliteVehicles = eliteFleetData.eliteVehicles;
  const collections = eliteFleetData.collections;
  const destinations = eliteFleetData.destinations;
  const tarification = eliteFleetData.tarification;

  const vehiculesFiltres = useMemo(() => {
    return eliteVehicles.filter((vehicule) => {
      if (selectedCollection !== "all" && vehicule.collection !== selectedCollection) {
        return false;
      }

      if (recherche && !vehicule.designation.toLowerCase().includes(recherche.toLowerCase()) &&
          !vehicule.marque.toLowerCase().includes(recherche.toLowerCase()) &&
          !vehicule.famille.toLowerCase().includes(recherche.toLowerCase())) {
        return false;
      }

      if (selectedDestination !== "all" && vehicule.destination !== selectedDestination) {
        return false;
      }

      if (selectedTarification !== "all") {
        const gammeTarif = tarification.find(gamme => gamme.id === selectedTarification);
        if (gammeTarif) {
          const tarifQuotidien = vehicule.tarifs.quotidien;
          if (tarifQuotidien < gammeTarif.min || tarifQuotidien > gammeTarif.max) {
            return false;
          }
        }
      }

      return true;
    });
  }, [eliteVehicles, selectedCollection, recherche, selectedDestination, selectedTarification]);

  const ouvrirModal = (vehicule) => {
    setVehiculeSelectionne(vehicule);
    setModalVisible(true);
  };

  const fermerModal = () => {
    setVehiculeSelectionne(null);
    setModalVisible(false);
  };

  return (
    <div className="elite-fleet-container">
      {/* En-tête Prestige */}
      <header className="elite-header">
        <div className="elite-badge">
          <svg className="elite-icon" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z"/>
          </svg>
          Collection Exclusive
        </div>
        <h1 className="elite-title">
          Galerie <span className="elite-gradient">d'Automobiles d'Exception</span>
        </h1>
        <p className="elite-description">
          Découvrez notre sélection rigoureuse de véhicules haut de gamme, chacun méticuleusement entretenu pour répondre aux standards les plus exigeants.
        </p>
      </header>

      {/* Section Filtres */}
      <div className="elite-filter-section">
        <div className="elite-filter-grid">
          {/* Barre de Recherche */}
          <div className="elite-search-container">
            <svg className="elite-search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input
              type="text"
              placeholder="Rechercher un modèle exclusif..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="elite-search-input"
            />
          </div>

          {/* Filtre Destination */}
          <div className="elite-select-wrapper">
            <select 
              value={selectedDestination} 
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="elite-select"
            >
              <option value="all">Toutes nos destinations</option>
              {destinations.map((destination) => (
                <option key={destination} value={destination}>{destination}</option>
              ))}
            </select>
            <div className="elite-select-arrow"></div>
          </div>

          {/* Filtre Tarification */}
          <div className="elite-select-wrapper">
            <select 
              value={selectedTarification} 
              onChange={(e) => setSelectedTarification(e.target.value)}
              className="elite-select"
            >
              <option value="all">Toutes nos gammes</option>
              {tarification.map((gamme) => (
                <option key={gamme.id} value={gamme.id}>
                  {gamme.name} ({gamme.min}€ - {gamme.max}€)
                </option>
              ))}
            </select>
            <div className="elite-select-arrow"></div>
          </div>

          {/* Boutons Affichage */}
          <div className="elite-view-toggle">
            <button
              className={`elite-view-button ${affichage === 'galerie' ? 'active' : ''}`}
              onClick={() => setAffichage('galerie')}
              aria-label="Vue galerie"
            >
              <svg className="elite-view-icon" viewBox="0 0 24 24">
                <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
              </svg>
            </button>
            <button
              className={`elite-view-button ${affichage === 'liste' ? 'active' : ''}`}
              onClick={() => setAffichage('liste')}
              aria-label="Vue liste"
            >
              <svg className="elite-view-icon" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Résultats */}
        <div className="elite-filter-footer">
          <span className="elite-results-count">
            {vehiculesFiltres.length} modèle{vehiculesFiltres.length > 1 ? 's' : ''} correspondant{vehiculesFiltres.length > 1 ? 's' : ''} à vos critères
          </span>
          <button
            className="elite-reset-button"
            onClick={() => {
              setRecherche("");
              setSelectedDestination("all");
              setSelectedTarification("all");
              setSelectedCollection("all");
            }}
          >
            <svg className="elite-reset-icon" viewBox="0 0 24 24">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
            Réinitialiser
          </button>
        </div>
      </div>

      {/* Onglets Collections */}
      <div className="elite-collections-tabs">
        <div className="elite-tabs-container">
          <button
            className={`elite-tab-button ${selectedCollection === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCollection('all')}
          >
            <svg className="elite-tab-icon" viewBox="0 0 24 24">
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
            </svg>
            Toute la Collection
          </button>
          {collections.map((collection) => (
            <button
              key={collection.id}
              className={`elite-tab-button ${selectedCollection === collection.id ? 'active' : ''}`}
              onClick={() => setSelectedCollection(collection.id)}
            >
              <svg className="elite-tab-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
              {collection.name}
            </button>
          ))}
        </div>
      </div>

      {/* Galerie de Véhicules */}
      <div className={`elite-vehicles-display ${affichage === 'galerie' ? 'elite-grid-view' : 'elite-list-view'}`}>
        {vehiculesFiltres.length > 0 ? (
          vehiculesFiltres.map((vehicule) => (
            <EliteVehicleCard 
              key={vehicule.id} 
              vehicule={vehicule} 
              affichage={affichage}
              onClick={() => ouvrirModal(vehicule)}
            />
          ))
        ) : (
          <div className="elite-no-results">
            <div className="elite-no-results-icon">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
              </svg>
            </div>
            <h3 className="elite-no-results-title">Aucun véhicule ne correspond à votre recherche</h3>
            <p className="elite-no-results-message">
              Nos conseillers sont à votre disposition pour une recherche personnalisée.
            </p>
            <button 
              className="elite-no-results-button"
              onClick={() => {
                setRecherche("");
                setSelectedDestination("all");
                setSelectedTarification("all");
                setSelectedCollection("all");
              }}
            >
              <svg className="elite-refresh-icon" viewBox="0 0 24 24">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
              Voir toute la collection
            </button>
          </div>
        )}
      </div>

  

      {/* Modal Véhicule */}
      {modalVisible && vehiculeSelectionne && (
        <div className="elite-modal-overlay">
          <div className="elite-modal">
            <button className="elite-modal-close" onClick={fermerModal}>
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className="elite-modal-header">
              <h2 className="elite-modal-title">{vehiculeSelectionne.designation}</h2>
              <div className="elite-modal-subtitle">{vehiculeSelectionne.marque} • {vehiculeSelectionne.edition} • {vehiculeSelectionne.annee}</div>
            </div>
            
            <div className="elite-modal-content">
              <div className="elite-modal-gallery">
                <div className="elite-modal-main-image">
                  <img 
                    src={vehiculeSelectionne.galerie[0]} 
                    alt={vehiculeSelectionne.designation} 
                  />
                </div>
                <div className="elite-modal-thumbnails">
                  {vehiculeSelectionne.galerie.map((image, index) => (
                    <div key={index} className="elite-modal-thumbnail">
                      <img src={image} alt={`Vue ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="elite-modal-details">
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                    </svg>
                    Tarification Exclusive
                  </h3>
                  <div className="elite-modal-pricing">
                    <div className="elite-price-tier">
                      <div className="elite-price-label">Forfait Journalier</div>
                      <div className="elite-price-amount">{vehiculeSelectionne.tarifs.quotidien}€</div>
                    </div>
                    <div className="elite-price-tier">
                      <div className="elite-price-label">Forfait Hebdomadaire</div>
                      <div className="elite-price-amount">{vehiculeSelectionne.tarifs.hebdomadaire}€</div>
                      <div className="elite-price-savings">Économisez {(vehiculeSelectionne.tarifs.quotidien * 7 - vehiculeSelectionne.tarifs.hebdomadaire).toLocaleString()}€</div>
                    </div>
                    <div className="elite-price-tier">
                      <div className="elite-price-label">Forfait Mensuel</div>
                      <div className="elite-price-amount">{vehiculeSelectionne.tarifs.mensuel}€</div>
                      <div className="elite-price-savings">Économisez {(vehiculeSelectionne.tarifs.quotidien * 30 - vehiculeSelectionne.tarifs.mensuel).toLocaleString()}€</div>
                    </div>
                  </div>
                </div>
                
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                    </svg>
                    Présentation
                  </h3>
                  <p className="elite-modal-description">{vehiculeSelectionne.presentation}</p>
                </div>
                
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                    </svg>
                    Caractéristiques Techniques
                  </h3>
                  <div className="elite-modal-specs">
                    <div className="elite-spec-item">
                      <div className="elite-spec-label">Moteur</div>
                      <div className="elite-spec-value">{vehiculeSelectionne.caracteristiques.moteur}</div>
                    </div>
                    <div className="elite-spec-item">
                      <div className="elite-spec-label">Performance</div>
                      <div className="elite-spec-value">{vehiculeSelectionne.performance}</div>
                    </div>
                    <div className="elite-spec-item">
                      <div className="elite-spec-label">Capacité</div>
                      <div className="elite-spec-value">{vehiculeSelectionne.capacite}</div>
                    </div>
                    <div className="elite-spec-item">
                      <div className="elite-spec-label">Énergie</div>
                      <div className="elite-spec-value">{vehiculeSelectionne.energie}</div>
                    </div>
                  </div>
                </div>
                
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                    </svg>
                    Équipements Exclusifs
                  </h3>
                  <div className="elite-modal-features">
                    {vehiculeSelectionne.equipements.map((equipement, index) => (
                      <div key={index} className="elite-feature-item">
                        <svg className="elite-feature-icon" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {equipement}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                    </svg>
                    Services Inclus
                  </h3>
                  <div className="elite-modal-inclusions">
                    {vehiculeSelectionne.inclusions.map((inclusion, index) => (
                      <div key={index} className="elite-inclusion-item">
                        <svg className="elite-inclusion-icon" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        {inclusion}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="elite-modal-actions">
                  <button 
                    className={`elite-action-button elite-primary ${vehiculeSelectionne.statut !== 'disponible' ? 'elite-disabled' : ''}`}
                    disabled={vehiculeSelectionne.statut !== 'disponible'}
                  >
                    <svg className="elite-action-icon" viewBox="0 0 24 24">
                      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
                    </svg>
                    Réserver ce modèle
                  </button>
                  <button className="elite-action-button elite-secondary">
                    <svg className="elite-action-icon" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    Contacter un conseiller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EliteVehicleCard = ({ vehicule, affichage, onClick }) => {
  const estDisponible = vehicule.statut === 'disponible';

  if (affichage === 'liste') {
    return (
      <div className="elite-vehicle-card elite-list-card" onClick={onClick}>
        <div className="elite-card-content">
          <div className="elite-list-card-layout">
            <div className="elite-list-card-image">
              <img
                src={vehicule.galerie[0]}
                alt={vehicule.designation}
                className="elite-vehicle-image"
              />
              <div className="elite-availability-badge">
                <span className={`elite-badge ${estDisponible ? 'elite-available' : 'elite-unavailable'}`}>
                  {estDisponible ? "Disponible" : "Réservé"}
                </span>
              </div>
            </div>

            <div className="elite-list-card-details">
              <div className="elite-list-card-header">
                <div>
                  <h3 className="elite-vehicle-designation">{vehicule.designation}</h3>
                  <p className="elite-vehicle-meta">{vehicule.marque} • {vehicule.edition} • {vehicule.annee}</p>
                </div>
                <div className="elite-vehicle-pricing">
                  <div className="elite-daily-price">{vehicule.tarifs.quotidien}€</div>
                  <div className="elite-price-label">par jour</div>
                </div>
              </div>

              <p className="elite-vehicle-description">{vehicule.presentation}</p>

              <div className="elite-vehicle-stats">
                <div className="elite-stat-item">
                  <svg className="elite-stat-icon" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                    <circle cx="7.5" cy="14.5" r="1.5"/>
                    <circle cx="16.5" cy="14.5" r="1.5"/>
                  </svg>
                  <div className="elite-stat-label">Performance</div>
                  <div className="elite-stat-value">{vehicule.performance}</div>
                </div>
                <div className="elite-stat-item">
                  <svg className="elite-stat-icon" viewBox="0 0 24 24">
                    <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2h-3V7h3v3zM8 7h3v3H8V7zm-2 5h12v3H6v-3z"/>
                  </svg>
                  <div className="elite-stat-label">Capacité</div>
                  <div className="elite-stat-value">{vehicule.capacite}</div>
                </div>
                <div className="elite-stat-item">
                  <svg className="elite-stat-icon" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div className="elite-stat-label">Destination</div>
                  <div className="elite-stat-value">{vehicule.destination}</div>
                </div>
                <div className="elite-stat-item">
                  <svg className="elite-stat-icon" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <div className="elite-stat-label">Évaluation</div>
                  <div className="elite-stat-value">4.9/5</div>
                </div>
              </div>

              <div className="elite-card-actions">
                <button 
                  className={`elite-action-button ${estDisponible ? 'elite-primary' : 'elite-secondary'}`}
                  disabled={!estDisponible}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {estDisponible ? "Réserver" : "Indisponible"}
                </button>
                <button className="elite-action-button elite-secondary">
                  <svg className="elite-action-icon" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="elite-vehicle-card elite-grid-card" onClick={onClick}>
      <div className="elite-card-image-container">
        <img
          src={vehicule.galerie[0]}
          alt={vehicule.designation}
          className="elite-vehicle-image"
        />
        <div className="elite-image-overlay"></div>
        
        <div className="elite-card-badge">
          <span className={`elite-badge ${estDisponible ? 'elite-available' : 'elite-unavailable'}`}>
            {estDisponible ? "Disponible" : "Réservé"}
          </span>
        </div>

        <div className="elite-quick-action">
          <button className="elite-quick-action-button">
            <svg className="elite-quick-action-icon" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="elite-card-details">
        <div className="elite-card-header">
          <h3 className="elite-vehicle-designation">{vehicule.designation}</h3>
          <div className="elite-daily-price">{vehicule.tarifs.quotidien}€</div>
        </div>

        <p className="elite-vehicle-meta">{vehicule.marque} • {vehicule.edition} • {vehicule.annee}</p>

        <div className="elite-vehicle-features">
          {vehicule.equipements.slice(0, 3).map((equipement, index) => (
            <div key={index} className="elite-feature-item">
              <svg className="elite-feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>{equipement}</span>
            </div>
          ))}
          {vehicule.equipements.length > 3 && (
            <div className="elite-extra-features">
              +{vehicule.equipements.length - 3} équipements exclusifs
            </div>
          )}
        </div>

        <div className="elite-vehicle-specs">
          <div className="elite-spec-item">
            <svg className="elite-spec-icon" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
              <circle cx="7.5" cy="14.5" r="1.5"/>
              <circle cx="16.5" cy="14.5" r="1.5"/>
            </svg>
            <div className="elite-spec-label">Performance</div>
            <div className="elite-spec-value">{vehicule.performance}</div>
          </div>
          <div className="elite-spec-item">
            <svg className="elite-spec-icon" viewBox="0 0 24 24">
              <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2h-3V7h3v3zM8 7h3v3H8V7zm-2 5h12v3H6v-3z"/>
            </svg>
            <div className="elite-spec-label">Capacité</div>
            <div className="elite-spec-value">{vehicule.capacite}</div>
          </div>
          <div className="elite-spec-item">
            <svg className="elite-spec-icon" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
            </svg>
            <div className="elite-spec-label">Année</div>
            <div className="elite-spec-value">{vehicule.annee}</div>
          </div>
        </div>

        <div className="elite-vehicle-footer">
          <div className="elite-location-info">
            <svg className="elite-location-icon" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{vehicule.destination}</span>
          </div>
          <div className="elite-rating-info">
            <svg className="elite-rating-icon" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span>4.9/5</span>
          </div>
        </div>

        <div className="elite-card-actions">
          <button 
            className={`elite-action-button ${estDisponible ? 'elite-primary' : 'elite-secondary'}`}
            disabled={!estDisponible}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {estDisponible ? "Réserver" : "Indisponible"}
          </button>
          <button className="elite-action-button elite-secondary elite-icon-only">
            <svg className="elite-action-icon" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EliteFleetGallery;