import {
  Briefcase,
  Calendar,
  Camera,
  Code,
  Globe,
  Megaphone,
  Package,
  PenTool,
  Rocket,
  School,
  ScreenShare,
  Search,
} from "lucide-react";
import { Container } from "../elements/Container";
import { Span } from "../elements/Span";
import { ServiceCard } from "../marketing/ServiceCard";

export const ServiceSection = () => {
  const services = [
    {
      icon: ScreenShare,
      title: "Stratégie de communication",
      description:
        "Nous développons des plans de communication sur mesure pour aligner vos objectifs commerciaux avec des stratégies efficaces.",
      href: "/communication",
    },
    {
      icon: Megaphone,
      title: "Contenu et réseaux sociaux",
      description:
        "Nous créons du contenu original et engageant pour vos réseaux sociaux, en se concentrant sur l'engagement des auditoires.",
      href: "/communication",
    },
    {
      icon: Globe,
      title: "Marketing digital",
      description:
        "Nous utilisons des outils de marketing digital pour atteindre un public cible spécifique et augmenter la visibilité de votre marque.",
      href: "/communication",
    },
    {
      icon: Code,
      title: "Développement web",
      description:
        "Votre site ou application web sur mesure pour répondre à vos besoins spécifiques.",
      href: "/developpement-web",
    },
    {
      icon: Search,
      title: "SEO",
      description:
        "Optimisez votre site web pour les moteurs de recherche et améliorez votre visibilité.",
      href: "/seo",
    },
    {
      icon: PenTool,
      title: "Graphisme",
      description: "Nous créons des visuels graphiques pour votre entreprise.",
      href: "/graphisme",
    },

    {
      icon: Calendar,
      title: "Planification et organisation d'événements",
      description:
        "De la conception à l'exécution, nous assurons la réussite de vos événements.",
      href: "/événementiel",
    },
    {
      icon: Rocket,
      title: "Lancements de produits",
      description:
        "Créez un impact durable avec des lancements de produits bien planifiés et exécutés.",
      href: "/événementiel",
    },
    {
      icon: Package,
      title: "Coordination logistique",
      description:
        "Assurez-vous que chaque détail logistique est pris en charge, du début à la fin.",
      href: "/événementiel",
    },
    {
      icon: Briefcase,
      title: "Recrutement et sélection ",
      description:
        "Trouvez les meilleurs talents grâce à notre expertise en recrutement et sélection.",
      href: "/emploi",
    },
    {
      icon: School,
      title: "Coaching et formation",
      description:
        "Améliorez les compétences de votre équipe avec des programmes de coaching et de formation personnalisés.",
      href: "/formation",
    },
    {
      icon: Camera,
      title: "Audiovisuel",
      description:
        "Nous réalisons des vidéos pour vos événements, des clips vidéo pour vos artistes préférés, des animations 3D pour vos projets.",
      href: "/audiovisuel",
    },
  ];
  return (
    <Container>
      <div className="my-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Nos <Span>Spécialités</Span>
        </h2>
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
