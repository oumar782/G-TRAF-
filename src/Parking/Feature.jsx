import React from 'react';
import { motion } from 'framer-motion';
import '../Parkstyle/Feature.css';

const EleganceSection = () => {
  const prestiges = [
    {
      titre: "Véhicules Contrôlés",
      description: "Chaque voiture est inspectée avant arrivage : moteur, transmission, carrosserie.",
      distinction: "État impeccable",
      icone: "✅"
    },
    {
      titre: "Disponibilité Rapide",
      description: "Des véhicules prêts à partir — pas d’attente, livraison possible sous 24h.",
      distinction: "Prêt à rouler",
      icone: "⚡"
    },
    {
      titre: "Origine Garantie",
      description: "Importation directe d'Europe et du Japon. Pas d’intermédiaire, prix maîtrisés.",
      distinction: "Origine vérifiée",
      icone: "🌍"
    },
    {
      titre: "Prix Compétitifs",
      description: "Des berlines à partir de 500.000 GNF, pickups à 700.000 GNF — sans surprise.",
      distinction: "Meilleur rapport qualité-prix",
      icone: "💰"
    },
    {
      titre: "Service Après-Vente",
      description: "Assistance mécanique, conseils d’entretien, et suivi après achat ou location.",
      distinction: "Soutien local",
      icone: "🔧"
    },
    {
      titre: "Parking Sécurisé",
      description: "Parc bien gardé à Kipé, avec vidéosurveillance et personnel formé.",
      distinction: "Lieu sécurisé",
      icone: "🔐"
    }
  ];

  const statistiques = [
    { valeur: "80+", libellé: "Véhicules en stock", suffixe: "toujours disponibles" },
    { valeur: "5 ans+", libellé: "Expérience terrain", suffixe: "dans l’importation" },
    { valeur: "95%", libellé: "Clients satisfaits", suffixe: "selon retour terrain" },
    { valeur: "5 min", libellé: "Temps d’accueil", suffixe: "prise en charge rapide" }
  ];

  return (
    <section className="elegance-section">
      <div className="elegance-container">
        {/* En-tête */}
        <motion.div 
          className="elegances-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="elegancess-badge">
            <span className="badge-ornement">📍</span>
            <span>Parking G-TRAF+ | Kipé, Conakry</span>
          </div>
          <h2 className="elegance-titre">
            <span className="titre-gradient">Votre Prochain</span> Véhicule Vous Attend
          </h2>
          <p className="elegance-sous-titre">
            Un parking moderne, bien organisé, où chaque véhicule est choisi avec soin pour sa fiabilité et son rapport qualité-prix.
          </p>
        </motion.div>

        {/* Grille des atouts */}
        <div className="prestige-grid">
          {prestiges.map((prestige, index) => (
            <motion.div
              key={index}
              className="prestige-cards"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-contours"></div>
              <div className="card-content">
                {/* Icône */}
                <div className="prestige-icone">
                  {prestige.icone}
                </div>

                {/* Distinction */}
                <div className="prestige-distinction">
                  <span>{prestige.distinction}</span>
                </div>

                {/* Titre */}
                <h3 className="prestige-titres">
                  {prestige.titre}
                </h3>
                <p className="prestige-description">
                  {prestige.description}
                </p>

                {/* Garantie locale */}
                <div className="prestige-garantie">
                  <span className="garantie-ornement">✧</span>
                  <span>Toujours à Kipé</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistiques réelles */}
        <motion.div 
          className="exception-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="stats-grid">
            {statistiques.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-valeur">
                  {stat.valeur}
                  <div className="stat-ornement"></div>
                </div>
                <div className="stat-libelle">{stat.libellé}</div>
                <div className="stat-suffixe">{stat.suffixe}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EleganceSection;