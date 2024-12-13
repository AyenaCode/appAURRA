import {
  FaBox,
  FaBullhorn,
  FaCalendar,
  FaCamera,
  FaCode,
  FaGlobe,
  FaPalette,
  FaRocket,
  FaSchool,
  FaSearch,
  FaShareAlt,
  FaUserTie,
} from "react-icons/fa";

export const services = [
  {
    icon: FaShareAlt,
    title: "Stratégie de communication",
    description:
      "Nous développons des plans de communication sur mesure pour aligner vos objectifs commerciaux avec des stratégies efficaces.",
    href: "/communication",
  },
  {
    icon: FaGlobe,
    title: "Marketing digital",
    description:
      "Nous utilisons des outils de marketing digital pour atteindre un public cible spécifique et augmenter la visibilité de votre marque.",
    href: "/marketing-digital",
  },
  {
    icon: FaCode,
    title: "Développement web",
    description:
      "Votre site ou application web sur mesure pour répondre à vos besoins spécifiques.",
    href: "/developpement-web",
  },
  {
    icon: FaPalette,
    title: "Graphisme",
    description: "Nous créons des visuels graphiques pour votre entreprise.",
    href: "/graphisme",
  },
  {
    icon: FaCalendar,
    title: "Planification et organisation d'événements",
    description:
      "De la conception à l'exécution, nous assurons la réussite de vos événements.",
    href: "/evenementiel",
  },
  {
    icon: FaUserTie,
    title: "Recrutement et sélection",
    description:
      "Trouvez les meilleurs talents grâce à notre expertise en recrutement et sélection.",
    href: "/recrutement",
  },
  {
    icon: FaSchool,
    title: "Coaching et formation",
    description:
      "Améliorez les compétences de votre équipe avec des programmes de coaching et de formation personnalisés.",
    href: "/formation",
  },
  {
    icon: FaCamera,
    title: "Audiovisuel",
    description:
      "Nous réalisons des vidéos pour vos événements, des clips vidéo pour vos artistes préférés, des animations 3D pour vos projets.",
    href: "/graphisme",
  },
];

export const servicesPage = [
  {
    title: "Graphisme",
    href: "/services/graphisme",
    description:
      "Design graphique et création visuelle pour votre identité de marque",
    icon: "🎨",
  },
  {
    title: "Communication",
    href: "/services/communication",
    description: "Stratégie de communication sur mesure",
    icon: "💬",
  },
  {
    title: "Développement Web",
    href: "/services/developpement-web",
    description:
      "Création de sites web et applications performants et modernes",
    icon: "💻",
  },
  {
    title: "Marketing Digital",
    href: "/services/marketing-digital",
    description: "Stratégies marketing et solutions digitales sur mesure",
    icon: "📱",
  },

  {
    title: "Recrutement",
    href: "/services/recrutement",
    description: "Recrutement et sélection de talents",
    icon: "👥",
  },

  {
    title: "Événementiel",
    href: "/services/evenementiel",
    description: "Planification et organisation d'événements",
    icon: "🎉",
  },
  {
    title: "Audiovisuel",
    href: "/services/graphisme",
    description: "Production et montage vidéo de qualité",
    icon: "🎥",
  },
  {
    title: "Formation",
    href: "/services/formation",
    description: "Formations sur mesure pour votre équipe",
    icon: "🎓",
  },
  {
    title: "SEO",
    href: "/services/seo",
    description: "Optimisation de votre site web pour les moteurs de recherche",
    icon: "🔍",
  },
];

//Navigation
export const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Nos projets", href: "/#projects" },
  { name: "A propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];
