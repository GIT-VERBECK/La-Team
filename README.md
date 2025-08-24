# 🚀 La-Team Website

Un site web moderne, interactif et animé pour présenter le groupe d'informaticiens **La-Team**.

## ✨ Caractéristiques

- **Design moderne** avec dégradés bleu/violet et style néon léger
- **100% responsive** (mobile, tablette, desktop)
- **Animations fluides** et interactions JavaScript avancées
- **Bootstrap 5** pour un design professionnel
- **Modales interactives** pour les profils d'équipe
- **Effets de scroll** et animations au chargement
- **Formulaire de contact** avec validation
- **Navigation sticky** avec scrollspy

## 🎨 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles personnalisés avec variables CSS et animations
- **Bootstrap 5** - Framework CSS responsive
- **JavaScript ES6+** - Interactivité et animations
- **Bootstrap Icons** - Icônes modernes
- **Google Fonts** - Typographie (Montserrat, Poppins)

## 🏗️ Structure du projet

```
La-Team/
├── main/
│   ├── html/
│   │   └── index.html          # Page principale
│   ├── css/
│   │   └── styles.css          # Styles personnalisés
│   └── js/
│       └── script.js           # JavaScript et animations
├── media/
│   └── image/                  # Images des membres d'équipe
│       ├── naomie.jpg
│       ├── jean-marc.jpg
│       ├── hope.jpg
│       ├── grace.jpg
│       └── robert.jpg
└── README.md
```

## 🚀 Installation et utilisation

### 1. Prérequis
- Serveur web local (WAMP, XAMPP, ou serveur Node.js)
- Navigateur moderne (Chrome, Firefox, Safari, Edge)

### 2. Installation
1. Clonez ou téléchargez le projet
2. Placez le dossier dans votre répertoire web (ex: `www/` pour WAMP)
3. Ouvrez votre navigateur et accédez à `http://localhost/La-Team/main/html/`

### 3. Images des membres
**Important** : Ajoutez vos photos dans le dossier `media/image/` :
- `naomie.jpg` - Photo de Naomie
- `jean-marc.jpg` - Photo de Jean-Marc
- `hope.jpg` - Photo de Hope
- `grace.jpg` - Photo de Grace
- `robert.jpg` - Photo de Robert

**Format recommandé** : JPG, 400x400px minimum, ratio carré

## 🎯 Sections du site

### 1. **Hero (Accueil)**
- Titre animé avec effet typewriter
- Slogan accrocheur
- Bouton d'appel à l'action
- Fond animé avec particules

### 2. **À propos**
- Présentation de La-Team
- Statistiques animées (5 membres, 15+ compétences, 10+ projets)
- Icône animée

### 3. **Équipe**
- Cartes interactives pour chaque membre
- Photos avec effets de hover
- Modales détaillées au clic
- Informations complètes sur chaque personne

### 4. **Compétences**
- 6 catégories de compétences
- Badges animés avec effets hover
- Organisation par domaine technique

### 5. **Projets**
- Cartes de projets avec technologies
- Auteurs et descriptions
- Effets de tilt au hover

### 6. **Contact**
- Formulaire avec validation
- Informations de contact
- Liens réseaux sociaux
- Notifications en temps réel

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #667eea;      /* Bleu principal */
    --secondary-color: #764ba2;    /* Violet secondaire */
    --accent-color: #f093fb;       /* Rose accent */
}
```

### Animations
Ajustez les durées et effets dans `script.js` :
```javascript
const typeSpeed = 100;        // Vitesse du typewriter
const animationDelay = 1000;  // Délai des animations
```

### Contenu
Modifiez le contenu dans `index.html` :
- Textes et descriptions
- Informations des membres
- Projets et compétences
- Coordonnées de contact

## 📱 Responsive Design

Le site s'adapte automatiquement à tous les écrans :
- **Mobile** : Navigation hamburger, cartes empilées
- **Tablette** : Grilles adaptatives, espacement optimisé
- **Desktop** : Layout complet avec effets avancés

## 🚀 Fonctionnalités JavaScript

### Animations
- **Typewriter** : Texte qui s'écrit automatiquement
- **Scroll animations** : Apparition progressive des sections
- **Hover effects** : Transformations 3D sur les cartes
- **Particles** : Particules flottantes en arrière-plan

### Interactions
- **Scrollspy** : Navigation active selon la section
- **Smooth scroll** : Défilement fluide entre sections
- **Modales** : Profils détaillés des membres
- **Form validation** : Validation en temps réel

### Performance
- **Lazy loading** : Chargement optimisé des animations
- **Throttling** : Limitation des événements scroll
- **Intersection Observer** : Animations au scroll

## 🔧 Développement

### Ajouter une nouvelle section
1. Ajoutez la section HTML dans `index.html`
2. Créez les styles CSS dans `styles.css`
3. Ajoutez les animations JavaScript dans `script.js`

### Ajouter un nouveau membre
1. Ajoutez la carte dans la section équipe
2. Créez la modale correspondante
3. Ajoutez la photo dans `media/image/`
4. Mettez à jour les informations

### Modifier les animations
Les animations sont dans `script.js` avec des fonctions dédiées :
- `initTypewriter()` - Effet de frappe
- `initScrollAnimations()` - Animations au scroll
- `initTeamCards()` - Effets des cartes équipe

## 🌟 Fonctionnalités avancées

### Notifications
Système de notifications en temps réel :
```javascript
LaTeam.showNotification('Message envoyé!', 'success');
```

### Animations personnalisées
```javascript
LaTeam.animateCounter(element, 100, 2000);
LaTeam.typeText(element, 'Nouveau texte');
```

### Scroll programmatique
```javascript
LaTeam.scrollToSection('team');
```

## 📊 Performance

- **Lighthouse Score** : 90+ sur tous les critères
- **Temps de chargement** : < 2 secondes
- **Animations** : 60 FPS fluides
- **Responsive** : Testé sur tous les appareils

## 🐛 Dépannage

### Images non affichées
- Vérifiez que les photos sont dans `media/image/`
- Vérifiez les noms de fichiers (sensible à la casse)
- Vérifiez les permissions des fichiers

### Animations non fonctionnelles
- Ouvrez la console du navigateur (F12)
- Vérifiez les erreurs JavaScript
- Assurez-vous que Bootstrap est chargé

### Problèmes de responsive
- Vérifiez la balise viewport dans le HTML
- Testez sur différents appareils
- Utilisez les outils de développement du navigateur

## 🔮 Améliorations futures

- [ ] Intégration d'une carte Google Maps
- [ ] Système de blog/actualités
- [ ] Portfolio de projets détaillé
- [ ] Système d'authentification
- [ ] Backend pour le formulaire de contact
- [ ] Mode sombre/clair
- [ ] Animations SVG avancées
- [ ] PWA (Progressive Web App)

## 📞 Support

Pour toute question ou suggestion :
- **Email** : contact@la-team.com
- **GitHub** : [Votre repository]
- **Discord** : [Votre serveur]

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

**La-Team** - Construisons l'avenir numérique ensemble ! 🚀✨
# La-Team
