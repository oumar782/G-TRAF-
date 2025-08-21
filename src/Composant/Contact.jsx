import React, { useState } from 'react';
import '../Style/Contac.css'; // ✅ Fichier CSS mis à jour

const GtrafPlusContactForm = () => {
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
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
      content: '+224 621015699',
      subtitle: 'Lun-Ven 8h-19h'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'Contact@gtrafplus.com',
      subtitle: 'Réponse sous 24h'
    },
    {
      icon: 'MapPin',
      title: 'Adresse',
      content: 'Conakry KALOUM KOULEWONDY',
    },
    {
      icon: 'Clock',
      title: 'Horaires',
      content: 'Lun-Ven 8h-19h',
      subtitle: 'Sam 9h-17h'
    }
  ];

  // Fonction pour afficher le toast de succès
  const showSuccessToast = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  // Fonction pour afficher le toast d'erreur
  const showErrorToast = (message) => {
    setErrorMessage(message);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setErrorMessage('');
    }, 6000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Préparation des données pour l'API (mapping des noms)
      const apiData = {
        nom: formData.name,
        email: formData.email,
        telephone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message
      };

      // Envoi vers l'API
      const response = await fetch('https://gtrafplusbac.vercel.app/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erreur ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Contact créé:', result);

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });

      // Afficher le toast de succès
      showSuccessToast();

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      
      // Déterminer le message d'erreur approprié
      let errorMsg = 'Une erreur inattendue s\'est produite. Veuillez réessayer.';
      
      if (error.message.includes('Failed to fetch')) {
        errorMsg = 'Problème de connexion. Vérifiez votre connexion internet et réessayez.';
      } else if (error.message.includes('400')) {
        errorMsg = 'Données du formulaire invalides. Vérifiez vos informations.';
      } else if (error.message.includes('500')) {
        errorMsg = 'Erreur du serveur. Veuillez réessayer dans quelques minutes.';
      } else if (error.message) {
        errorMsg = error.message;
      }

      showErrorToast(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
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

  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const AlertTriangleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );

  return (
    <section id="gtp_contact" className="gtp_section">
      {/* Success Toast */}
      {showSuccess && (
        <div className="gtp_toast gtp_toast_success">
          <CheckIcon />
          <div>
            <strong>Demande envoyée avec succès !</strong>
            <p>Nous vous recontacterons dans les 24h pour discuter de votre projet.</p>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {showError && (
        <div className="gtp_toast gtp_toast_error">
          <AlertTriangleIcon />
          <div>
            <strong>Erreur lors de l'envoi</strong>
            <p>{errorMessage}</p>
          </div>
          <button 
            onClick={() => setShowError(false)}
            className="gtp_toast_close"
            aria-label="Fermer"
          >
            <XIcon />
          </button>
        </div>
      )}

      <div className="gtp_container">
        {/* Header */}
        <div className="gtp_header">
          <div className="gtp_badge">CONTACT</div>
          <h2 className="gtp_title">
            Parlons de votre <span>projet</span>
          </h2>
          <p className="gtp_description">
            Contactez-nous pour un devis personnalisé et gratuit. Notre équipe d'experts 
            est à votre disposition pour étudier votre projet dans les moindres détails.
          </p>
        </div>

        <div className="gtp_grid">
          {/* Contact Info */}
          <div className="gtp_info">
            <div className="gtp_info_card">
              <h3 className="gtp_info_title">Nos coordonnées</h3>
              <div className="gtp_info_list">
                {contactInfo.map((info, index) => {
                  const Icon = {
                    Phone: PhoneIcon,
                    Mail: MailIcon,
                    MapPin: MapPinIcon,
                    Clock: ClockIcon
                  }[info.icon];

                  return (
                    <div key={index} className="gtp_info_item">
                      <div className="gtp_info_icon">
                        <Icon />
                      </div>
                      <div>
                        <h4 className="gtp_info_label">{info.title}</h4>
                        <p className="gtp_info_value">{info.content}</p>
                        <p className="gtp_info_sub">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="gtp_stats">
              <h4 className="gtp_stats_title">Pourquoi nous choisir ?</h4>
              <div className="gtp_stats_list">
                <div className="gtp_stats_row">
                  <span>Dévis gratuit</span>
                  <span className="gtp_check">✓</span>
                </div>
                <div className="gtp_stats_row">
                  <span>Réponse rapide</span>
                  <span>24h</span>
                </div>
                <div className="gtp_stats_row">
                  <span>Expertise certifiée</span>
                  <span>25 ans</span>
                </div>
                <div className="gtp_stats_row">
                  <span>Satisfaction client</span>
                  <span>98%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="gtp_form_container">
            <div className="gtp_form_card">
              <form onSubmit={handleSubmit} className="gtp_form">
                <div className="gtp_row">
                  <div className="gtp_field">
                    <label>Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom complet"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="gtp_field">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="gtp_row">
                  <div className="gtp_field">
                    <label>Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01 23 45 67 89"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="gtp_field">
                    <label>Type de projet *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Sélectionnez un type</option>
                      {projectTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="gtp_field">
                  <label>Budget indicatif</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    {budgetRanges.map((range, idx) => (
                      <option key={idx} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div className="gtp_field">
                  <label>Description de votre projet *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Décrivez votre projet, vos attentes, contraintes spécifiques, délais souhaités..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gtp_submit_btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="gtp_spinner"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      Envoyer ma demande
                    </>
                  )}
                </button>

                <p className="gtp_disclaimer">
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

export default GtrafPlusContactForm;