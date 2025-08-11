import React from 'react';
import { motion } from 'framer-motion';
import '../Parkstyle/Feature.css';
const EleganceSection = () => {
  const prestiges = [
    {
      titre: "Excellence Méticuleuse",
      description: "Chaque véhicule subit un processus de certification rigoureux par nos maîtres artisans.",
      distinction: "Certification Or",
      icone: "🜛"
    },
    {
      titre: "Performance Absolue",
      description: "Technologies de pointe sélectionnées pour répondre aux exigences les plus élevées.",
      distinction: "Édition Limitée",
      icone: "⚡"
    },
    {
      titre: "Savoir-Faire Artisanal",
      description: "Maintenance réalisée par nos experts formés aux plus hauts standards internationaux.",
      distinction: "Atelier Privé",
      icone: "✧"
    },
    {
      titre: "Service Sur Mesure",
      description: "Livraison personnalisée selon vos préférences et contraintes exclusives.",
      distinction: "Conciergerie 24/7",
      icone: "⧉"
    },
    {
      titre: "Disponibilité Exclusive",
      description: "Accès prioritaire à notre flotte pour clients privilégiés.",
      distinction: "Accès VIP",
      icone: "♕"
    },
    {
      titre: "Héritage d'Excellence",
      description: "Une réputation bâtie sur des décennies de perfection et d'innovation.",
      distinction: "Depuis 1987",
      icone: "⌬"
    }
  ];

  const statistiques = [
    { valeur: "500+", libellé: "Pièces d'exception", suffixe: "en collection" },
    { valeur: "99.7%", libellé: "Taux de satisfaction", suffixe: "clients privilégiés" },
    { valeur: "24", libellé: "Heures sur 24", suffixe: "service dédié" },
    { valeur: "1:1", libellé: "Ratio personnel", suffixe: "accompagnement sur mesure" }
  ];

  return (
    <section className="elegance-section">
      <div className="elegance-container">
        {/* En-tête Prestige */}
        <motion.div 
          className="elegances-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="elegancess-badge">
            <span className="badge-ornement">⌖</span>
            <span>L'Art de la Performance</span>
          </div>
          <h2 className="elegance-titre">
            <span className="titre-gradient">L'Excellence</span> Réinventée
          </h2>
          <p className="elegance-sous-titre">
            Découvrez un univers où chaque détail est pensé pour surpasser vos attentes les plus exigeantes.
          </p>
        </motion.div>

        {/* Grille Prestige */}
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
                {/* Icône artisanale */}
                <div className="prestige-icone">
                  {prestige.icone}
                </div>

                {/* Distinction */}
                <div className="prestige-distinction">
                  <span>{prestige.distinction}</span>
                </div>

                {/* Contenu */}
                <h3 className="prestige-titres">
                  {prestige.titre}
                </h3>
                <p className="prestige-description">
                  {prestige.description}
                </p>

                {/* Garantie */}
                <div className="prestige-garantie">
                  <span className="garantie-ornement">✧</span>
                  <span>Signature Prestige</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistiques d'Exception */}
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