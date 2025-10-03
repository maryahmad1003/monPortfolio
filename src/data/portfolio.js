export const personalInfo = {
  name: "MARY VONNE DIALLO",
  title: "Développeuse Full-Stack & Designer UI/UX",
  description: "Passionnée par la tech et la cybersécurité, j'adore explorer de nouvelles technologies et relever des défis de code. En dehors de l'écran, je trouve mon équilibre dans le sport, la lecture et les voyages qui nourrissent ma curiosité et ma créativité.",
  phone: "78 491 44 60",
  email: "vonnemary19@gmail.com",
  github: "maryahmad1003",
  linkedin: "Mary Vonne Diallo"
};

export const skills = [
  "Développement full-stack : conception d'applications web modernes",
  "Administration systèmes et réseaux : installation, configuration, supervision",
  "Sécurité informatique : protection des infrastructures et données",
  "Déploiement et hébergement d'applications (Docker, NGINX, Render, cloud)",
  "Résolution de problèmes techniques & optimisation des performances"
];

export const skillLevels = {
  frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 88 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "PHP", level: 85 },
    { name: "MySQL", level: 82 },
    { name: "API REST", level: 78 }
  ],
  database: [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 75 }
  ],
  design: [
    { name: "Figma", level: 80 }
  ],
  uiux: [
    { name: "Prototyping", level: 80 }
  ],
  autres: [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Méthodes Agiles", level: 85 },
    { name: "Optimisation Performance", level: 80 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Application de Gestion des Apprenants",
    tech: "PHP/MySQL",
    description: "Développement d'un système complet pour gérer les apprenants, leurs inscriptions et suivis.",
    details: "Mise en place de la base de données relationnelle et d'interfaces CRUD."
  },
  {
    id: 2,
    title: "Clone WhatsApp",
    tech: "JavaScript, Tailwind CSS, JSON",
    description: "Application de messagerie en temps réel simulée.",
    details: "Gestion des utilisateurs, messages, groupes et stories via un fichier JSON."
  },
  {
    id: 3,
    title: "To-Do List",
    tech: "React & Node.js",
    description: "Développement d'une application fullstack pour gérer des tâches.",
    details: "Utilisation des hooks React (useState, useEffect, useContext) et API Node.js pour la persistance."
  },
  {
    id: 4,
    title: "Gestion des Salariés",
    tech: "PHP & MySQL",
    description: "Conception d'une application web pour gérer les informations des employés.",
    details: "Fonctions : ajout, mise à jour, suppression, recherche et génération de rapports."
  },
  {
    id: 5,
    title: "Projets Web Divers",
    tech: "HTML, CSS, JavaScript",
    description: "Création de sites vitrine, bannières interactives, cartes cliquables.",
    details: "Exercices pratiques pour renforcer l'UI/UX et les bonnes pratiques de développement."
  }
];

export const experience = [
  {
    id: 1,
    period: "2024 – Présent",
    position: "Téléconseillère",
    company: "Sonatel",
    description: "Assistance et accompagnement des clients dans la gestion de leurs services télécom.",
    achievements: "Développement de compétences en communication, gestion du stress et résolution de problèmes."
  },
  {
    id: 2,
    period: "2023 – 2025",
    position: "Projets académiques & personnels",
    company: "Développement Web & Sécurité",
    description: "Réalisation de plusieurs applications (gestion des apprenants en PHP/MySQL, clone WhatsApp en JavaScript, to-do list en React/Node.js, gestion des salariés, etc.).",
    achievements: "Mise en place d'environnements sécurisés (Linux, réseaux, Docker, NGINX). Pratique en full-stack development et administration réseaux/systèmes & sécurité."
  }
];

export const education = [
  {
    id: 1,
    institution: "IPROSI",
    degree: "Formation en Cybersécurité, Systèmes et Réseaux",
    duration: "2 ans",
    description: "J'ai appris à maîtriser l'administration, la configuration et la protection des infrastructures informatiques."
  },
  {
    id: 2,
    institution: "Sonatel Academy",
    degree: "Formation en Développement Web et Mobile",
    duration: "10 mois",
    description: "Formation intensive et orientée projet. Conception d'applications concrètes en manipulant PHP, JavaScript, React, Node.js et bien plus."
  }
];

export const interests = "Passionnée par la tech et la cybersécurité, j'adore explorer de nouvelles technologies et relever des défis de code. En dehors de l'écran, je trouve mon équilibre dans le sport, la lecture et les voyages qui nourrissent ma curiosité et ma créativité.";
