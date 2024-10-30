import {
  FaBox,
  FaBriefcase,
  FaBullhorn,
  FaCalendar,
  FaCamera,
  FaCode,
  FaGlobe,
  FaGraduationCap,
  FaPalette,
  FaRocket,
  FaSearch,
  FaShareAlt,
} from "react-icons/fa";
import { Container } from "../elements/Container";
import { Span } from "../elements/Span";
import { ServiceCard } from "../marketing/ServiceCard";

export const ServiceSection = () => {
  const services = [
    {
      icon: FaShareAlt,
      title: "Stratégie de communication",
      description:
        "Nous développons des plans de communication sur mesure pour aligner vos objectifs commerciaux avec des stratégies efficaces.",
      href: "/communication",
    },
    {
      icon: FaBullhorn,
      title: "Contenu et réseaux sociaux",
      description:
        "Nous créons du contenu original et engageant pour vos réseaux sociaux, en se concentrant sur l'engagement des auditoires.",
      href: "/communication",
    },
    {
      icon: FaGlobe,
      title: "Marketing digital",
      description:
        "Nous utilisons des outils de marketing digital pour atteindre un public cible spécifique et augmenter la visibilité de votre marque.",
      href: "/communication",
    },
    {
      icon: FaCode,
      title: "Développement web",
      description:
        "Votre site ou application web sur mesure pour répondre à vos besoins spécifiques.",
      href: "/developpement-web",
    },
    {
      icon: FaSearch,
      title: "SEO",
      description:
        "Optimisez votre site web pour les moteurs de recherche et améliorez votre visibilité.",
      href: "/seo",
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
      href: "/événementiel",
    },
    {
      icon: FaRocket,
      title: "Lancements de produits",
      description:
        "Créez un impact durable avec des lancements de produits bien planifiés et exécutés.",
      href: "/événementiel",
    },
    {
      icon: FaBox,
      title: "Coordination logistique",
      description:
        "Assurez-vous que chaque détail logistique est pris en charge, du début à la fin.",
      href: "/événementiel",
    },
    {
      icon: FaBriefcase,
      title: "Recrutement et sélection ",
      description:
        "Trouvez les meilleurs talents grâce à notre expertise en recrutement et sélection.",
      href: "/emploi",
    },
    {
      icon: FaGraduationCap,
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
      href: "/audiovisuel",
    },
  ];
  return (
    <Container>
      <div className="my-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Nos <Span>Spécialités</Span>
        </h2>
        <p className="text-md md:text-xl py-4">
          Explorez notre univers et découvrez comment nous pouvons transformer
          votre communication pour révéler l'essence unique de votre marque.
          Ensemble, faisons briller votre entreprise comme jamais auparavant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              Icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
