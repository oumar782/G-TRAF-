import React, { useState } from 'react';
import '../Style/Contac.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const projectTypes = [
    'Construction neuve',
    'Rénovation complète',
    'Extension/Agrandissement',
    'Aménagement commercial',
    'Autre projet'
  ];

  const budgetRanges = [
    'Moins de 100k€',
    '100k€ - 500k€',
    '500k€ - 1M€',
    '1M€ - 5M€',
    'Plus de 5M€'
  ];

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Téléphone',
      content: '01 23 45 67 89',
      subtitle: 'Lun-Ven 8h-19h'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'contact@constructlux.fr',
      subtitle: 'Réponse sous 24h'
    },
    {
      icon: 'MapPin',
      title: 'Adresse',
      content: '123 Avenue de la Grande Armée',
      subtitle: '75017 Paris'
    },
    {
      icon: 'Clock',
      title: 'Horaires',
      content: 'Lun-Ven 8h-19h',
      subtitle: 'Sam 9h-17h'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });

      // Cacher le message après 5 secondes
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // SVG Icons
  const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13"></path>
      <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.7 15.9 15.9 0 0 1 1.03 3.58 2 2 0 0 1-.45 1.59l-1.5 1.5a2 2 0 0 0-.45 1.59c0 .7.3 1.4.8 2.1.5.7 1.1 1.3 1.8 1.8.7.5 1.4.8 2.1.8a2 2 0 0 0 1.59-.45l1.5-1.5a2 2 0 0 1 1.59-.45 15.9 15.9 0 0 1 3.58 1.03A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <section id="contact" className="contactform-section">
      {/* Success Toast */}
      {showSuccess && (
        <div className="contactform-toast">
          <CheckIcon />
          <div>
            <strong>Demande envoyée !</strong>
            <p>Nous vous recontacterons dans les 24h pour discuter de votre projet.</p>
          </div>
        </div>
      )}

      <div className="contactform-container">
        {/* Header */}
        <div className="contactform-header">
          <div className="contactform-badge">CONTACT</div>
          <h2 className="contactform-title">
            Parlons de votre <span>projet</span>
          </h2>
          <p className="contactform-description">
            Contactez-nous pour un devis personnalisé et gratuit. Notre équipe d'experts 
            est à votre disposition pour étudier votre projet dans les moindres détails.
          </p>
        </div>

        <div className="contactform-grid">
          {/* Contact Info */}
          <div className="contactform-info">
            <div className="contactform-info-card">
              <h3 className="contactform-info-title">Nos coordonnées</h3>
              <div className="contactform-info-list">
                {contactInfo.map((info, index) => {
                  const Icon = {
                    Phone: PhoneIcon,
                    Mail: MailIcon,
                    MapPin: MapPinIcon,
                    Clock: ClockIcon
                  }[info.icon];

                  return (
                    <div key={index} className="contactform-info-item">
                      <div className="contactform-info-icon">
                        <Icon />
                      </div>
                      <div>
                        <h4 className="contactform-info-label">{info.title}</h4>
                        <p className="contactform-info-value">{info.content}</p>
                        <p className="contactform-info-sub">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="contactform-stats">
              <h4 className="contactform-stats-title">Pourquoi nous choisir ?</h4>
              <div className="contactform-stats-list">
                <div className="contactform-stats-row">
                  <span>Dévis gratuit</span>
                  <span className="contactform-check">✓</span>
                </div>
                <div className="contactform-stats-row">
                  <span>Réponse rapide</span>
                  <span> 24h</span>
                </div>
                <div className="contactform-stats-row">
                  <span>Expertise certifiée</span>
                  <span>25 ans</span>
                </div>
                <div className="contactform-stats-row">
                  <span>Satisfaction client</span>
                  <span>98%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contactform-form-container">
            <div className="contactform-form-card">
              <form onSubmit={handleSubmit} className="contactform-form">
                <div className="contactform-row">
                  <div className="contactform-field">
                    <label>Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div className="contactform-field">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="contactform-row">
                  <div className="contactform-field">
                    <label>Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                  <div className="contactform-field">
                    <label>Type de projet *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez un type</option>
                      {projectTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contactform-field">
                  <label>Budget indicatif</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    {budgetRanges.map((range, idx) => (
                      <option key={idx} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div className="contactform-field">
                  <label>Description de votre projet *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Décrivez votre projet, vos attentes, contraintes spécifiques, délais souhaités..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contactform-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="contactform-spinner"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      Envoyer ma demande
                    </>
                  )}
                </button>

                <p className="contactform-disclaimer">
                  En envoyant ce formulaire, vous acceptez d'être recontacté par notre équipe 
                  dans le cadre de votre demande de devis.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;