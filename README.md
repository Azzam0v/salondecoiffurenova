# Nova Hair Studio

Site vitrine moderne pour un salon de coiffure premium, développé avec React.
Le projet propose une expérience complète permettant de découvrir les services, consulter les profils des stylistes et simuler une prise de rendez-vous.

[Voir la démo en ligne](https://azzam0v.github.io/salondecoiffurenova/) · [Voir le dépôt GitHub](https://github.com/Azzam0v/salondecoiffurenova)

## Aperçu

Nova Hair Studio présente l’identité et les services d’un salon fictif à travers une interface élégante, responsive et orientée conversion.

Le parcours principal accompagne l’utilisateur dans une réservation en six étapes :

1. Sélection du service
2. Sélection du styliste
3. Choix de la date
4. Choix de l’heure
5. Saisie des coordonnées
6. Vérification et confirmation

## Fonctionnalités

- Page d’accueil immersive
- Catalogue de services avec prix et durée
- Présentation des stylistes, spécialités et évaluations
- Parcours de réservation guidé
- Génération de dates et créneaux disponibles
- Validation des informations du client
- Récapitulatif et confirmation du rendez-vous
- Page de tarifs
- Page À propos
- Formulaire de contact
- Navigation avec React Router
- Interface adaptée aux ordinateurs, tablettes et téléphones

> La réservation est actuellement une démonstration côté client. Aucun rendez-vous réel n’est envoyé à un serveur.

## Technologies

- React 18
- React Router
- JavaScript ES6+
- Vite
- Bootstrap 5
- Lucide React
- CSS personnalisé

## Installation

Prérequis : Node.js 18 ou une version plus récente.

```bash
git clone https://github.com/Azzam0v/salondecoiffurenova.git
cd salondecoiffurenova
npm install
npm run dev
```

Ouvrir ensuite l’adresse locale indiquée par Vite.

## Commandes disponibles

```bash
npm run dev
```

Lance le serveur de développement.

```bash
npm run build
```

Génère la version optimisée dans le dossier `dist`.

```bash
npm run preview
```

Prévisualise localement le build de production.

## Structure principale

```text
src/
├── components/
│   ├── BookingWizard.jsx
│   ├── ContactForm.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── PricingTable.jsx
│   ├── ServiceCard.jsx
│   └── StylistCard.jsx
├── data/
│   └── salonData.js
├── pages/
│   ├── AboutPage.jsx
│   ├── BookingPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   └── StylistsPage.jsx
├── styles/
│   └── global.css
├── utils/
│   └── bookingSlots.js
├── App.jsx
└── main.jsx
```

## Déploiement

Le site est automatiquement déployé sur GitHub Pages :

https://azzam0v.github.io/salondecoiffurenova/

## Auteur

Développé par [Azzam0v](https://github.com/Azzam0v).
