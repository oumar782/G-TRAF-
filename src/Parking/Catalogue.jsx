import React, { useState, useMemo } from "react";
import "../Parkstyle/Catalogue.css";

// === DONNÉES DU PARC AUTOMOBILE G-TRAF+ (Kipé, Conakry, Guinée) ===
const eliteFleetData = {
  collections: [
    { id: "sedan", name: "Série Élégance (Berlines)" },
    { id: "pickup", name: "Gamme Tout-Terrain" },
    { id: "utility", name: "Utilitaires Pro" },
    { id: "premium", name: "Collection Prestige" },
    { id: "btp", name: "Flotte BTP" } // Nouvelle collection
  ],
  destinations: ["Conakry", "Kipé", "Matam", "Kaloum", "Coyah"],
  tarification: [
    { id: "range1", name: "Standard", min: 500000, max: 999999 },
    { id: "range2", name: "Tout-Terrain", min: 1000000, max: 1999999 },
    { id: "range3", name: "Prestige", min: 2000000, max: 5000000 },
    { id: "range4", name: "BTP", min: 2500000, max: 6000000 } // Nouvelle gamme
  ],
  eliteVehicles: [
    // === NOUVELLES VOITURES ===
    {
      id: "ev1",
      designation: "Toyota Corolla 1.8L",
      collection: "sedan",
      famille: "Berline Fiable",
      marque: "Toyota",
      edition: "GLi 2023",
      annee: 2023,
      capacite: "5 personnes",
      performance: "105 ch",
      energie: "Essence",
      tarifs: { quotidien: 600000, hebdomadaire: 3400000, mensuel: 11000000 },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Conakry",
      galerie: [
        "https://images.unsplash.com/photo-9ZvJkQzrXpE?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb"
      ],
      equipements: [
        "Climatisation",
        "Bluetooth",
        "Caméra de recul",
        "Vitres électriques"
      ],
      caracteristiques: {
        moteur: "1.8L 4 cylindres",
        poids: "1320 kg",
        consommation: "6.6L/100km"
      },
      presentation: "Version 2023 du best-seller, avec équipements modernisés pour un confort accru.",
      inclusions: ["Assurance RC", "Livraison", "Assistance 24h"]
    },
    {
      id: "ev2",
      designation: "Toyota Hilux 2.8L Diesel",
      collection: "pickup",
      famille: "Tout-Terrain",
      marque: "Toyota",
      edition: "GR-S 2023",
      annee: 2023,
      capacite: "5 + bac",
      performance: "204 ch",
      energie: "Diesel",
      tarifs: { quotidien: 1100000, hebdomadaire: 6000000, mensuel: 20000000 },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Kipé",
      galerie: [
        " https://images.unsplash.com/photo-8uLqfKj6V7s?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb"
      ],
      equipements: [
        "4x4 automatique",
        "Suspension renforcée",
        "Toit ouvrant",
        "Système multimédia"
      ],
      caracteristiques: {
        moteur: "2.8L Turbo Diesel",
        charge: "1200 kg",
        empattement: "3.08 m"
      },
      presentation: "Hilux puissant et luxueux, adapté aux terrains exigeants et au transport de personnel.",
      inclusions: ["Chauffeur", "Assurance complète", "Entretien"]
    },
    {
      id: "ev3",
      designation: "Hyundai H-100 Fourgon",
      collection: "utility",
      famille: "Utilitaire Léger",
      marque: "Hyundai",
      edition: "Cargo 2023",
      annee: 2023,
      capacite: "3.5 m³",
      performance: "120 ch",
      energie: "Diesel",
      tarifs: { quotidien: 650000, hebdomadaire: 3700000, mensuel: 12000000 },
      monnaie: "GNF",
      statut: "reserve",
      destination: "Matam",
      galerie: ["/images/vehicles/hyundai-h100.jpg"], // Garder l'image locale ici
      equipements: [
        "Portes arrière battantes",
        "Sièges cuir",
        "ABS",
        "Espace de chargement sécurisé"
      ],
      caracteristiques: {
        moteur: "2.5L CRDi",
        charge: "1500 kg",
        longueur: "5.4 m"
      },
      presentation: "Fourgon moderne et spacieux, parfait pour les livraisons et services logistiques à Conakry.",
      inclusions: ["Kit de sécurité", "Assurance transport", "Maintenance préventive"]
    },
    {
      id: "ev4",
      designation: "Mercedes-Benz C-Class",
      collection: "premium",
      famille: "Berline Prestige",
      marque: "Mercedes-Benz",
      edition: "C200 Executive 2023",
      annee: 2023,
      capacite: "5 personnes",
      performance: "190 ch",
      energie: "Essence",
      tarifs: { quotidien: 1800000, hebdomadaire: 10000000, mensuel: 35000000 },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Kaloum",
      galerie: [
        " https://images.unsplash.com/photo-5wDdYmRiWxI?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb"
      ],
      equipements: [
        "Cuir Nappa",
        "Toit panoramique",
        "Système GPS",
        "Caméra de recul"
      ],
      caracteristiques: {
        moteur: "2.0L Turbo",
        acceleration: "7.8s 0-100km/h",
        consommation: "7.5L/100km"
      },
      presentation: "Berline haut de gamme pour dirigeants et événements officiels, alliant confort et standing.",
      inclusions: ["Chauffeur privé", "Nettoyage complet", "Service VIP"]
    },
    {
      id: "ev5",
      designation: "Nissan Patrol 4.0L",
      collection: "pickup",
      famille: "SUV Tout-Terrain",
      marque: "Nissan",
      edition: "XE 2022",
      annee: 2022,
      capacite: "7 places",
      performance: "280 ch",
      energie: "Essence",
      tarifs: { quotidien: 1200000, hebdomadaire: 6500000, mensuel: 22000000 },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Coyah",
      galerie: ["/images/vehicles/nissan-patrol.jpg"], // Garder l'image locale ici
      equipements: [
        "4x4 Intelligent",
        "Suspension renforcée",
        "Sièges ventilés",
        "Écran tactile"
      ],
      caracteristiques: {
        moteur: "4.0L V6",
        volume: "5.6 m³",
        vitesse: "180 km/h"
      },
      presentation: "Le SUV robuste par excellence, conçu pour les terrains exigeants et les déplacements sécurisés.",
      inclusions: ["Protection anti-poussière", "GPS satellite", "Assistance 24/7"]
    },
    {
      id: "ev6",
      designation: "Isuzu D-Max",
      collection: "pickup",
      famille: "Pickup Pro",
      marque: "Isuzu",
      edition: "LS-U 2023",
      annee: 2023,
      capacite: "5 + bac",
      performance: "160 ch",
      energie: "Diesel",
      tarifs: { quotidien: 700000, hebdomadaire: 4000000, mensuel: 13500000 },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Kipé",
      galerie: ["/images/vehicles/isuzu-dmax.jpg"], // Garder l'image locale ici
      equipements: [
        "Moteur Diesel fiable",
        "Double cabine",
        "Freins à disque",
        "Roues alliage"
      ],
      caracteristiques: {
        moteur: "2.5L Turbo Diesel",
        charge: "1200 kg",
        longueur: "5.2 m"
      },
      presentation: "Pickup professionnel robuste, idéal pour les entreprises et les chantiers en Guinée.",
      inclusions: ["Bâche de protection", "Assurance complète", "Formation conducteur"]
    },

    // === CAMIONS BTP ===
    {
      id: "ev7",
      designation: "Camion Benne MAN TGM",
      collection: "btp",
      famille: "Camion de Chantier",
      marque: "MAN",
      edition: "TGM 24.330 2022",
      annee: 2022,
      capacite: "18 tonnes",
      performance: "330 ch",
      energie: "Diesel",
      tarifs: { quotidien: 2800000, hebdomadaire: 15000000, mensuel: 50000000 },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Coyah",
      galerie: [
        " https://images.unsplash.com/photo-9aBnOgFtHcA?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb"
      ],
      equipements: [
        "Benne hydraulique",
        "Cabine confort",
        "ABS",
        "Système de pesage"
      ],
      caracteristiques: {
        moteur: "6.9L 6 cylindres",
        charge: "18 tonnes",
        longueur: "7.2 m"
      },
      presentation: "Camion robuste pour le transport de matériaux de construction sur chantier.",
      inclusions: ["Chauffeur qualifié", "Assurance chantier", "Entretien"]
    },
    {
      id: "ev8",
      designation: "Camion Grue Liebherr",
      collection: "btp",
      famille: "Grue Mobile",
      marque: "Liebherr",
      edition: "LTM 1100 2021",
      annee: 2021,
      capacite: "100 tonnes",
      performance: "440 ch",
      energie: "Diesel",
      tarifs: { quotidien: 5000000, hebdomadaire: 25000000, mensuel: 80000000 },
      monnaie: "GNF",
      statut: "disponible",
      destination: "Matam",
      galerie: [
        " https://images.unsplash.com/photo-9aBnOgFtHcA?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=srgb"
      ],
      equipements: [
        "Grue télescopique 100t",
        "Stabilisateurs hydrauliques",
        "Cabine climatisée",
        "Commande numérique"
      ],
      caracteristiques: {
        moteur: "12.0L Diesel",
        portée: "60 m",
        poids: "45 tonnes"
      },
      presentation: "Grue mobile haute performance pour levage lourd sur chantiers industriels.",
      inclusions: ["Opérateur certifié", "Permis de circulation", "Assurance spéciale"]
    }
  ]
};

// === COMPOSANT PRINCIPAL ===
const EliteFleetGallery = () => {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [recherche, setRecherche] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedTarification, setSelectedTarification] = useState("all");
  const [affichage, setAffichage] = useState("galerie");
  const [vehiculeSelectionne, setVehiculeSelectionne] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const eliteVehicles = eliteFleetData.eliteVehicles;
  const collections = eliteFleetData.collections;
  const destinations = eliteFleetData.destinations;
  const tarification = eliteFleetData.tarification;

  // === FILTRAGE OPTIMISÉ AVEC useMemo ===
  const vehiculesFiltres = useMemo(() => {
    return eliteVehicles.filter((vehicule) => {
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
  }, [eliteVehicles, selectedCollection, recherche, selectedDestination, selectedTarification]);

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
    <div className="elite-fleet-container" id="Nos-Catalogue">
      {/* === EN-TÊTE DU PARC === */}
      <header className="elite-header">
        <div className="elite-badge">
          <svg className="elite-icon" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          G-TRAF+ | Kipé, Conakry
        </div>
        <h1 className="elite-title">
          Parc Automobile <span className="elite-gradient">Haut de Gamme</span>
        </h1>
        <p className="elite-description">
          Location et vente de voitures d'occasion certifiées et sorties d'usine. <br />
          À partir de <strong>500.000 GNF/jour</strong> – Pickups à 700.000 GNF – Camions sur demande.
        </p>
      </header>

      {/* === FILTRES === */}
      <div className="elite-filter-section">
        <div className="elite-filter-grid">
          {/* Recherche */}
          <div className="elite-search-container">
            <svg className="elite-search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un modèle (ex: Hilux, Corolla)..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="elite-search-input"
            />
          </div>

          {/* Destination */}
          <div className="elite-select-wrapper">
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="elite-select"
            >
              <option value="all">Tous les quartiers</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
            <div className="elite-select-arrow"></div>
          </div>

          {/* Gamme de prix */}
          <div className="elite-select-wrapper">
            <select
              value={selectedTarification}
              onChange={(e) => setSelectedTarification(e.target.value)}
              className="elite-select"
            >
              <option value="all">Toutes les gammes</option>
              {tarification.map((gamme) => (
                <option key={gamme.id} value={gamme.id}>
                  {gamme.name} ({gamme.min.toLocaleString()} - {gamme.max.toLocaleString()} GNF)
                </option>
              ))}
            </select>
            <div className="elite-select-arrow"></div>
          </div>

          {/* Vue grille / liste */}
          <div className="elite-view-toggle">
            <button
              className={`elite-view-button ${affichage === "galerie" ? "active" : ""}`}
              onClick={() => setAffichage("galerie")}
              aria-label="Vue galerie"
            >
              <svg className="elite-view-icon" viewBox="0 0 24 24">
                <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
              </svg>
            </button>
            <button
              className={`elite-view-button ${affichage === "liste" ? "active" : ""}`}
              onClick={() => setAffichage("liste")}
              aria-label="Vue liste"
            >
              <svg className="elite-view-icon" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Compteur et reset */}
        <div className="elite-filter-footer">
          <span className="elite-results-count">
            {vehiculesFiltres.length} véhicule{vehiculesFiltres.length > 1 ? "s" : ""} disponible{vehiculesFiltres.length > 1 ? "s" : ""}
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
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
            </svg>
            Réinitialiser
          </button>
        </div>
      </div>

      {/* === ONGLETS COLLECTIONS === */}
      <div className="elite-collections-tabs">
        <div className="elite-tabs-container">
          <button
            className={`elite-tab-button ${selectedCollection === "all" ? "active" : ""}`}
            onClick={() => setSelectedCollection("all")}
          >
            <svg className="elite-tab-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
            </svg>
            Toute la Collection
          </button>
          {collections.map((collection) => (
            <button
              key={collection.id}
              className={`elite-tab-button ${selectedCollection === collection.id ? "active" : ""}`}
              onClick={() => setSelectedCollection(collection.id)}
            >
              <svg className="elite-tab-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
              </svg>
              {collection.name}
            </button>
          ))}
        </div>
      </div>

      {/* === AFFICHAGE DES VÉHICULES === */}
      <div className={`elite-vehicles-display ${affichage === "galerie" ? "elite-grid-view" : "elite-list-view"}`}>
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
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
              </svg>
            </div>
            <h3 className="elite-no-results-title">Aucun véhicule trouvé</h3>
            <p className="elite-no-results-message">
              Contactez-nous pour une recherche personnalisée à Kipé.
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
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
              Voir tous les véhicules
            </button>
          </div>
        )}
      </div>

      {/* === MODAL DÉTAIL VÉHICULE === */}
      {modalVisible && vehiculeSelectionne && (
        <div className="elite-modal-overlay">
          <div className="elite-modal">
            <button className="elite-modal-close" onClick={fermerModal}>
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            <div className="elite-modal-header">
              <h2 className="elite-modal-title">{vehiculeSelectionne.designation}</h2>
              <div className="elite-modal-subtitle">
                {vehiculeSelectionne.marque} • {vehiculeSelectionne.edition} • {vehiculeSelectionne.annee}
              </div>
            </div>

            <div className="elite-modal-content">
              <div className="elite-modal-gallery">
                <div className="elite-modal-main-image">
                  <img src={vehiculeSelectionne.galerie[0]} alt={vehiculeSelectionne.designation} />
                </div>
              </div>

              <div className="elite-modal-details">
                {/* Tarification */}
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
                    Tarification (GNF)
                  </h3>
                  <div className="elite-modal-pricing">
                    <div className="elite-price-tier">
                      <div className="elite-price-label">Journalier</div>
                      <div className="elite-price-amount">{vehiculeSelectionne.tarifs.quotidien.toLocaleString()} GNF</div>
                    </div>
                    <div className="elite-price-tier">
                      <div className="elite-price-label">Hebdomadaire</div>
                      <div className="elite-price-amount">{vehiculeSelectionne.tarifs.hebdomadaire.toLocaleString()} GNF</div>
                      <div className="elite-price-savings">
                        Économisez {((vehiculeSelectionne.tarifs.quotidien * 7) - vehiculeSelectionne.tarifs.hebdomadaire).toLocaleString()} GNF
                      </div>
                    </div>
                    <div className="elite-price-tier">
                      <div className="elite-price-label">Mensuel</div>
                      <div className="elite-price-amount">{vehiculeSelectionne.tarifs.mensuel.toLocaleString()} GNF</div>
                      <div className="elite-price-savings">
                        Économisez {((vehiculeSelectionne.tarifs.quotidien * 30) - vehiculeSelectionne.tarifs.mensuel).toLocaleString()} GNF
                      </div>
                    </div>
                  </div>
                </div>

                {/* Présentation */}
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
                    Présentation
                  </h3>
                  <p className="elite-modal-description">{vehiculeSelectionne.presentation}</p>
                </div>

                {/* Caractéristiques */}
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                    </svg>
                    Caractéristiques
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

                {/* Équipements */}
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
                    Équipements
                  </h3>
                  <div className="elite-modal-features">
                    {vehiculeSelectionne.equipements.map((equip, idx) => (
                      <div key={idx} className="elite-feature-item">
                        <svg className="elite-feature-icon" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {equip}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="elite-modal-section">
                  <h3 className="elite-modal-section-title">
                    <svg className="elite-modal-icon" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
                    Inclus
                  </h3>
                  <div className="elite-modal-inclusions">
                    {vehiculeSelectionne.inclusions.map((inc, idx) => (
                      <div key={idx} className="elite-inclusion-item">
                        <svg className="elite-inclusion-icon" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-2.18L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        {inc}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="elite-modal-actions">
                  <button
                    className={`elite-action-button elite-primary ${vehiculeSelectionne.statut !== "disponible" ? "elite-disabled" : ""}`}
                    disabled={vehiculeSelectionne.statut !== "disponible"}
                  >
                    <svg className="elite-action-icon" viewBox="0 0 24 24">
                      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                    </svg>
                    Réserver ce véhicule
                  </button>
                  <button className="elite-action-button elite-secondary">
                    <svg className="elite-action-icon" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                    </svg>
                    Contacter G-TRAF+
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

// === COMPOSANT DE CARTE DE VÉHICULE ===
const EliteVehicleCard = ({ vehicule, affichage, onClick }) => {
  const estDisponible = vehicule.statut === "disponible";

  if (affichage === "liste") {
    return (
      <div className="elite-vehicle-card elite-list-card" onClick={onClick}>
        <div className="elite-card-content">
          <div className="elite-list-card-layout">
            <div className="elite-list-card-image">
              <img src={vehicule.galerie[0]} alt={vehicule.designation} className="elite-vehicle-image" />
              <div className="elite-availability-badge">
                <span className={`elite-badge ${estDisponible ? "elite-available" : "elite-unavailable"}`}>
                  {estDisponible ? "Disponible" : "Réservé"}
                </span>
              </div>
            </div>

            <div className="elite-list-card-details">
              <div className="elite-list-card-header">
                <div>
                  <h3 className="elite-vehicle-designation">{vehicule.designation}</h3>
                  <p className="elite-vehicle-meta">
                    {vehicule.marque} • {vehicule.edition} • {vehicule.annee}
                  </p>
                </div>
                <div className="elite-vehicle-pricing">
                  <div className="elite-daily-price">{vehicule.tarifs.quotidien.toLocaleString()} GNF</div>
                  <div className="elite-price-label">par jour</div>
                </div>
              </div>

              <p className="elite-vehicle-description">{vehicule.presentation}</p>

              <div className="elite-vehicle-stats">
                <div className="elite-stat-item">
                  <svg className="elite-stat-icon" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
                    <circle cx="7.5" cy="14.5" r="1.5" />
                    <circle cx="16.5" cy="14.5" r="1.5" />
                  </svg>
                  <div className="elite-stat-label">Performance</div>
                  <div className="elite-stat-value">{vehicule.performance}</div>
                </div>
                <div className="elite-stat-item">
                  <svg className="elite-stat-icon" viewBox="0 0 24 24">
                    <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2h-3V7h3v3zM8 7h3v3H8V7zm-2 5h12v3H6v-3z" />
                  </svg>
                  <div className="elite-stat-label">Capacité</div>
                  <div className="elite-stat-value">{vehicule.capacite}</div>
                </div>
                <div className="elite-stat-item">
                  <svg className="elite-stat-icon" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div className="elite-stat-label">Quartier</div>
                  <div className="elite-stat-value">{vehicule.destination}</div>
                </div>
                <div className="elite-stat-item">
                  <svg className="elite-stat-icon" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <div className="elite-stat-label">Évaluation</div>
                  <div className="elite-stat-value">4.9/5</div>
                </div>
              </div>

              <div className="elite-card-actions">
                <button
                  className={`elite-action-button ${estDisponible ? "elite-primary" : "elite-secondary"}`}
                  disabled={!estDisponible}
                  onClick={(e) => e.stopPropagation()}
                >
                  {estDisponible ? "Réserver" : "Indisponible"}
                </button>
                <button className="elite-action-button elite-secondary">
                  <svg className="elite-action-icon" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
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
        <img src={vehicule.galerie[0]} alt={vehicule.designation} className="elite-vehicle-image" />
        <div className="elite-image-overlay"></div>
        <div className="elite-card-badge">
          <span className={`elite-badge ${estDisponible ? "elite-available" : "elite-unavailable"}`}>
            {estDisponible ? "Disponible" : "Réservé"}
          </span>
        </div>
        <div className="elite-quick-action">
          <button className="elite-quick-action-button">
            <svg className="elite-quick-action-icon" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="elite-card-details">
        <div className="elite-card-header">
          <h3 className="elite-vehicle-designation">{vehicule.designation}</h3>
          <div className="elite-daily-price">{vehicule.tarifs.quotidien.toLocaleString()} GNF</div>
        </div>
        <p className="elite-vehicle-meta">
          {vehicule.marque} • {vehicule.edition} • {vehicule.annee}
        </p>

        <div className="elite-vehicle-features">
          {vehicule.equipements.slice(0, 3).map((equip, idx) => (
            <div key={idx} className="elite-feature-item">
              <svg className="elite-feature-icon" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span>{equip}</span>
            </div>
          ))}
          {vehicule.equipements.length > 3 && (
            <div className="elite-extra-features">+{vehicule.equipements.length - 3} équipements</div>
          )}
        </div>

        <div className="elite-vehicle-specs">
          <div className="elite-spec-item">
            <svg className="elite-spec-icon" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
              <circle cx="7.5" cy="14.5" r="1.5" />
              <circle cx="16.5" cy="14.5" r="1.5" />
            </svg>
            <div className="elite-spec-label">Perf</div>
            <div className="elite-spec-value">{vehicule.performance}</div>
          </div>
          <div className="elite-spec-item">
            <svg className="elite-spec-icon" viewBox="0 0 24 24">
              <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2h-3V7h3v3zM8 7h3v3H8V7zm-2 5h12v3H6v-3z" />
            </svg>
            <div className="elite-spec-label">Capacité</div>
            <div className="elite-spec-value">{vehicule.capacite}</div>
          </div>
          <div className="elite-spec-item">
            <svg className="elite-spec-icon" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
            </svg>
            <div className="elite-spec-label">Année</div>
            <div className="elite-spec-value">{vehicule.annee}</div>
          </div>
        </div>

        <div className="elite-vehicle-footer">
          <div className="elite-location-info">
            <svg className="elite-location-icon" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>{vehicule.destination}</span>
          </div>
          <div className="elite-rating-info">
            <svg className="elite-rating-icon" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>4.9/5</span>
          </div>
        </div>

        <div className="elite-card-actions">
          <button
            className={`elite-action-button ${estDisponible ? "elite-primary" : "elite-secondary"}`}
            disabled={!estDisponible}
            onClick={(e) => e.stopPropagation()}
          >
            {estDisponible ? "Réserver" : "Indisponible"}
          </button>
          <button className="elite-action-button elite-secondary elite-icon-only">
            <svg className="elite-action-icon" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EliteFleetGallery;