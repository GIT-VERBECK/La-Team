// ===== CONFIGURATION LA-TEAM WEBSITE =====
// Fichier de configuration pour personnaliser facilement le site

window.LaTeamConfig = {
    // ===== INFORMATIONS GÉNÉRALES =====
    siteInfo: {
        name: "La-Team",
        tagline: "Construisons l'avenir numérique ensemble",
        description: "Groupe de 5 jeunes informaticiens passionnés par le développement logiciel, les réseaux, la cybersécurité et les nouvelles technologies.",
        location: "Goma, République Démocratique du Congo",
        email: "lateamisig@gmail.com",
        phone: "+243 814 717 237"
    },

    // ===== MEMBRES DE L'ÉQUIPE =====
    teamMembers: {
        naomie: {
            name: "KUTEKEMENI Naomie",
            role: "Étudiante ISIG",
            photo: "../../media/image/naomie.jpg",
            formation: "Étudiante à l'ISIG",
            experiences: [
                "CNSS (secrétariat)",
                "INPP (technicien informatique)"
            ],
            skills: [
                "Bureautique (Word, Excel, PowerPoint)",
                "Organisation",
                "Travail en équipe",
                "Communication"
            ],
            languages: ["Français", "Lingala", "Swahili"]
        },

        jeanMarc: {
            name: "JEAN-MARC VERBECK",
            role: "Admin Réseau & Developpeur Web",
            photo: "../../media/image/jean-marc.jpg",
            formation: "Administrateur Réseau Développeur Full Stack (Licence ISIG-Goma)",
            skills: [
                "Administration Réseau & Cybersécurité",
                "Développement Web (HTML, CSS, JS, PHP, BOOTSTRAP)",
                "Programmation Desktop (C#, .NET)",
                "Bases de données (MySQL, SQL Server)",
                "Outils : Git/GitHub, Visual Studio, VS Code"
            ],
            experience: "Technicien réseau & support informatique à ISIG-Goma, projets web et desktop",
            certifications: ["Hikvision Academy (CCTV)"],
            languages: ["Français", "Swahili", "Lingala", "notions d'anglais"]
        },

        hope: {
            name: "NDAKOLA HOPE",
            role: "Mécanicien & Technicien",
            photo: "../../media/image/hope.jpg",
            formation: [
                "Diplôme d'État en mécanique générale (Institut Keshero, 2022-2023)",
                "Brevet en mécanique (formation INPP, 3 mois)"
            ],
            distinctions: ["Distinctions en anglais"],
            profile: ["Esprit technique", "Rigoureux", "Motivé"]
        },

        grace: {
            name: "MUMBERE GRACE",
            role: "Développeuse Full Stack",
            photo: "../../media/image/grace.jpg",
            formation: "Licence 2 en Informatique appliquée à la gestion d'entreprise",
            skills: ["React.js", "NestJS", "SQL Server", "MySQL", "Réseaux & maintenance"],
            qualities: ["Organisation", "Collaboration", "Autonomie"],
            interests: ["Nouvelles technologies", "Cybersécurité", "Développement d'applications"]
        },

        robert: {
            name: "KILESU ROBERT",
            role: "Développeur C#",
            photo: "../../media/image/robert.jpg",
            formation: "Finaliste en Informatique de gestion",
            experiences: ["Stage à l'INPP", "BRALIMA Bukavu"],
            skills: ["C#", "notions Python", "Windows", "Word", "Excel", "Access", "PowerPoint", "Outlook"],
            languages: ["Français", "Swahili", "Lingala", "notions d'anglais"]
        }
    },

    // ===== COMPÉTENCES =====
    skills: {
        webDevelopment: {
            title: "Développement Web",
            icon: "bi-globe",
            skills: ["HTML", "CSS", "JavaScript", "PHP", "React", "NestJS"]
        },
        programming: {
            title: "Programmation",
            icon: "bi-code-square",
            skills: ["C#", "Python", ".NET"]
        },
        networkSecurity: {
            title: "Réseaux & Cybersécurité",
            icon: "bi-shield-lock",
            skills: ["Administration", "Configuration", "Sécurité", "CCTV"]
        },
        databases: {
            title: "Bases de données",
            icon: "bi-database",
            skills: ["MySQL", "SQL Server", "Access"]
        },
        office: {
            title: "Bureautique",
            icon: "bi-file-earmark-text",
            skills: ["Word", "Excel", "PowerPoint", "Outlook"]
        },
        softSkills: {
            title: "Soft Skills",
            icon: "bi-people",
            skills: ["Organisation", "Travail d'équipe", "Communication", "Autonomie"]
        }
    },

    // ===== PROJETS =====
    projects: [
        {
            title: "Gestion de Bibliothèque",
            description: "Application desktop de gestion de bibliothèque développée en C#/.NET",
            icon: "bi-book",
            technologies: ["C#", ".NET", "SQL Server"],
            author: "Jean-Marc"
        },
        {
            title: "Sites Web Dynamiques",
            description: "Développement de sites web modernes et responsifs",
            icon: "bi-globe",
            technologies: ["HTML", "CSS", "JavaScript", "PHP"],
            author: "Jean-Marc & Grace"
        },
        {
            title: "Stage CNSS/INPP",
            description: "Expérience en secrétariat et technicien informatique",
            icon: "bi-building",
            technologies: ["Bureautique", "Support IT"],
            author: "Naomie"
        },
        {
            title: "Formation Mécanique",
            description: "Formation en mécanique générale et brevet INPP",
            icon: "bi-gear",
            technologies: ["Mécanique", "Formation"],
            author: "Hope"
        },
        {
            title: "Stage BRALIMA",
            description: "Stage en entreprise avec expérience en développement",
            icon: "bi-cup-hot",
            technologies: ["C#", "Python", "Bureautique"],
            author: "Robert"
        },
        {
            title: "Applications React",
            description: "Développement d'applications web modernes avec React",
            icon: "bi-phone",
            technologies: ["React", "NestJS", "SQL Server"],
            author: "Grace"
        }
    ],

    // ===== COULEURS ET THÈME =====
    theme: {
        // Nouvelle palette de couleurs moderne et sophistiquée
        primaryColor: "#6366f1",
        secondaryColor: "#8b5cf6",
        accentColor: "#06b6d4",
        successColor: "#10b981",
        warningColor: "#f59e0b",
        dangerColor: "#ef4444",
        
        // Couleurs de texte
        textDark: "#1f2937",
        textLight: "#6b7280",
        textMuted: "#9ca3af",
        
        // Couleurs de fond
        white: "#ffffff",
        lightBg: "#f8fafc",
        lighterBg: "#f1f5f9",
        darkBg: "#0f172a",
        
        // Gradients modernes
        gradientPrimary: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        gradientSecondary: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
        gradientAccent: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
        gradientHero: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
    },

    // ===== ANIMATIONS =====
    animations: {
        typewriterSpeed: 100,
        scrollAnimationDelay: 100,
        cardAnimationDelay: 200,
        skillAnimationDelay: 100,
        particleCount: 50
    },

    // ===== RÉSEAUX SOCIAUX =====
    socialMedia: [
        {
            name: "GitHub",
            icon: "bi-github",
            url: "#",
            color: "#333"
        },
        {
            name: "LinkedIn",
            icon: "bi-linkedin",
            url: "#",
            color: "#0077b5"
        },
        {
            name: "Twitter",
            icon: "bi-twitter",
            url: "#",
            color: "#1da1f2"
        }
    ],

    // ===== MÉTADONNÉES =====
    meta: {
        title: "La-Team - Groupe d'Informaticiens Passionnés",
        description: "Découvrez La-Team, un groupe de 5 jeunes informaticiens passionnés par le développement, les réseaux et la cybersécurité.",
        keywords: "informatique, développement, réseaux, cybersécurité, équipe, Goma, RDC",
        author: "La-Team",
        ogImage: "../../media/image/og-image.jpg"
    },

    // ===== FONCTIONS UTILITAIRES =====
    utils: {
        // Formater un numéro de téléphone
        formatPhone: function(phone) {
            return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
        },

        // Valider un email
        validateEmail: function(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        // Générer un ID unique
        generateId: function() {
            return 'id_' + Math.random().toString(36).substr(2, 9);
        },

        // Formater une date
        formatDate: function(date) {
            return new Date(date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }
};

// ===== EXPORT DE LA CONFIGURATION =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LaTeamConfig;
}

console.log('⚙️ Configuration La-Team chargée avec succès!');
