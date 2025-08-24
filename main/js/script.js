// ===== LA-TEAM WEBSITE JAVASCRIPT =====
// Auteur: Assistant IA
// Date: 2025
// Description: Site web moderne et interactif pour La-Team

// ===== VARIABLES GLOBALES =====
let currentSection = 'home';
let isScrolling = false;
let scrollTimeout;
let currentTheme = 'dark';

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 La-Team Website - Initialisation...');
    
    // Initialiser toutes les fonctionnalités
    initTheme();
    initTypewriter();
    initScrollAnimations();
    initNavbarEffects();
    initTeamCards();
    initSkillAnimations();
    initProjectCards();
    initContactForm();
    initScrollSpy();
    initLoadingAnimations();
    
    // CORRECTIF: Déboguer la section "À propos" après initialisation
    setTimeout(() => {
        debugAboutSection();
        // Si la section n'est toujours pas visible, la forcer
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const animatedElements = aboutSection.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
            const hasVisibleElements = Array.from(animatedElements).some(el => el.classList.contains('visible'));
            if (!hasVisibleElements) {
                console.log('⚠️ Section "À propos" pas visible, application du correctif...');
                forceShowAboutSection();
            }
        }
    }, 3000);
    
    console.log('✅ La-Team Website - Initialisation terminée!');
});

// ===== DÉBOGAGE DU THÈME =====
function debugTheme() {
    console.log('🔍 === DÉBOGAGE DU THÈME ===');
    console.log('📍 Élément HTML:', document.documentElement);
    console.log('🎨 Attribut data-theme:', document.documentElement.getAttribute('data-theme'));
    console.log('💾 localStorage theme:', localStorage.getItem('la-team-theme'));
    console.log('🌍 Variable currentTheme:', currentTheme);
    console.log('🔘 Bouton themeToggle:', document.getElementById('themeToggle'));
    console.log('🔘 Icône themeIcon:', document.getElementById('themeIcon'));
    
    // Vérifier les styles appliqués
    const computedStyle = window.getComputedStyle(document.body);
    console.log('🎨 Couleur de fond du body:', computedStyle.backgroundColor);
    console.log('🎨 Couleur du texte du body:', computedStyle.color);
    
    // Vérifier les variables CSS
    const rootStyles = getComputedStyle(document.documentElement);
    console.log('🎨 --text-dark:', rootStyles.getPropertyValue('--text-dark'));
    console.log('🎨 --light-bg:', rootStyles.getPropertyValue('--light-bg'));
    console.log('🎨 --dark-bg:', rootStyles.getPropertyValue('--dark-bg'));
    
    console.log('🔍 === FIN DÉBOGAGE ===');
}

// ===== GESTION DU THÈME =====
function initTheme() {
    console.log('🎨 Initialisation du thème...');
    
    // Récupérer le thème sauvegardé ou utiliser le thème par défaut
    const savedTheme = localStorage.getItem('la-team-theme') || 'dark';
    console.log('📱 Thème sauvegardé:', savedTheme);
    
    // Appliquer le thème immédiatement
    setTheme(savedTheme);
    
    // Ajouter l'écouteur d'événement au bouton de thème
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('✅ Bouton de thème configuré');
    } else {
        console.error('❌ Bouton de thème non trouvé');
    }
    
    console.log('🎨 Thème initialisé:', savedTheme);
    
    // Déboguer après un délai pour s'assurer que tout est chargé
    setTimeout(debugTheme, 1000);
}

function setTheme(theme) {
    console.log('🔄 Application du thème:', theme);
    
    currentTheme = theme;
    
    // Appliquer le thème sur l'élément html
    document.documentElement.setAttribute('data-theme', theme);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('la-team-theme', theme);
    
    // Mettre à jour l'icône du bouton
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'bi bi-sun-fill';
            themeIcon.title = 'Passer au thème clair';
        } else {
            themeIcon.className = 'bi bi-moon-fill';
            themeIcon.title = 'Passer au thème sombre';
        }
    }
    
    // Vérifier que le thème est bien appliqué
    const appliedTheme = document.documentElement.getAttribute('data-theme');
    console.log('✅ Thème appliqué:', appliedTheme);
    
    // Forcer le rafraîchissement des styles si nécessaire
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

function toggleTheme() {
    console.log('🔄 Basculement du thème...');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('🔄 Nouveau thème:', newTheme);
    
    setTheme(newTheme);
    
    // Animation de transition
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// ===== EFFET TYPEWRITER =====
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter-text');
    if (!typewriterElement) return;
    
    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    
    let i = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Démarrer l'effet après un délai
    setTimeout(typeWriter, 1000);
}

// ===== ANIMATIONS AU SCROLL =====
function initScrollAnimations() {
    console.log('🎬 Initialisation des animations au scroll...');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                console.log('✅ Animation visible pour:', entry.target);
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments avec des classes d'animation
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    console.log('🎬 Éléments d\'animation trouvés:', animatedElements.length);
    
    animatedElements.forEach(el => {
        observer.observe(el);
        console.log('👁️ Observation de:', el);
    });
    
    // CORRECTIF: Forcer l'affichage de la section "À propos" après un délai
    setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            console.log('🔧 Correctif: Section "À propos" trouvée, application des animations...');
            
            // Forcer l'affichage de tous les éléments d'animation dans la section "À propos"
            const aboutAnimatedElements = aboutSection.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
            aboutAnimatedElements.forEach(el => {
                el.classList.add('visible');
                console.log('✅ Animation forcée pour:', el);
            });
            
            // Vérifier que la section est visible
            const computedStyle = window.getComputedStyle(aboutSection);
            console.log('👁️ Section "À propos" - Display:', computedStyle.display);
            console.log('👁️ Section "À propos" - Visibility:', computedStyle.visibility);
            console.log('👁️ Section "À propos" - Opacity:', computedStyle.opacity);
        } else {
            console.error('❌ Section "À propos" non trouvée pour le correctif');
        }
    }, 2000);
    
    // CORRECTIF: Vérification périodique des éléments masqués
    setInterval(() => {
        const hiddenElements = document.querySelectorAll('.fade-in:not(.visible), .slide-in-left:not(.visible), .slide-in-right:not(.visible)');
        if (hiddenElements.length > 0) {
            console.log('⚠️ Éléments encore masqués:', hiddenElements.length);
            hiddenElements.forEach(el => {
                // Si l'élément est dans le viewport, le rendre visible
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('visible');
                    console.log('🔧 Élément rendu visible:', el);
                }
            });
        }
    }, 3000);
}

// ===== DÉBOGAGE SECTION "À PROPOS" =====
function debugAboutSection() {
    console.log('🔍 === DÉBOGAGE SECTION "À PROPOS" ===');
    
    const aboutSection = document.getElementById('about');
    if (!aboutSection) {
        console.error('❌ Section "À propos" non trouvée dans le DOM');
        return;
    }
    
    console.log('✅ Section "À propos" trouvée dans le DOM');
    
    // Vérifier les styles
    const computedStyle = window.getComputedStyle(aboutSection);
    console.log('📏 Largeur:', computedStyle.width);
    console.log('📏 Hauteur:', computedStyle.height);
    console.log('👁️ Display:', computedStyle.display);
    console.log('👁️ Visibility:', computedStyle.visibility);
    console.log('👁️ Opacity:', computedStyle.opacity);
    console.log('🎨 Background:', computedStyle.backgroundColor);
    console.log('🎨 Color:', computedStyle.color);
    
    // Vérifier la position
    const rect = aboutSection.getBoundingClientRect();
    console.log('📍 Position:', { x: rect.x, y: rect.y });
    console.log('📍 Taille:', { width: rect.width, height: rect.height });
    
    // Vérifier si elle est visible dans le viewport
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    console.log('👁️ Visible dans le viewport:', isVisible);
    
    // Vérifier les éléments d'animation
    const animatedElements = aboutSection.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    console.log('🎬 Éléments d\'animation trouvés:', animatedElements.length);
    
    animatedElements.forEach((el, index) => {
        const hasVisibleClass = el.classList.contains('visible');
        const elComputedStyle = window.getComputedStyle(el);
        console.log(`🎬 Élément ${index + 1}:`, {
            tag: el.tagName,
            classes: el.className,
            hasVisibleClass: hasVisibleClass,
            opacity: elComputedStyle.opacity,
            transform: elComputedStyle.transform
        });
    });
    
    console.log('🔍 === FIN DÉBOGAGE ===');
}

// ===== FORCER AFFICHAGE SECTION "À PROPOS" =====
function forceShowAboutSection() {
    console.log('🔧 Forçage de l\'affichage de la section "À propos"...');
    
    const aboutSection = document.getElementById('about');
    if (!aboutSection) {
        console.error('❌ Section "À propos" non trouvée');
        return;
    }
    
    // Forcer l'affichage de la section
    aboutSection.style.display = 'block';
    aboutSection.style.visibility = 'visible';
    aboutSection.style.opacity = '1';
    
    // Forcer l'affichage de tous les éléments d'animation
    const animatedElements = aboutSection.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
        el.classList.add('visible');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    console.log('✅ Section "À propos" forcée à l\'affichage');
    
    // Déboguer après le forçage
    setTimeout(debugAboutSection, 100);
}

// ===== EFFETS NAVBAR =====
function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Effet de transparence au scroll
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(102, 126, 234, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(102, 126, 234, 0.95)';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        // Masquer/afficher la navbar au scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Ajouter la classe active au lien de navigation actuel
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ===== CARTES ÉQUIPE =====
function initTeamCards() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        // Effet de parallaxe au hover
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        // Réinitialiser la transformation
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
        
        // Animation d'entrée
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, Math.random() * 1000);
    });
}

// ===== ANIMATIONS COMPÉTENCES =====
function initSkillAnimations() {
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach((badge, index) => {
        // Animation d'entrée en cascade
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            badge.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
        }, index * 100);
        
        // Effet de rebond au hover
        badge.addEventListener('mouseenter', function() {
            this.style.animation = 'bounce 0.6s ease-in-out';
        });
        
        badge.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

// ===== CARTES PROJETS =====
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Animation d'entrée en cascade
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
        
        // Effet de tilt au hover
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// ===== FORMULAIRE DE CONTACT =====
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Validation basique
        if (!name || !email || !message) {
            showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide', 'error');
            return;
        }
        
        // Simulation d'envoi
        showNotification('Envoi en cours...', 'info');
        
        setTimeout(() => {
            showNotification('Message envoyé avec succès!', 'success');
            this.reset();
        }, 2000);
    });
    
    // Validation en temps réel
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                this.classList.remove('is-invalid');
            }
        });
    });
}

// ===== VALIDATION EMAIL =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== VALIDATION CHAMP =====
function validateField(field) {
    const value = field.value.trim();
    
    if (!value) {
        field.classList.add('is-invalid');
        return false;
    }
    
    if (field.type === 'email' && !isValidEmail(value)) {
        field.classList.add('is-invalid');
        return false;
    }
    
    field.classList.remove('is-invalid');
    return true;
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    // Supprimer les notifications existantes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="bi bi-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Styles de la notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Fermer la notification
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-fermeture
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== ICÔNES NOTIFICATIONS =====
function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle-fill',
        error: 'x-circle-fill',
        warning: 'exclamation-triangle-fill',
        info: 'info-circle-fill'
    };
    return icons[type] || 'info-circle-fill';
}

// ===== COULEURS NOTIFICATIONS =====
function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || '#3b82f6';
}

// ===== SCROLL SPY =====
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        currentSection = current;
    });
}

// ===== ANIMATIONS DE CHARGEMENT =====
function initLoadingAnimations() {
    // Animation des statistiques
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 50);
        });
    };
    
    // Démarrer l'animation quand la section est visible
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// ===== SCROLL DOUX =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Ajuster pour la navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===== EFFET PARTICULES =====
function createParticles() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle ${Math.random() * 10 + 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        heroSection.appendChild(particle);
    }
}

// ===== ANIMATION PARTICULES =====
const particleAnimation = `
@keyframes float-particle {
    0% {
        transform: translateY(0px) translateX(0px);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) translateX(100px);
        opacity: 0;
    }
}
`;

// Ajouter l'animation CSS
const style = document.createElement('style');
style.textContent = particleAnimation;
document.head.appendChild(style);

// ===== EFFET PARALLAX =====
function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== MODALES ÉQUIPE =====
function initTeamModals() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-bs-target');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                // Animation d'entrée de la modale
                modal.addEventListener('show.bs.modal', function() {
                    this.querySelector('.modal-content').style.transform = 'scale(0.7)';
                    this.querySelector('.modal-content').style.opacity = '0';
                });
                
                modal.addEventListener('shown.bs.modal', function() {
                    this.querySelector('.modal-content').style.transition = 'all 0.3s ease';
                    this.querySelector('.modal-content').style.transform = 'scale(1)';
                    this.querySelector('.modal-content').style.opacity = '1';
                });
            }
        });
    });
}

// ===== EFFET GLOW =====
function initGlowEffects() {
    const glowElements = document.querySelectorAll('.glow');
    
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.6)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// ===== ANIMATION COUNTER =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(start);
    }, 16);
}

// ===== EFFET TYPING =====
function typeText(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== UTILITAIRES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== GESTIONNAIRE D'ÉVÉNEMENTS =====
window.addEventListener('scroll', throttle(function() {
    if (!isScrolling) {
        isScrolling = true;
        document.body.classList.add('scrolling');
    }
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove('scrolling');
    }, 150);
}, 16));

// ===== INITIALISATION FINALE =====
window.addEventListener('load', function() {
    // Créer les particules
    createParticles();
    
    // Initialiser les effets parallax
    initParallax();
    
    // Initialiser les modales d'équipe
    initTeamModals();
    
    // Initialiser les effets de lueur
    initGlowEffects();
    
    // Ajouter la classe loaded au body
    document.body.classList.add('loaded');
    
    console.log('🎉 La-Team Website - Chargement terminé!');
});

// ===== EXPORT DES FONCTIONS =====
window.LaTeam = {
    scrollToSection,
    showNotification,
    animateCounter,
    typeText
};

// ===== GESTIONNAIRE D'ERREURS =====
window.addEventListener('error', function(e) {
    console.error('❌ Erreur JavaScript:', e.error);
});

// ===== PERFORMANCE =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker enregistré:', registration);
            })
            .catch(function(error) {
                console.log('Erreur ServiceWorker:', error);
            });
    });
}
